import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    
  constructor(private readonly usersService: UsersService) {
    console.log("user controller" );
  }
  @Post()
  async create(@Body() createuserdto) {
    console.log("post")
    const user = await this.usersService.create(createuserdto);
    return user ;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateuserdto) {
    return this.usersService.update(id, updateuserdto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
