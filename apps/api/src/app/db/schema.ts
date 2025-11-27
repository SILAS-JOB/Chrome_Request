import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';



export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 225 }).notNull(),
    email: varchar({ length: 225 }).notNull().unique(),
});

export const ordersTable = pgTable("orders", {
    
})
