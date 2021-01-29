import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@ObjectType({
  isAbstract: true
})
export class UserCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: true
  })
  email!: number | null;

  @Field(_type => Int, {
    nullable: true
  })
  password!: number | null;

  @Field(_type => Int, {
    nullable: true
  })
  createdAt!: number | null;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
