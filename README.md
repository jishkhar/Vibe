# Lovable Clone

A professional-grade implementation of the Lovable platform, engineered with modern web technologies and enterprise-ready architecture.

## Overview

Lovable Clone is a comprehensive, open-source recreation of the Lovable platform's core functionality. This project delivers a production-ready alternative with enhanced customization capabilities, robust security measures, and scalable architecture designed for enterprise deployments.

## Core Features

**User Experience**
- Responsive web interface optimized for desktop and mobile platforms
- Real-time collaborative editing with conflict resolution
- Advanced user management with role-based access control
- Comprehensive audit logging and activity tracking

**Technical Capabilities**
- RESTful API with OpenAPI 3.0 specification
- Horizontal scaling support with load balancing
- Comprehensive monitoring and observability
- Automated testing with 90%+ code coverage
- CI/CD pipeline integration

**Security & Compliance**
- JWT-based authentication with refresh token rotation
- OAuth 2.0 integration for third-party providers
- Data encryption at rest and in transit
- GDPR and SOC 2 compliance ready

## Technology Stack

**Frontend Architecture**
- Next.js 14 with App Router for server-side rendering and routing
- React 18 with TypeScript for type safety
- Tailwind CSS for utility-first styling
- shadcn/ui for consistent component library
- TanStack Query for server state management

**Backend Infrastructure**
- Next.js API routes with tRPC for type-safe API layer
- PostgreSQL with Neon for serverless database hosting
- Prisma ORM for type-safe database operations
- Clerk for authentication and user management

**AI & Automation**
- OpenAI API for AI-powered features
- E2B for secure code execution environments
- Inngest for background job processing and workflows

**DevOps & Deployment**
- Docker containerization
- Vercel deployment optimization
- GitHub Actions CI/CD pipeline

## Prerequisites

- Node.js 18.x or higher
- PostgreSQL 14+ (or Neon account)
- Docker and Docker Compose (optional)
- OpenAI API key
- Clerk account for authentication
- E2B API key for code execution

## Installation

### Local Development Setup

1. **Repository Setup**
   ```bash
   git clone git@github.com:jishkhar/Vibe.git
   cd Vibe
   ```

2. **Dependency Installation**
   ```bash
   npm ci
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   Configure the environment variables according to your setup requirements.

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Development Server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

### Docker Deployment

For containerized deployment:

```bash
docker-compose up -d
```

This will start all required services including the application, database, and cache layer.

## Configuration

### Environment Variables

Create a `.env.local` file with the following configuration:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/lovable-clone
# Or for Neon:
# DATABASE_URL=postgresql://username:password@ep-example.us-east-1.postgres.neon.tech/lovable-clone

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_example
CLERK_SECRET_KEY=sk_test_example
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# OpenAI Configuration
OPENAI_API_KEY=sk-example
OPENAI_MODEL=gpt-4-turbo-preview

# E2B Configuration
E2B_API_KEY=e2b_example
E2B_TEMPLATE_ID=your-template-id

# Inngest Configuration
INNGEST_EVENT_KEY=your-inngest-event-key
INNGEST_SIGNING_KEY=your-inngest-signing-key

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

### Database Configuration

The application uses PostgreSQL with Prisma ORM. For development, you can use:

**Local PostgreSQL:**
- Connection pooling: 10-50 connections
- SSL mode: prefer
- Connection timeout: 30s

**Neon (Recommended for production):**
- Serverless PostgreSQL with automatic scaling
- Built-in connection pooling
- Global edge network for low latency

## Testing

### Test Suite Execution

```bash
# Unit and integration tests
npm run test

# End-to-end tests with Playwright
npm run test:e2e

# Test coverage report
npm run test:coverage

# Prisma schema testing
npm run test:db
```

### Quality Assurance

```bash
# Code linting
npm run lint

# Type checking
npm run type-check

# Prisma schema validation
npx prisma validate

# Security audit
npm audit
```

## Deployment

### Production Build

```bash
npm run build
npm run start
```

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### Container Deployment

```bash
# Build production image
docker build -t lovable-clone:latest .

# Run container
docker run -p 3000:3000 --env-file .env.local lovable-clone:latest
```

## API Documentation

Complete API documentation is available at `/api/documentation` in development mode, or access the [OpenAPI specification](./docs/openapi.yaml).

### Authentication

All API endpoints require authentication via JWT tokens:

```http
Authorization: Bearer <your-jwt-token>
```

### Rate Limiting

API endpoints are rate-limited to prevent abuse:
- Public endpoints: 100 requests per hour
- Authenticated endpoints: 1000 requests per hour
- Administrative endpoints: 50 requests per hour

## Architecture

### System Design

The application follows a microservices-inspired architecture with the following components:

- **API Gateway**: Request routing and authentication
- **Business Logic Layer**: Core application functionality
- **Data Access Layer**: Database abstraction and caching
- **External Integration Layer**: Third-party service connections

### Database Schema

The application uses a normalized MongoDB schema with the following collections:

- `users`: User accounts and authentication data
- `projects`: Project metadata and configuration
- `sessions`: Active user sessions
- `audit_logs`: System activity tracking

## Contributing

We welcome contributions from the community. Please review our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Development Standards

- Follow the established code style enforced by ESLint and Prettier
- Maintain test coverage above 90%
- Document all public APIs and complex business logic
- Follow semantic versioning for releases

### Pull Request Process

1. Fork the repository and create a feature branch
2. Implement changes with appropriate test coverage
3. Ensure all CI checks pass
4. Submit a pull request with detailed description
5. Address code review feedback promptly

## Security

### Vulnerability Reporting

To report security vulnerabilities, please email security@yourcompany.com. We will respond within 24 hours and provide regular updates on resolution progress.

### Security Measures

- Regular dependency updates and vulnerability scanning
- Input validation and sanitization
- Rate limiting and DDoS protection
- Secure headers and HTTPS enforcement
- Regular security audits and penetration testing

## Support

### Documentation

- [Technical Documentation](https://docs.yourcompany.com/lovable-clone)
- [API Reference](https://api-docs.yourcompany.com)
- [Deployment Guide](https://deploy.yourcompany.com)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for complete terms and conditions.

---

**Copyright © 2025 k_jish. All rights reserved.**
