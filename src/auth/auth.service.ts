import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { PostgresError } from 'postgres';
import * as schema from '../db/schema';
import { AuthDto } from './dto';

dotenv.config({ path: '.env' });

@Injectable({})
export class AuthService {
  constructor(
    @Inject('dev-db') private db: PostgresJsDatabase<typeof schema>,
    private jwt: JwtService,
  ) {}
  async signup(dto: AuthDto) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(dto.password, salt);
    try {
      const [user] = await this.db
        .insert(schema.user)
        .values({
          email: dto.email,
          hash,
        })
        .returning();

      return this.signToken(user.id, user.email);
    } catch (err) {
      if (err instanceof PostgresError) {
        if (err.code === '23505') {
          throw new ForbiddenException('Email já cadastrado.');
        }
      }
      throw err;
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.db.query.user.findFirst({
      where: (user, { eq }) => eq(user.email, dto.email),
    });
    if (!user) throw new ForbiddenException('Email não cadastrado');
    const pwMatches = await bcrypt.compare(dto.password, user.hash);
    if (!pwMatches) throw new ForbiddenException('Senha incorreta');

    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: process.env.JWT_SECRET,
    });

    return {
      access_token: token,
    };
  }

  async cleanDb() {
    return this.db.transaction(async (tx) => {
      await tx.delete(schema.bookmark);
      await tx.delete(schema.user);
    });
  }
}
