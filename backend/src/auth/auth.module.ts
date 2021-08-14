import { AuthController } from "./auth.controller";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./passport/jwt.strategy";
import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: "SUPERSECRET",
      signOptions: { expiresIn: "60s" }
    })
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
