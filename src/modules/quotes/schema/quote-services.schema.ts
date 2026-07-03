import {pgTable, uuid, varchar, decimal} from "drizzle-orm/pg-core";
import {quotes} from "../../quotes/schema/quotes.schema";

export const quoteServices = pgTable('quote_services', {

    id: uuid().primaryKey().defaultRandom(),
    quoteId: uuid('quote_id').notNull().references(() => quotes.id),
    origin: varchar('origin', { length: 255 }).notNull(),
    destination: varchar('destination', { length: 255 }).notNull(),

    distanceKm : decimal('distance_km', { precision: 10, scale: 2 }).notNull(),
    vehicleType: varchar('vehicle_type', { length: 50 }).notNull(),
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),
});