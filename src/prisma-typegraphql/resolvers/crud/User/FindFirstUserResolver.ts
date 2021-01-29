import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { User } from "../../../models/User";

@Resolver(_of => User)
export class FindFirstUserResolver {
  @Query(_returns => User, {
    nullable: true
  })
  async findFirstUser(@Context() ctx: any, @Args() args: FindFirstUserArgs): Promise<User | null> {
    return ctx.prisma.user.findFirst(args);
  }
}
