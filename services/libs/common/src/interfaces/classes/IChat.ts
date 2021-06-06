import { Field, InterfaceType } from "@nestjs/graphql";
import { IUser } from "./IUser";

@InterfaceType()
export  abstract class IChat {
    @Field()
    id: string;
    @Field(()=>[IUser])
    users: string[];
    @Field()
    isOpen: boolean;
    @Field(() =>Date,{nullable:true})
    createdAt: Date
    @Field(() =>Date,{nullable:true})
    updatedAt:Date
}