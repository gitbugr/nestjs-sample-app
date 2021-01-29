import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { User } from "../../../models/User";

@Resolver(_of => User)
export class CreateUserResolver {
  @Mutation(_returns => User, {
    nullable: false
  })
  async createUser(@Context() ctx: any, @Args() args: CreateUserArgs): Promise<User> {
    return ctx.prisma.user.create(args);
  }
}
