import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {SearchLocationScreen} from '../screens/DestinationSearch/SearchLocationScreen';
import {WhatLookingScreen} from '../screens/DestinationSearch/WhatLookingScreen';
import {WhenScreen} from '../screens/DestinationSearch/WhenScreen';
import {WhoComingScreen} from '../screens/DestinationSearch/WhoComingScreen';

const Stack = createStackNavigator();

export const SearchStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'SearchLocationScreen'}
        component={SearchLocationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'WhatLookingScreen'}
        component={WhatLookingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'WhenScreen'}
        component={WhenScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'WhoComingScreen'}
        component={WhoComingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
