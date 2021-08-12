import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {SearchResultsScreen} from '../screens/SearchResult/SearchResultsScreen';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SearchResultsScreen'}
        component={SearchResultsScreen}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
