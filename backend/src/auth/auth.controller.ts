import {
  HashedUserCredentialsDto,
  PasswordHashPipe
} from "./pipes/password-hash.pipe";
import { Body, Controller, Post /*Res*/ } from "@nestjs/common";
import { UserCredentialsDto } from "./dto/user-credentials-dto";
// import { FastifyReply } from "fastify";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin")
  async signIn(
    // @Res() response: FastifyReply,
    @Body() credentials: UserCredentialsDto
  ) {
    // const auth = await this.authService.signIn(credentials);

    // response.header("Authorization", `Bearer ${auth.accessToken}`);
    // response.header("Content-Type", "application/json; charset=utf-8");

    // response.send(auth);

    return this.authService.signIn(credentials);
  }

  @Post("signup")
  async signUp(
    // @Res() response: FastifyReply,
    @Body(PasswordHashPipe) credentials: HashedUserCredentialsDto
  ) {
    // const auth = await this.authService.signUp(credentials);

    // response.header("Authorization", `Bearer ${auth.accessToken}`);
    // response.header("Content-Type", "application/json; charset=utf-8");

    // response.send(auth);

    return this.authService.signUp(credentials);
  }
}
