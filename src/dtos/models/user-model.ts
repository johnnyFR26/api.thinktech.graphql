import { Field, ID, ObjectType } from "type-graphql";
import { Account } from "./account-model";

@ObjectType()
export class User {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    phone: string;

    @Field()
    cpf: string;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;

    @Field(() => Account, { nullable: true })
    account?: Account;
}
