CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"bio" text,
	"name" varchar(256),
	"image" text,
	"onboarded" boolean
);
