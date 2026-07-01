import { pgTable, uuid, varchar} from "drizzle-orm/pg-core";

export const clients = pgTable("clients", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  type: varchar('type', { length: 2 }).notNull(),

  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }),

  document: varchar('document', { length: 14 }).notNull().unique(),
});
