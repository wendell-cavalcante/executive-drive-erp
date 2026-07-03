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
      
      // Ajustado para o formato aceito pelas versões mais novas do Drizzle ORM
      return drizzle({ client: pool });
    },
  },
];