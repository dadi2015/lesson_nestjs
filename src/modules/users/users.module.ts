import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { Watchlist } from "../watchlist/models/watchlist.model";
import { TokenModule } from "../token/token.module";


@Module({
  imports: [SequelizeModule.forFeature([User, Watchlist]), TokenModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
