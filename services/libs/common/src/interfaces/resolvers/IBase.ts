import { Logger, Type } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { IBaseService } from '../services';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    protected readonly logger = new Logger(classRef.name);
    constructor(protected service: IBaseService) {
      this.logger.log(`Resolver Registered:${classRef.name}`);
    }
    @Query((type) => [classRef], { name: `findAll${classRef.name}` })
    async findAll(): Promise<T[]> {
      return this.service.findAll();
    }
    @Query((type) => classRef, { name: `findById${classRef.name}` })
    async findById(@Args('id') id: string): Promise<T> {
      return this.service.findById(id);
    }

    @Query((type) => classRef, { name: `remove${classRef.name}` })
    async remove(@Args('id') id: string): Promise<T> {
      return this.service.deleteById(id);
    }
  }
  return BaseResolverHost;
}
