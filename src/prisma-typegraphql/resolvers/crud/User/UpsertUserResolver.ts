import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpsertUserArgs } from "./args/UpsertUserArgs";
import { User } from "../../../models/User";

@Resolver(_of => User)
export class UpsertUserResolver {
  @Mutation(_returns => User, {
    nullable: false
  })
  async upsertUser(@Context() ctx: any, @Args() args: UpsertUserArgs): Promise<User> {
    return ctx.prisma.user.upsert(args);
  }
}
