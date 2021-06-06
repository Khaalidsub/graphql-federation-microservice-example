import { Role } from "@apps/common/enums";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  
 
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string
  @Field(() => String, { description: 'Example field (placeholder)' })
  password?: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
  @Field(() => Role, { description: 'Example field (placeholder)', defaultValue:Role.student, nullable:true})
  role: Role;

}