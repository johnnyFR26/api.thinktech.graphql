import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => Number) // Explicitly specifying the GraphQL type
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    password: string;

    @Field(() => String)
    phone: string;

    @Field(() => String)
    cpf: string;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}