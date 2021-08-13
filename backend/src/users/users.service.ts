import {
  BadRequestException,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { FindConditions, ObjectLiteral, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
// import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

type UserWhere =
  | string
  | ObjectLiteral
  | FindConditions<User>
  | FindConditions<User>[];

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = this.usersRepository.create(createUserDto);
      return await this.usersRepository.save(user);
    } catch (err) {
      throw new BadRequestException();
    }
  }

  findAll(where?: UserWhere): Promise<User[]> {
    return this.usersRepository.find({ where });
  }

  async findOne(id: string): Promise<User> {
    try {
      return await this.usersRepository.findOneOrFail(id);
    } catch {
      throw new NotFoundException();
    }
  }

  // update(id: string, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} user`;
  // }
}
