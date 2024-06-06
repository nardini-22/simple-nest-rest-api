ALTER TABLE "bookmark" ADD COLUMN "user_id" integer;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");