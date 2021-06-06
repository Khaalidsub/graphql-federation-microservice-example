import { Field, ID, InterfaceType } from '@nestjs/graphql';
import { Role } from '../../enums';

@InterfaceType()
export abstract class IUser {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field(() => Role)
  role: Role;
}
