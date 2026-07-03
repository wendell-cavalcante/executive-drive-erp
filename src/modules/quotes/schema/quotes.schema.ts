import {pgTable, uuid, varchar} from "drizzle-orm/pg-core";
import { clients } from "../../clients/schema/clients.schema";

export const quotes = pgTable('quotes', {
    id: uuid().primaryKey().defaultRandom(),
    clientId: uuid('client_id').notNull().references(() => clients.id),
    status: varchar('status', { length: 20 }).notNull(), //Issued, approved, sketch


});