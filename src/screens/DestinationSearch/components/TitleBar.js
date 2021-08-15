import React from 'react';
import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';
export const TitleBar = () => {
  return (
    <View style={styles.floatPanel}>
      <MaterialIcons
        onPress={() => navigation.goBack()}
        name="arrow-back-ios"
        color="#494949"
        size={20}
      />
      <Text style={styles.locationName}>Paris</Text>
    </View>
  );
};
