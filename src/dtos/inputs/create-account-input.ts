import { Field, ID, InputType } from "type-graphql";
import { Currency } from "../enums";

@InputType()
export class CreateAccountInput {
  @Field(() => Number)
  currentValue: number;

  @Field(() => Currency)
  currency: Currency;

  @Field(() => Number)
  userId: number;
}