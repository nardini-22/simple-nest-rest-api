import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as dotenv from 'dotenv';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as schema from '../../db/schema';
dotenv.config({ path: '.env' });

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('dev-db') private db: PostgresJsDatabase<typeof schema>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const user = await this.db.query.user.findFirst({
      where: (users, { eq }) => eq(users.id, payload.sub),
    });
    delete user.hash;
    return user;
  }
}
