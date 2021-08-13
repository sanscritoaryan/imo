import {
  HashedUserCredentialsDto,
  PasswordHashPipe
} from "./pipes/password-hash.pipe";
import { Body, Controller, Post } from "@nestjs/common";
import { UserCredentialsDto } from "./dto/user-credentials-dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin")
  signIn(@Body() credentials: UserCredentialsDto) {
    return this.authService.signIn(credentials);
  }

  @Post("signup")
  signUp(@Body(PasswordHashPipe) credentials: HashedUserCredentialsDto) {
    return this.authService.signUp(credentials);
  }
}
