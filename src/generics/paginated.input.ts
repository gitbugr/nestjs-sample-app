import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PaginatedType {
    @Field(() => Int, { nullable: true })
    cursor?: number;

    @Field(() => Int, { nullable: true })
    resultsPerPage: number = 10;
}
