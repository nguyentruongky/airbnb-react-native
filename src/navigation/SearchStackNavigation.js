import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {SearchLocationScreen} from '../screens/DestinationSearch/SearchLocationScreen';
import {DestinationTypeScreen} from '../screens/DestinationSearch/DestinationTypeScreen';
import {ScheduleScreen} from '../screens/DestinationSearch/ScheduleScreen';

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
        name={'DestinationTypeScreen'}
        component={DestinationTypeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ScheduleScreen'}
        component={ScheduleScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
