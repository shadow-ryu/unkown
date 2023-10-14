import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users } from "../../schema";

const connectToDb = () => {
  const connectionString = process.env.DATABASE_URL!;
  const client = postgres(connectionString);
  const db = drizzle(client);
  
  return db;
};
export default connectToDb;
