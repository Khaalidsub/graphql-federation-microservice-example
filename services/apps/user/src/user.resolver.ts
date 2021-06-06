import { BaseResolver } from "@apps/common/interfaces";
import { Logger } from "@nestjs/common";
import { Resolver } from "@nestjs/graphql";
import { User } from "./user.entity";
import { UsersService } from "./user.service";

@Resolver(() => User,{})
export class UsersResolver extends BaseResolver(User){
    private readonly logger = new Logger(UsersResolver.name);
    constructor(
        private readonly usersService: UsersService,
      ) {
          super(usersService)
      }
    
}