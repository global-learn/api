# Global Learn

Корпоративная LMS-платформа для ООО «Джи Эм Трейд».  
Система предназначена для обучения сотрудников, прохождения курсов, управления задачами и отслеживания прогресса обучения.

---

## Tech Stack

### Backend
- NestJS
- Prisma ORM
- PostgreSQL
- Redis
- JWT Authentication
- RBAC Authorization

### Infrastructure
- Docker
- Docker Compose
- MinIO
- Nginx

---

# Features

- JWT authentication
- Role-based access control
- Department system
- Course management
- Module & lesson system
- File uploads
- Course progress tracking
- Onboarding system
- Employee onboarding management
- Notifications
- Avatar/emotion system
- Swagger API documentation

---

# System Roles

| Role | Description |
|---|---|
| Main Admin | Full system access |
| Department Head | Department management |
| Employee | Course participation |

---

# Project Structure

```txt
global-learn-api/
│
├── src/
│   ├── libs/
│   |── infra/
│   |── modules/
│   └── shared/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── docker files
│
├── docs/
│
├── uploads/
│
└── nginx/
```

---

# Architecture

```txt
Client
   │
   ▼
Nginx (Reverse Proxy)
   │
   ▼
NestJS API Containers
   │
   ├── PostgreSQL
   ├── Redis
   └── MinIO
```

---

# Requirements

- Node.js >= 24
- Docker
- Docker Compose

---

# Environment Variables

Create `.env` file:

```bash
cp .env.example .env
```

Example:

```env
NODE_ENV=development

PORT=3000

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/global_learn

JWT_ACCESS_SECRET=super_secret
JWT_REFRESH_SECRET=super_refresh_secret

REDIS_HOST=localhost
REDIS_PORT=6379

MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_ACCESS_KEY=minio
MINIO_SECRET_KEY=minio123
MINIO_BUCKET=global-learn
```

---

# Installation

## Clone repository

```bash
git clone git@github.com:company/global-learn.git
```

```bash
cd global-learn
```

---

## Install dependencies

```bash
npm install
```

---

## Start infrastructure

```bash
docker compose up -d
```

---

## Run database migrations

```bash
npx prisma migrate dev
```

---

## Generate Prisma client

```bash
npx prisma generate
```

---

## Start application

Development mode:

```bash
npm run start:dev
```

Production mode:

```bash
npm run build
npm run start:prod
```

---

# Docker

Start containers:

```bash
docker compose up -d
```

Stop containers:

```bash
docker compose down
```

Rebuild containers:

```bash
docker compose up -d --build
```

View logs:

```bash
docker compose logs -f
```

---

# Database

Open Prisma Studio:

```bash
npx prisma studio
```

Reset database:

```bash
npx prisma migrate reset
```

---

# API Documentation

Swagger documentation:

```txt
http://localhost:3000/api
```

---

# Scripts

| Command | Description |
|---|---|
| npm run start:dev | Start development server |
| npm run build | Build project |
| npm run lint | Run ESLint |
| npm run format | Run Prettier |
| npm run test | Run tests |
| npm run test:e2e | Run e2e tests |

---

# File Storage

The project uses MinIO for object storage.

Uploaded files:
- course materials
- avatars
- certificates
- attachments

---

# Security

- JWT authentication
- Refresh token rotation
- Password hashing
- RBAC authorization
- Validation pipes
- Rate limiting

---

# Development Workflow

## Create new migration

```bash
npx prisma migrate dev --name init
```

## Update Prisma client

```bash
npx prisma generate
```

## Run lint

```bash
npm run lint
```

---

# Deployment

Production deployment uses:
- Docker
- Nginx
- PostgreSQL
- Redis
- MinIO

Recommended:
- Linux VPS
- Ubuntu 24.04
- GitHub Actions CI/CD

---

# Future Plans

- Real-time notifications
- WebSocket support
- Course certificates
- AI-powered learning assistant
- Mobile application

---

# License

MIT