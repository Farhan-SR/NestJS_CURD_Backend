import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User_Schema, USER_MODEL } from "src/schemas/user";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: USER_MODEL, schema: User_Schema }]),
  ],
  controllers: [UsersController], 
  exports: [MongooseModule],
})
export class UsersModule {}
