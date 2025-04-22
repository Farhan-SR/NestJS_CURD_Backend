import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('albums')
export class AlbumsController {
  @Post('post')
  getAlbums(@Body() requestData: Record<string, any>) {
    console.log(requestData.name)
    return 'this is album controller';
  }
} 
