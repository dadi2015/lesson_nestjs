import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAssetResponse {
  @ApiProperty()
  @IsNumber()
  user: number

  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsString()
  assetId: string
}

export class GetUserAssetsResponse {
  @ApiProperty()
  @IsNumber()
  id: number

  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsString()
  assetId: string

  @ApiProperty()
  @IsString()
  createdAt: string

  @ApiProperty()
  @IsString()
  updatedAt: string

  @ApiProperty()
  @IsNumber()
  user: number
}