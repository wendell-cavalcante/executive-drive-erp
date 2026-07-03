import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export const DRIZZLE_CONNECTION = 'DRIZZLE_CONNECTION';

export const databaseProviders = [
  {
    provide: DRIZZLE_CONNECTION,
    useFactory: async () => {
      const pool = new Pool({
        connectionString: 'postgresql://postgres:postgres@localhost:5432/executive_drive',
      });
      return drizzle(pool);
    },
  },
];