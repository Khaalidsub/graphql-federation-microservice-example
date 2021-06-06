import { IChat } from "@apps/common/interfaces/classes/IChat";
import { Directive, ObjectType } from "@nestjs/graphql";

@ObjectType({implements:()=>[IChat]})
@Directive('@key(fields: "id")')
export class Chat implements IChat{
    id: string;
    users: string[];
    isOpen: boolean;
    createdAt: Date;
    updatedAt: Date;
}