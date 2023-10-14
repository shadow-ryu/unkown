"use server";

import { eq } from "drizzle-orm";
import connectToDb from "../db";
import { users } from "../../schema";

import { revalidatePath } from "next/cache";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
const connectionString = process.env.DATABASE_URL

//  userId: string
export async function fetchUser(userId:string) {
  try {
    const client = postgres(connectionString!)
    const db = drizzle(client);
    // @ts-ignore
    console.log(userId);
    let user = await db.select().from(users).where(eq(users.id, userId));
    // const allUsers = await db.select().from(users);
    // console.log("allUsers",allUsers)
    console.log(user,"fdcndj",userId)
    return user[0];
  } catch (error) {
    // conso le.log(userId);
    // throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface UserUpdateParams {
  userId: string;
  username: string;
  full_name: string;
  bio: string;
  image: string;
  path: string;
}

export async function updateUser({
  userId,
  bio,
  full_name,
  path,
  username,
  image,
}: UserUpdateParams): Promise<void> {
  try {
    console.log("sdxzsd")
    let test;
    const client = postgres(connectionString!)
    const db =  drizzle(client);
   
    let user =  await db.insert(users)
    .values({
      id: userId,
      username: username.toLowerCase(),
      full_name: full_name,
      bio: bio,
      image: image,
      onboarded: true,
    })
    .onConflictDoUpdate({
      target: users.id,
      set:{
        username: username.toLowerCase(),
        full_name: full_name,
        bio: bio,
        image: image,
      },
      where:eq(users.id, userId),
    }).returning();

    if (user) {
      if (path === "/profile/edit") {
        revalidatePath(path);
      }
    } else {
      throw new Error(`User not found for ID: ${userId}`);
    }
  } catch (error) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}
