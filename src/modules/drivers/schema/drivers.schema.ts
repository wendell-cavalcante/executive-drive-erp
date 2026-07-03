import {pgTable, uuid, varchar} from "drizzle-orm/pg-core";

const bankData = { // reutizable object for bank data for drivers
    bankName: varchar('bank_name', { length: 50 }).notNull(),
    bankAgency: varchar('bank_agency', { length: 20 }).notNull(),
    bankAccount: varchar('bank_account', { length: 20 }).notNull(),
};

export const drivers = pgTable("drivers", {
    id: uuid().primaryKey().defaultRandom(),
    type: varchar('type', { length: 20 }).notNull(), //CLT, PJ, Autonomo
    
    cnh: varchar('cnh', { length: 20 }).notNull().unique(),
    cpf: varchar('cpf', { length: 14 }).notNull().unique(),
    ...bankData
});