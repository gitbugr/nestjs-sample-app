import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@InputType({
  isAbstract: true
})
export class IntFieldUpdateOperationsInput {
  @Field(_type => Int, {
    nullable: true
  })
  set?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  increment?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  decrement?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  multiply?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  divide?: number | undefined;
}
