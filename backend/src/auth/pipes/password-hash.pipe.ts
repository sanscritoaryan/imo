import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";
import { UserCredentialsDto } from "../dto/user-credentials-dto";
import * as argon2 from "argon2";

export type HashedUserCredentialsDto = Omit<UserCredentialsDto, "password"> & {
  password: HashedPassword;
};

@Injectable()
export class PasswordHashPipe implements PipeTransform {
  //prettier-ignore
  async transform(credentials: UserCredentialsDto): Promise<HashedUserCredentialsDto> {
    let password: HashedPassword;

    try {
      const hashed = await argon2.hash(credentials.password, { type: argon2.argon2id }); // prettier-ignore
      password = new HashedPassword(hashed);
    } catch {
      throw new BadRequestException({ statusCode: 400, message: "Failed hash password" }); // prettier-ignore
    }

    return { ...credentials, password };
  }
}

class HashedPassword {
  constructor(private value: string) {}
  public toString = (): string => this.value;
}
