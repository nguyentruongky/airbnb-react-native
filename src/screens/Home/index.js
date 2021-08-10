import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const background = require('../../../assets/images/wallpaper.jpg');
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('DestinationSearchScreen')}>
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.buttonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground source={background} style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.log('button click')}>
          <Text style={styles.buttonText}>Explore nearby places</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
