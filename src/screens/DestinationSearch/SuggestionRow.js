import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const SuggestionRow = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.row}
      onPress={() =>
        navigation.navigate('WhatLookingScreen', {
          searchData: {
            location: item,
          },
        })
      }>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={30} />
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </Pressable>
  );
};

export default SuggestionRow;
