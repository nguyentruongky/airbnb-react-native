import React, {useState} from 'react';
import {View, Text, FlatList, TextInput, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
import search from '../../../assets/data/search';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={search}
        renderItem={({item}) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;

const GooglePlaceView = navigation => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          console.log(data, details);
          navigation.navigate('GuestsScreen');
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        renderRow={item => <SuggestionRow item={item} />}
        query={{
          key: 'AIzaSyDEaG_v4l6w1TxAGBDM7mAh0uSEyLQcHAQ',
          language: 'en',
          type: '(cities)',
        }}
      />
    </View>
  );
};
