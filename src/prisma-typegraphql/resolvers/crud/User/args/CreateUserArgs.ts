import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { UserCreateInput } from "../../../inputs/UserCreateInput";

@ArgsType()
export class CreateUserArgs {
  @Field(_type => UserCreateInput, {
    nullable: false
  })
  data!: UserCreateInput;
}
