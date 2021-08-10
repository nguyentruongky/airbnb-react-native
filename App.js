import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import HomeScreen from './src/screens/Home';
import {Node} from 'react';

const App: () => Node = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
