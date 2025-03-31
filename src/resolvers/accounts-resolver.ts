import { Query, Resolver, ObjectType, Field, Mutation } from "type-graphql";

@ObjectType()
class Account {
  @Field(() => String) // Especificando explicitamente o tipo GraphQL
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}

@Resolver()
export class AccountsResolver {
  private accounts: Account[] = [
    { id: "1", name: "Alyson", email: "a@b.com" },
    { id: "2", name: "Baum", email: "b@b.com" },
    { id: "3", name: "Caio", email: "c@b.com" }
  ];

  @Query(() => [Account])
  async getAccounts(): Promise<Account[]> {
    return this.accounts;
  }

  @Mutation(() => Account)
  async createAccount(name: string, email: string): Promise<Account> {
    const account = { id: String(this.accounts.length + 1), name, email };
    this.accounts.push(account);
    return account;
  }
}
