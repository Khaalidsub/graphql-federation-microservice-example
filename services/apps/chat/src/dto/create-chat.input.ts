import { IChat } from '@apps/common/interfaces/classes/IChat';
import { Directive, Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateChatInput {
  @Field(() => [String])
  users: string[];
  @Field()
  isOpen: boolean;
}
