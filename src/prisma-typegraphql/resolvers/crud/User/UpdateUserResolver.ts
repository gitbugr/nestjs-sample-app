import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { User } from "../../../models/User";

@Resolver(_of => User)
export class UpdateUserResolver {
  @Mutation(_returns => User, {
    nullable: true
  })
  async updateUser(@Context() ctx: any, @Args() args: UpdateUserArgs): Promise<User | null> {
    return ctx.prisma.user.update(args);
  }
}
