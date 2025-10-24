// ✅ Load .env before Prisma runs
import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  engine: 'classic',
  datasource: {
    // ✅ Use the environment variable directly
    url: process.env.DATABASE_URL!,
  },
});

