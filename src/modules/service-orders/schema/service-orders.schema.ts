import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { quotes } from "../../quotes/schema/quotes.schema";
import { drivers } from "../../drivers/schema/drivers.schema";
import { vehicles } from "../../vehicles/schema/vehicles.schema";

export const serviceOrders = pgTable('service_orders', {
    id: uuid().primaryKey().defaultRandom(),
    quoteId: uuid('quote_id').notNull().references(() => quotes.id),
    driverId: uuid('driver_id').notNull().references(() => drivers.id),
    vehicleId: uuid('vehicle_id').notNull().references(() => vehicles.id),
    status: varchar('status', { length: 20 }).notNull(), //Issued, approved, sketch
});