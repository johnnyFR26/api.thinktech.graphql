import { Field, Float, ID, ObjectType } from "type-graphql";
import { User } from "./user-model";
import { Transaction } from "./transaction-model";
import { Currency } from "../enums";

@ObjectType()
export class Account {
    @Field(() => ID)
    id: string;

    @Field(() => Float)
    currentValue: number;

    @Field(() => Currency)
    currency: Currency;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;

    @Field(() => [Transaction])
    transactions: Transaction[];

    @Field(() => User, { nullable: true })
    user?: User;
}