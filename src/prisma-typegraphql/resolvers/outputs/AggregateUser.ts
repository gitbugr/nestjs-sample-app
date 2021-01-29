import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";

@ObjectType({
  isAbstract: true
})
export class AggregateUser {
  @Field(_type => UserCountAggregate, {
    nullable: true
  })
  count!: UserCountAggregate | null;

  @Field(_type => UserAvgAggregate, {
    nullable: true
  })
  avg!: UserAvgAggregate | null;

  @Field(_type => UserSumAggregate, {
    nullable: true
  })
  sum!: UserSumAggregate | null;

  @Field(_type => UserMinAggregate, {
    nullable: true
  })
  min!: UserMinAggregate | null;

  @Field(_type => UserMaxAggregate, {
    nullable: true
  })
  max!: UserMaxAggregate | null;
}
