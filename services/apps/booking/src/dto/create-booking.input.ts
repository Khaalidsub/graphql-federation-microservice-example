import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookingInput {
  @Field()
  student: string;
  @Field()
  tutor: string;
  @Field(() => Date)
  date: Date;
}
