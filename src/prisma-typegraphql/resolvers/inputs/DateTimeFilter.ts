import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";

@InputType({
  isAbstract: true
})
export class DateTimeFilter {
  @Field(_type => Date, {
    nullable: true
  })
  equals?: Date | undefined;

  @Field(_type => [Date], {
    nullable: true
  })
  in?: Date[] | undefined;

  @Field(_type => [Date], {
    nullable: true
  })
  notIn?: Date[] | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  lt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  lte?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  gt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  gte?: Date | undefined;

  @Field(_type => NestedDateTimeFilter, {
    nullable: true
  })
  not?: NestedDateTimeFilter | undefined;
}
