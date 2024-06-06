import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from '../db/schema';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('dev-db') private db: PostgresJsDatabase<typeof schema>,
  ) {}
  async editUser(userId: number, dto: EditUserDto) {
    const [user] = await this.db
      .update(schema.user)
      .set({ ...dto })
      .where(eq(schema.user.id, userId))
      .returning();

    delete user.hash;

    return user;
  }
}
