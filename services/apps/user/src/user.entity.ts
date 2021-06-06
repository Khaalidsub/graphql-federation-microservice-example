import { Role } from '@apps/common/enums';
import { IUser } from '@apps/common/interfaces';
import { Directive, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@ObjectType({ implements: () => [IUser] })
@Directive('@key(fields: "id")')
@Schema()
export class User implements IUser {
  id: string;
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop({ type: Role })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
