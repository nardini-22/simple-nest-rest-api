import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { AuthModule } from '../src/auth/auth.module';
import { BookmarkModule } from '../src/bookmark/bookmark.module';
import * as schema from '../src/db/schema';
import { UserModule } from '../src/user/user.module';
dotenv.config({ path: '.env' });

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    DrizzlePostgresModule.register({
      tag: 'dev-db',
      postgres: { url: process.env.DATABASE_URL },
      config: { schema: { ...schema } },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
