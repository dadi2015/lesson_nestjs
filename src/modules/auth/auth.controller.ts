import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDTO } from "../users/dto";
import { UserLoginDTO } from "./dto";
import { AuthUserResponse } from "./response";
import {  ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../guards/jwt-guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }
  
  
  @Post("register")
  register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
    return this.authService.registerUsers(dto);
  }
  
  @Post("login")
  login(@Body() dto: UserLoginDTO): Promise<AuthUserResponse> {
    return this.authService.loginUser(dto);
  }
}
