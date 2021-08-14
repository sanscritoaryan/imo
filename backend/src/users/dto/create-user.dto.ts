import { IsAlpha, IsUrl, Length, IsOptional } from "class-validator";

export class CreateUserDto {
  @IsAlpha()
  @Length(4, 21)
  username: string;

  @Length(6, 21)
  password: string;

  @IsUrl()
  @IsOptional()
  photoUrl?: string;
}
