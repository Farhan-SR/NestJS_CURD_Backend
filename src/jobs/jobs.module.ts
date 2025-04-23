import { Module } from '@nestjs/common';
import { JobsService } from './job.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JobSchema, JOB_MODEL } from 'src/schemas/jobs';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: JOB_MODEL, schema: JobSchema }]),
  ],
  exports: [MongooseModule],
  providers: [JobsService],
})
export class JobsModule {}
