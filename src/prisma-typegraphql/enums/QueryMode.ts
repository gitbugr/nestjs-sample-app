import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum QueryMode {
  "default" = "default",
  insensitive = "insensitive"
}
registerEnumType(QueryMode, {
  name: "QueryMode",
  description: undefined,
});
