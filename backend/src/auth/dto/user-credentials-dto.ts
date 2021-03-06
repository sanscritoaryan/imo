import { IsAlpha, Length } from "class-validator";

export class UserCredentialsDto {
  @IsAlpha()
  @Length(4, 21)
  username: string;

  @Length(6, 21)
  password: string;
}
