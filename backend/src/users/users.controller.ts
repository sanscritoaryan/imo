import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  // Delete,
  ParseUUIDPipe,
  Patch,
  UseGuards,
  Req
} from "@nestjs/common";
import { FastifyRequest } from "fastify";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard } from "src/auth/passport/jwt.guard";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";

interface Request extends FastifyRequest {
  user: User;
}

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  update(
    // @Param("id", ParseUUIDPipe) id: string,
    @Req() request: Request,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.update(request.user, updateUserDto);
  }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.usersService.remove(id);
  // }
}
