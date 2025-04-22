import { Body, Controller, Delete, Get, Param, Post, Put, Request } from '@nestjs/common';
import { datadto } from './dto';
import { get } from 'http';
let xxx: datadto[] = [];

@Controller('users')
export class UserController {
  @Post()
  postUser(@Body() datadto: datadto) {
    xxx.push(datadto);
    return ' user added';
  }

  @Get()
  getuser() {
    console.log(datadto.name);
   
    return xxx;
  }
  @Get(':id')
  getbyid(@Param('id') id: number) {
    return xxx.find((x) => x.id == id);
  }
  @Put(':id')
  UpdateUser(@Param('id') id: number , @Body() datadto: datadto) {
    const userindex =  xxx.findIndex((x) => x.id == id);
    if(!userindex){
      return 'user not found';
      
    }
    else{
      xxx[userindex] = datadto;
      return 'user updated';  
    }
  }
  @Delete(':id')
  Deleteuser(@Param('id') id: number ) {
     xxx =  xxx.filter((x) => x.id != id);
     return 'user deleted';

  }


}
