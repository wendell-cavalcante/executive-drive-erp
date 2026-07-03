import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/modules/**/schema/*.schema.ts', 
  out: './drizzle', 
  dialect: 'postgresql', 
  dbCredentials: {
    url: 'postgresql://postgres:postgres@localhost:5432/executive_drive', //URL for the connection to the database
  },
});