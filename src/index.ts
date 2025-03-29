import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }
  type client {
    id: ID
    name: String
    email: String
  }

  type Query {
    books: [Book]
    clients: [client]
  }


  type Mutation {
    addBook(title: String!, author: String!): Book
    addClient(name: String!, email: String!): client
  }
`;

const clients = [
  {
    id: 1,
    name: 'John Doe',
    email: 'VH4dX@example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: '3oZdI@example.com',
  }
];

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
    clients: () => clients,
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { title, author };
      books.push(newBook);
      return newBook;
    },
    addClient: (_, { name, email }) => {
      const newClient = { id: clients.length + 1, name, email };
      clients.push(newClient);
      return newClient;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
