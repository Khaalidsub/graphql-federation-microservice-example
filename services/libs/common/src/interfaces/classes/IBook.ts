import { InterfaceType, Field } from '@nestjs/graphql';
import { IUser } from './IUser';

@InterfaceType()
export abstract class IBooking {
  @Field()
  id: string;
  @Field(() => IUser)
  student: string;
  @Field(() => IUser)
  tutor: string;
  @Field(() => Date)
  date: Date;
}
