import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://itcart.io/graphql',
  cache: new InMemoryCache(),
});

export default client;