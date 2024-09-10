import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import client from '../../src/apolloClient';
import store from '../../src/store';
import PostListScreen from '../../src/screens/PostListScreen';
import PostDetailScreen from '../../src/screens/PostDetailScreen';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Stack.Navigator initialRouteName="PostList">
        <Stack.Screen name="PostList" component={PostListScreen} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} />
      </Stack.Navigator>
    </ApolloProvider>
  </Provider>
);

export default App;
