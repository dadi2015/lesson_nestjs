import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import * as bcrypt from "bcrypt";
import { CreateUserDTO, UpdateUserDTO } from "./dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userRepository: typeof User) {
  }

  async hashPassword(password) {
    return bcrypt.hash(password, 10);
  }

  async findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
    dto.password = await this.hashPassword(dto.password);
    await this.userRepository.create({
      firstName: dto.firstName,
      username: dto.username,
      email: dto.email,
      password: dto.password
    });
    return dto;
  }

  async publicUser (email: string) {
    return this.userRepository.findOne({
      where: {email},
      attributes: {exclude: ['password']}
    })
  }

  async updateUser (email: string, dto: UpdateUserDTO): Promise<UpdateUserDTO> {
    await this.userRepository.update(dto, {where: {email}})
    return dto
  }

  async deleteUser (email: string) {
    await this.userRepository.destroy({where: {email}})
    return true
  }
}
