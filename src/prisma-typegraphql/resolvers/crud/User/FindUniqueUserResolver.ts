import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { User } from "../../../models/User";

@Resolver(_of => User)
export class FindUniqueUserResolver {
  @Query(_returns => User, {
    nullable: true
  })
  async user(@Context() ctx: any, @Args() args: FindUniqueUserArgs): Promise<User | null> {
    return ctx.prisma.user.findUnique(args);
  }
}
