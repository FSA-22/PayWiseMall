import { defineConfig } from 'prisma/config';

import { DIRECT_URL } from './src/config/env.js';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: DIRECT_URL,
  },
});
