import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, StyleSheet} from 'react-native';

const background = require('../../assets/images/wallpaper.jpg');
export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: 'black', flex: 1}}>
      <CovidText />
      <View
        style={{
          backgroundColor: '#fafafa',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          marginTop: 32,
        }}>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('DestinationSearchScreen')}>
          <Fontisto name="search" size={25} color="#f15454" />
          <Text style={styles.searchText}>Where are you going?</Text>
        </Pressable>
      </View>
      <View style={{backgroundColor: '#fafafa', flex: 1}}>
        <DescriptionText />
        <ExploreView />
      </View>
    </ScrollView>
  );
};

const CovidText = () => (
  <Text
    style={{
      marginTop: 66,
      textDecorationColor: 'white',
      textDecorationLine: 'underline',
      textAlign: 'center',
      color: 'white',
      fontWeight: '500',
    }}>
    Get the latest on our COVID-19
  </Text>
);

const DescriptionText = () => (
  <Text
    style={{
      fontSize: 44,
      marginHorizontal: 24,
      color: '#555',
      marginTop: 44,
    }}>
    You don't need to go far to find what matters.
  </Text>
);

const ExploreView = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        marginTop: 32,
      }}>
      <Text style={styles.exploreTitle}>Online Experiences</Text>
      <Text
        style={{
          color: 'white',
          marginTop: 8,
          fontSize: 18,
          marginBottom: 32,
          marginHorizontal: 24,
        }}>
        Interactive activities you can do together, led by expert hosts.
      </Text>
      <FlatList
        contentContainerStyle={{paddingLeft: 24, paddingRight: 8}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={onlineExperiences}
        renderItem={({item}) => <OnlineExperienceItem data={item} />}
      />

      <Pressable
        style={{
          alignItems: 'center',
          marginTop: 24,
          marginBottom: 36,
        }}>
        <Text
          style={{
            borderColor: 'white',
            borderWidth: 2,
            fontWeight: 'bold',
            borderRadius: 8,
            color: 'white',
            fontSize: 18,
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}>
          Explore all
        </Text>
      </Pressable>
    </View>
  );
};

const OnlineExperienceItem = props => {
  const {data} = props;
  return (
    <View
      style={{
        width: 250,
        height: 300,
        marginRight: 16,
        borderRadius: 20,
        overflow: 'hidden',
      }}>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
          borderRadius: 20,
        }}
        source={{uri: data.image}}>
        <View
          style={{
            backgroundColor: '#232323',
            height: 80,
            justifyContent: 'center',
            paddingHorizontal: 16,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}
            numberOfLines={2}>
            {data.title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const onlineExperiences = [
  {
    image:
      'https://a0.muscache.com/im/pictures/22f7dfe7-344e-4b55-88a0-3da9e0d45c97.jpg?im_q=medq&im_w=1200',
    title: 'Pasta with the Grandmas',
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/c4f98b13-4d9e-4376-b014-6b3e827c31d0.jpg?im_q=medq&im_w=720',
    title: 'Zen Eating to Enrich Everyday Life',
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/572d1f80-e3dc-4e48-b54b-5c802090e881.jpg?im_q=medq&im_w=720',
    title: "Mate, Argentina's Famous Drink & Tasting",
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/15c33e47-2301-43bf-8a3c-8c8aa1643aa9.jpg?im_q=medq&im_w=1200',
    title: 'Piano Meditation Concert from Paris',
  },
];

const styles = StyleSheet.create({
  searchText: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  searchButton: {
    marginTop: 32,
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 64,
    marginHorizontal: 32,
    marginBottom: 16,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  exploreTitle: {
    marginTop: 36,
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 24,
  },
});
