import React from 'react';
import {View, FlatList, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
import search from '../../assets/data/search';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const SearchLocationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#4884bf'}}>
      <View
        style={{
          marginTop: 44,
          height: 100,
          backgroundColor: 'white',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          paddingHorizontal: 24,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <MaterialIcons name="arrow-back-ios" color="#494949" size={20} />
        <TextInput
          style={{flex: 1, height: 64, fontSize: 18}}
          placeholder="Where are you going?"
        />
        <AntDesign name="closecircle" color="lightgray" size={20} />
      </View>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <FlatList
          data={search}
          renderItem={({item}) => <SuggestionRow item={item} />}
        />
      </View>
    </View>
  );
};

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
