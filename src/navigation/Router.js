import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
const Stack = createStackNavigator();
import HomeTabNavigator from './HomeTabNavigator';
import {PostScreen} from '../screens/PostScreen';

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
          name={'PostScreen'}
          component={PostScreen}
          options={{
            title: 'Accommodation',
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
