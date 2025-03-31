import { Query, Resolver, Mutation, Args, Arg } from "type-graphql";
import { Account } from "../dtos/models/account-model";
import { CreateAccountInput } from "../dtos/inputs/create-account-input";

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

  // Corrigido para especificar explicitamente o tipo do argumento
  @Mutation(() => Account)
  async createAccount(@Arg("data", () => CreateAccountInput) data: CreateAccountInput){
    const account = { id: String(this.accounts.length + 1), name: data.name, email: data.email };
    this.accounts.push(account);
    return account;
  }
}
