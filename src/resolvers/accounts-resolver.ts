import { Query, Resolver, Mutation, Args, Arg } from "type-graphql";
import { Account } from "../dtos/models/account-model";
import { CreateAccountInput } from "../dtos/inputs/create-account-input";

@Resolver()
export class AccountsResolver {


  @Query(() => [Account])
  async getAccounts(): Promise<Account[]> {
    return
  }

  // Corrigido para especificar explicitamente o tipo do argumento
  @Mutation(() => Account)
  async createAccount(@Arg("data", () => CreateAccountInput) data: CreateAccountInput){
    
  }
}
