import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import placeIcon from '../../assets/images/search-type-place.png';
import experienceIcon from '../../assets/images/search-type-experience.png';
import {GradientBackground} from './components/GradientBackground';
import {TitleBar} from './components/TitleBar';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export const DestinationTypeScreen = () => {
  const navigation = useNavigation();

  const size = Dimensions.get('screen');
  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <GradientBackground />
      </View>

      <Text style={styles.titleText}>What are you looking for?</Text>
      <TitleBar />
      <SafeAreaView style={{backgroundColor: 'white', zIndex: 2}}>
        <Pressable onPress={() => navigation.navigate('ScheduleScreen')}>
          <Card
            title="Find a place to stay"
            description="Entire homes, rooms & more"
            image={placeIcon}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('ScheduleScreen')}>
          <Card
            title="Find an experience"
            description="Activities hosted by locals"
            image={experienceIcon}
          />
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const Card = ({title, description, image}) => (
  <View
    style={{
      height: 100,
      marginHorizontal: 24,
      marginVertical: 16,
      borderRadius: 16,
      borderColor: 'lightgrey',
      backgroundColor: 'white',
      borderWidth: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }}>
    <View style={{marginHorizontal: 24}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: '600',
          color: '#242424',
          fontFamily: 'AirbnbCerealApp-Book',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#888888',
          marginTop: 4,
          fontWeight: '400',
          fontFamily: 'AirbnbCerealApp-Book',
        }}>
        {description}
      </Text>
    </View>
    <Image
      source={image}
      style={{height: 72, width: 72, borderRadius: 16, marginRight: 16}}
    />
  </View>
);
