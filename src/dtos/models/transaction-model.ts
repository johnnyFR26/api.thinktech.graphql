import { TransactionType } from "@prisma/client";
import { Field, Float, ID, ObjectType } from "type-graphql";
import { Account } from "./account-model";

@ObjectType()
export class Transaction {
    @Field(() => ID)
    id: string;

    @Field(() => Float)
    value: number;

    @Field(() => TransactionType)
    type: TransactionType;

    @Field()
    destination: string;

    @Field()
    description: string;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Account)
    account: Account;
}