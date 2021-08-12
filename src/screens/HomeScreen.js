import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, StyleSheet} from 'react-native';

const background = require('../../assets/images/wallpaper.jpg');
export const HomeScreen = () => {
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

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
    marginTop: 70,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    marginLeft: 25,
    height: 40,
    marginTop: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 40,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
