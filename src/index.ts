import { startStandaloneServer } from '@apollo/server/standalone';
import "reflect-metadata"
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolvers/appointments-resolver";

const schema = await buildSchema({
  resolvers: [
    AppointmentsResolver,
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