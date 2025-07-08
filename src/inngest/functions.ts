import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //Download step
    await step.sleep("wait-a-moment", "30s");

    //Summarize step
    await step.sleep("wait-a-moment", "10s");

    //Final step
    await step.sleep("wait-a-moment", "5s");
    return { message: `Hello ${event.data.email}!` };
  },
);
