import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AccountStatus, AccountType } from 'src/constants';
import { Address, addressSchema } from '../common/address.schema';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;
  @Prop({ required: true, select: false })
  password: string;
  @Prop()
  age?: number;

  @Prop()
  phone?: string;

  @Prop({
    type: String,
    enum: Object.keys(AccountStatus),
    default: AccountStatus.ACTIVE,
  })
  status?: AccountStatus;

  @Prop({
    type: String,
    enum: Object.keys(AccountType),
    immutable: true,
    required: true,
  })
  accountType: AccountType;

  @Prop({ default: [] })
  social?: string[];

  @Prop({ default: false })
  isVerified?: boolean;

  @Prop({ type: addressSchema, required: true })
  address: Address;

  @Prop(
    raw({
      reference: { type: String },
      beta: { type: Boolean },
    }),
  )
  metadata: Record<string, any> | any;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type Userdocument = User & Document;
export const User_Schema = UserSchema;
export const USER_MODEL = User.name;

