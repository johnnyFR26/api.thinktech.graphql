import "reflect-metadata"
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { AccountsResolver } from "./resolvers/accounts-resolver";


const schema = await buildSchema({
  resolvers: [
    AccountsResolver,
  ],
})
async function main() {
  const server = new ApolloServer({
    schema
  })
  const {url} = await startStandaloneServer(server, {
    listen: { port: 4000}
  })
  console.log(`🚀 Server ready at ${url}`)
}

main()