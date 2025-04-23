import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseConfigService } from './mongoose-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  providers:[],
  exports: [MongooseModule],
})
export class DatabaseModule {}
