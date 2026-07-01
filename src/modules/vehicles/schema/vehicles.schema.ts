import {pgTable, uuid, varchar, decimal} from "drizzle-orm/pg-core";

export const vehicles = pgTable("vehicles", {
  id: uuid().primaryKey().defaultRandom(),
  type: varchar('type', { length: 20 }).notNull(), //van or sedan
  
  rateKm: decimal('rate_km', { precision: 10, scale: 2 }).notNull(),
  status: varchar('status', { length: 20 }).notNull(),
});