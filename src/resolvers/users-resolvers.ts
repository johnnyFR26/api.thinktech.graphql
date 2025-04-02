import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../dtos/models/user-model";
import { db } from "../../lib/db";
import { CreateUserInput } from "../dtos/inputs/create-user-input";
import bcrypt from "bcrypt"


@Resolver()
export class UsersResolver {
    @Query(() => [User])
    async getUsers(){
        const users = await db.user.findMany()
        return users
    }

    @Query(() => User)
    async getUser(@Arg("id", () => Number) id: number){
        const user = await db.user.findUnique({
            where: {
                id
            }
        })
        if(!user){
            throw new Error("User not found")
        }
        return user
        }

    @Mutation(() => User)
    async createUser(@Arg("data", () => CreateUserInput) data: CreateUserInput){
        data.password = await bcrypt.hash(data.password, 10)
        const user = await db.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                phone: data.phone,
                cpf: data.cpf
            }
        })
        return user
    }

    @Mutation(() => User)
    async deleteUser(@Arg("id", () => Number) id: number){
        const user = await db.user.delete({
            where: {
                id
            }
        })
        return user
    }
}