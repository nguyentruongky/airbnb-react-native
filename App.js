import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {Node} from 'react';
import Router from './src/navigation/Router';

const App: () => Node = () => {
  return (
    <>
      <StatusBar />
      <Router />
    </>
  );
};

export default App;
