import { ApolloClient, InMemoryCache } from "@apollo/client";

const zoraClient = new ApolloClient({
  uri: "https://api.zora.co/graphql",
  cache: new InMemoryCache(),
});

export { zoraClient };
