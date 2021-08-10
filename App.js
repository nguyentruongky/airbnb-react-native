import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import HomeScreen from './src/screens/Home';
import {Node} from 'react';
import Post from './src/components/Post';

import feed from './assets/data/feed';
import SearchResultScreen from './src/screens/SearchResult';
const post1 = feed[0];

const App: () => Node = () => {
  console.log(post1);
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <SearchResultScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
