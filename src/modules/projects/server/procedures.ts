import { inngest } from "@/inngest/client";
import { prisma } from "@/lib/db";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import z from "zod";
import { generateSlug } from "random-word-slugs";
import { TRPCError } from "@trpc/server";

export const projectsRouter = createTRPCRouter({
    getMany: baseProcedure
        .query(async ({ ctx }) => {
            const projects = await prisma.project.findMany({
                where: {
                    userId: ctx.userId,
                },
                orderBy: {
                    updatedAt: "desc",
                },
            });

            return projects;
        }),

    getOne: baseProcedure
        .input(z.object({
            id: z.string().min(1, { message: "Id is required." }),
        }))
        .query(async ({ input, ctx }) => {
            const existingProject = await prisma.project.findUnique({
                where: {
                    id: input.id,
                    userId: ctx.userId,
                },
            });

            if(!existingProject) {
                throw new TRPCError({ code: "NOT_FOUND", message: "Project not found." });
            }

            return existingProject;
        }),

    create: baseProcedure
        .input(
            z.object({
                value: z.string()
                    .min(1, { message: "Value is required." })
                    .max(10000, { message: "Value is too long." }),
            }),
        )
        .mutation(async ({ input, ctx }) => {
            // Ensure user exists (upsert)
            await prisma.user.upsert({
                where: { id: ctx.userId },
                update: {},
                create: {
                    id: ctx.userId,
                    externalId: ctx.userId,
                },
            });

            const createdProject = await prisma.project.create({
                data: {
                    name: generateSlug(2, {
                        format: "kebab",
                    }),
                    userId: ctx.userId,
                    messages: {
                        create: {
                            content: input.value,
                            role: "USER",
                            type: "RESULT",
                        }
                    }
                }
            });

            await inngest.send({
                name: "code-agent/run",
                data: {
                    value: input.value,
                    projectId: createdProject.id,
                },
            });

            return createdProject;
        }),
});