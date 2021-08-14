import { ArticlesModule } from "./articles/articles.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { AppService } from "./app.service";
import { Module } from "@nestjs/common";
import ormconfig from "../ormconfig";

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    ArticlesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
