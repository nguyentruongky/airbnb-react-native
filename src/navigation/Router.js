import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import SearchResultScreen from '../screens/SearchResult';
import GuestsScreen from '../screens/Guests';
const Stack = createStackNavigator();
import HomeTabNavigator from './HomeTabNavigator';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'DestinationSearchScreen'}
          component={DestinationSearchScreen}
          options={{
            title: 'Search your destination',
          }}
        />

        <Stack.Screen
          name={'SearchResultScreen'}
          component={SearchResultScreen}
          options={{
            title: 'Search your destination',
          }}
        />
        <Stack.Screen
          name={'GuestsScreen'}
          component={GuestsScreen}
          options={{
            title: 'Search your destination',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
