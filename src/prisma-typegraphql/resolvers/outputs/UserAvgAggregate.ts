import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@ObjectType({
  isAbstract: true
})
export class UserAvgAggregate {
  @Field(_type => Float, {
    nullable: false
  })
  id!: number;
}
