import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { UserOrderByInput } from "../../../inputs/UserOrderByInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";

@ArgsType()
export class FindManyUserArgs {
  @Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @Field(_type => [UserOrderByInput], {
    nullable: true
  })
  orderBy?: UserOrderByInput[] | undefined;

  @Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [UserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "password" | "createdAt"> | undefined;
}
