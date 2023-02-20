import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserLoginDTO {
  @ApiProperty()
  @IsString()
  email: string

  @ApiProperty()
  @IsString()
  password: string
}