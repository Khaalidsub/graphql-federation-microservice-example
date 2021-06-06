import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.entity';
import { UsersResolver } from './user.resolver';
import { UsersService } from './user.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_MONGODB_USER}:${process.env.DB_MONGODB_PASS}@${process.env.DB_MONGODB_USER_HOST}:${process.env.DB_MONGODB_PORT}/${process.env.DB_MONGODB_USER_NAME}?authSource=admin`,
      {
        useFindAndModify: false,
        connectionFactory: (connection) => {
          // connection.plugin(require('mongoose-paginate-v2'));
          return connection;
        },
      },
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService, UsersResolver],
})
export class AppModule {}
