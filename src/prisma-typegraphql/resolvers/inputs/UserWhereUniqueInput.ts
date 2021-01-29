import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@InputType({
  isAbstract: true
})
export class UserWhereUniqueInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

  @Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;
}
