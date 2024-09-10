import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import client from '../../src/apolloClient';
import store from '../../src/store';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function App() {
  const colorScheme = useColorScheme();
  
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Tabs
          screenOptions={{
           
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: 'Explore',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
              ),
            }}
          />
        </Tabs>
      </Provider>
    </ApolloProvider>
  );
}
