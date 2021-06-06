import { registerEnumType } from "@nestjs/graphql";

export enum Role{
    student='student',
    tutor='tutor',
    admin='admin'
}

registerEnumType(Role,{
    name:'Role',
})
