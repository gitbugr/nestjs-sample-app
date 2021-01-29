import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@InputType({
  isAbstract: true
})
export class StringFieldUpdateOperationsInput {
  @Field(_type => String, {
    nullable: true
  })
  set?: string | undefined;
}
