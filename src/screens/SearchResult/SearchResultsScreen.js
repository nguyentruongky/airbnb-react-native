import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
import {ResultListView} from './ResultListView';
import {ResultsMapView} from './ResultsMapView';

export const SearchResultsScreen = () => {
  const [activeScreen, setActiveScreen] = useState('list');
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Pressable
          style={[
            styles.tabButton,
            activeScreen === 'list' ? {borderBottomWidth: 2} : null,
          ]}
          onPress={() => setActiveScreen('list')}>
          <Text
            style={
              activeScreen === 'list'
                ? styles.tabButtonTextActive
                : styles.tabButtonText
            }>
            List
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.tabButton,
            activeScreen === 'map' ? {borderBottomWidth: 2} : null,
          ]}
          onPress={() => setActiveScreen('map')}>
          <Text
            style={
              activeScreen === 'map'
                ? styles.tabButtonTextActive
                : styles.tabButtonText
            }>
            Map
          </Text>
        </Pressable>
      </View>
      {activeScreen === 'list' ? (
        <View style={{marginBottom: 120}}>
          <ResultListView />
        </View>
      ) : (
        <ResultsMapView />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    height: 48,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderBottomColor: 'black',
  },

  tabButtonText: {
    textAlign: 'center',
    paddingTop: 14,
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'lightgrey',
  },

  tabButtonTextActive: {
    textAlign: 'center',
    paddingTop: 14,
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
