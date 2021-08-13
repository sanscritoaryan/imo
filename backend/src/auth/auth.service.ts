import * as argon2 from "argon2";
import * as crypto from "crypto";
import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common";
import { HashedUserCredentialsDto } from "./pipes/password-hash.pipe";
import { UserCredentialsDto } from "./dto/user-credentials-dto";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/entities/user.entity";
import b64url from "base64url";

// We need to return a safer version of User entity
// This doesnt ensure it, but kinda hints towards it

type SafeUser = Omit<User, "password">;

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export type AuthResponse = SafeUser & Tokens;

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(credentials: UserCredentialsDto): Promise<AuthResponse> {
    const password = credentials.password.toString();
    const user = await this.usersService.findAll({ username: credentials.username }); // prettier-ignore

    if (user.length < 1) {
      throw new NotFoundException();
    }

    if (!(await argon2.verify(user[0].password, password))) {
      throw new UnauthorizedException();
    }

    const jwt = await this.genereateJWT(this.ensureSafeUser(user[0]));

    return {
      ...this.ensureSafeUser(user[0]),
      ...jwt
    };
  }

  async signUp(credentials: HashedUserCredentialsDto): Promise<AuthResponse> {
    const password = credentials.password.toString();
    const user = await this.usersService.create({ ...credentials, password });
    const jwt = await this.genereateJWT(this.ensureSafeUser(user));

    return {
      ...this.ensureSafeUser(user),
      ...jwt
    };
  }

  private ensureSafeUser(user: User): SafeUser {
    delete user.password;
    return user;
  }

  private async genereateJWT(safeuser: SafeUser): Promise<Tokens> {
    const payload = { username: safeuser.username, sub: safeuser.id };
    const [eheader, epayload] = this.jwtService.sign(payload).split(".");
    const esignature = b64url.encode(
      crypto
        .createHmac("sha256", "SUPERSECRET")
        .update(`${eheader}.${epayload}`)
        .digest()
    );

    return {
      accessToken: `${eheader}.${epayload}.${esignature}`,
      refreshToken: ""
    };
  }
}
