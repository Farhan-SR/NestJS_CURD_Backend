import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private config: ConfigService) {}

  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    const username = this.config.get('DATABASE_USER');
    const password = this.config.get('DATABASE_PASSWORD');
    const host = this.config.get('DATABASE_HOST');
    const port = this.config.get('DATABASE_PORT');
    const dbName = this.config.get('DATABASE_NAME');

    const uri = `mongodb+srv://${username}:${password}@cluster0.chuwfiq.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
    return {
      uri,
    };
  }
}
