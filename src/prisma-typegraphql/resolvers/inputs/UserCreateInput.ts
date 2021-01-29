import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@InputType({
  isAbstract: true
})
export class UserCreateInput {
  @Field(_type => String, {
    nullable: false
  })
  email!: string;

  @Field(_type => String, {
    nullable: false
  })
  password!: string;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
