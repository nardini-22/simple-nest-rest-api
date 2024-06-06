import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

dotenv.config({ path: '.env' });

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: 'src/db/migrations' });
    console.log('Migration successful');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
