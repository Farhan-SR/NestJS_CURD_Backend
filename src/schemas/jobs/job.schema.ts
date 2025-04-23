import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Address, addressSchema } from "../common/address.schema";
import { User ,USER_MODEL} from "../user";
import { Document, Types } from "mongoose";
import { JOB_TYPE } from "src/constants";

@Schema({
    timestamps: true,
  })
  export class Job {
    @Prop({ type: Types.ObjectId,ref: USER_MODEL,  required: true })
    employer: Types.ObjectId | User;
  
    @Prop({ required: true })
    companyName: string;
  
    @Prop({ required: true })
    title: string;
  
    @Prop({ required: true })
    description: string;
  
    @Prop({ required: true })
    experience: number;
  
    @Prop({ default: [] })
    tags?: string[];
  
    @Prop()
    salary?: String;
  
    @Prop({
      type: String,
      enum: Object.keys(JOB_TYPE),
      required: true,
    })
    type: JOB_TYPE;
  
    @Prop({ type: addressSchema, required: true })
    location: Address;
  }
  export const JobSchema = SchemaFactory.createForClass(Job);

export const JOB_MODEL = Job.name ;
export type JobDocument = Job & Document;