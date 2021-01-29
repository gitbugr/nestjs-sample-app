import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@ObjectType({
  isAbstract: true
})
export class User {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  email!: string;

  password?: string;

  @Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
