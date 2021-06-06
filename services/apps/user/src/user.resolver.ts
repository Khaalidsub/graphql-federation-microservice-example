import { BaseResolver } from '@apps/common/interfaces';
import { Logger } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UsersService } from './user.service';

@Resolver(() => User, {})
export class UsersResolver extends BaseResolver(User) {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    try {
      return this.usersService.create(createUserInput);
    } catch (error) {
      this.logger.error(error);
      throw new Error(error);
    }
  }
}
