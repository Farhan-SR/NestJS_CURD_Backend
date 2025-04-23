import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User_Schema, USER_MODEL } from "src/schemas/user";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: USER_MODEL, schema: User_Schema }]),
  ],
  controllers: [UsersController], 
  providers : [UsersService],
  exports: [MongooseModule],
})
export class UsersModule {}
