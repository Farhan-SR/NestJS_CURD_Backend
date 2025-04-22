import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseConfigService } from './infra/mongoose/mongoose-config.service';
import { DatabaseModule } from './infra/mongoose/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),DatabaseModule
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => {
    //     const username = configService.get<string>('DATABASE_USER');
    //     const password = configService.get<string>('DATABASE_PASSWORD');
    //     const dbName = configService.get<string>('DATABASE_NAME') || 'farhan';
    //     const uri = `mongodb+srv://${username}:${password}@cluster0.chuwfiq.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
    //     return { uri };
    //   },
    //   inject: [ConfigService],
    // }),
    // MongooseModule.forRootAsync({
    //   useClass: MongooseConfigService
    // })

  ],
  controllers: [UserController, AlbumsController],
  providers: [],
})
export class AppModule {}
