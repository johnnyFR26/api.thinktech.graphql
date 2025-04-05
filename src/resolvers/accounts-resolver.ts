import { Query, Resolver, Mutation, Args, Arg } from "type-graphql";
import { Account } from "../dtos/models/account-model";
import { CreateAccountInput } from "../dtos/inputs/create-account-input";
import { db } from "../../lib/db";

@Resolver()
export class AccountsResolver {


  @Query(() => [Account])
  async getAccounts(){
    const accounts = await db.account.findMany()
    if(!accounts){
      throw new Error("Accounts not found")
    }
    return accounts
  }

  // Corrigido para especificar explicitamente o tipo do argumento
  @Mutation(() => Account)
  async createAccount(@Arg("data", () => CreateAccountInput) data: CreateAccountInput){
    const account = await db.account.create({
      data: {
        currentValue: data.currentValue,
        currency: data.currency,
        user: {
          connect: {
            id: data.userId
          }
        }
      }
    })
    return account
    
  }
}
