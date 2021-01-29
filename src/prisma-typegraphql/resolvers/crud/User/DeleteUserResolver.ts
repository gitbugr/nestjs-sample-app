import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { User } from "../../../models/User";

@Resolver(_of => User)
export class DeleteUserResolver {
  @Mutation(_returns => User, {
    nullable: true
  })
  async deleteUser(@Context() ctx: any, @Args() args: DeleteUserArgs): Promise<User | null> {
    return ctx.prisma.user.delete(args);
  }
}
