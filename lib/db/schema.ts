import { pgTable, serial, text, varchar,boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  full_name: text("full_name"),
  bio: text("bio"),
  username: varchar("name", { length: 256 }),
  image: text("image"),
  onboarded:boolean('onboarded')
});
