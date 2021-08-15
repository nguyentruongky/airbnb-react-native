import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchStackNavigation} from '../navigation/SearchStackNavigation';
import GuestsScreen from '../screens/Guests';
const Stack = createStackNavigator();
import HomeTabNavigator from './HomeTabNavigator';
import {PostScreen} from '../screens/PostScreen';
import {WhoComingScreen} from '../screens/DestinationSearch/WhoComingScreen';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* For testing only */}
        <Stack.Screen
          name={'WhoComingScreen'}
          component={WhoComingScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* For testing only */}

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
          name={'SearchStackNavigation'}
          component={SearchStackNavigation}
          options={{
            headerShown: false,
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
