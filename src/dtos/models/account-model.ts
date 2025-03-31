import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Account {
  @Field(() => String) // Especificando explicitamente o tipo GraphQL
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}
