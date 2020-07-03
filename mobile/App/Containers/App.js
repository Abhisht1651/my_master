import '../Config'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from '../Navigators/AppNavigator'
import { ApolloProvider } from 'react-apollo';
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 * We separate like this to play nice with React Native's hot reloading.
 */
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";

 
 // create an apollo link instance, a network interface for apollo client
 const link = new HttpLink({
  uri: 'https://b3yoolej0m.execute-api.ap-south-1.amazonaws.com/dev/graphql',
});
// create an inmemory cache instance for caching graphql data
const cache = new InMemoryCache()

const client = new ApolloClient({
  link,cache
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App