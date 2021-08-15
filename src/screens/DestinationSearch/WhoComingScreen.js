import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {GradientBackground} from './components/GradientBackground';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import {defaultFont} from '../../common/Format';
import {useEffect} from 'react';

export const WhoComingScreen = () => {
  const size = Dimensions.get('screen');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [canSearch, setCanSearch] = useState(false);

  useEffect(() => {
    setCanSearch(adults > 0);
  }, [adults]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[styles.gradientContainer, {height: 450}]}>
        <GradientBackground />
      </View>
      <Text style={styles.titleText}>Who's coming?</Text>
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
          zIndex: 2,
        }}>
        <MaterialIcons
          onPress={() => navigation.goBack()}
          name="arrow-back-ios"
          color="#494949"
          size={20}
        />
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginRight: 16,
              fontSize: 18,
              fontWeight: '600',
            }}>
            Paris
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#666',
              marginTop: 4,
              marginRight: 16,
              fontFamily: defaultFont,
            }}>
            Flexible dates
          </Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          height: 250,
          backgroundColor: 'white',
        }}>
        <View>
          <Row
            title="Adults"
            description="Ages 13 or above"
            value={adults}
            setValue={setAdults}
          />
          <Row
            title="Children"
            description="Ages 2 to 12"
            value={children}
            setValue={setChildren}
          />
          <Row
            title="Infants"
            description="Ages under 2"
            value={infants}
            setValue={setInfants}
          />
        </View>
      </View>

      <FooterView canSearch={canSearch} />
    </View>
  );
};

const FooterView = ({canSearch}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 16,
      marginBottom: 16,
      borderTopColor: 'lightgrey',
      borderTopWidth: 1,
    }}>
    <Text
      style={{
        fontFamily: defaultFont,
        fontWeight: '500',
        color: '#232323',
        fontSize: 18,
        textDecorationColor: '#232323',
        textDecorationLine: 'underline',
      }}>
      Skip
    </Text>
    <Pressable
      disabled={!canSearch}
      style={{
        backgroundColor: canSearch ? '#232323' : '#e0e0e0',
        paddingVertical: 18,
        flexDirection: 'row',
        paddingHorizontal: 24,
        borderRadius: 10,
      }}>
      <AntDesign name="search1" size={25} color="white" />
      <Text
        style={{
          fontFamily: defaultFont,
          fontWeight: '700',
          color: 'white',
          fontSize: 18,
          marginLeft: 8,
        }}>
        Search
      </Text>
    </Pressable>
  </View>
);

const myStyles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    alignSelf: 'center',
    padding: 6,
    borderRadius: 40,
  },
  tab: {borderRadius: 20, overflow: 'hidden'},
  switch: {
    fontFamily: defaultFont,
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  active: {
    backgroundColor: 'white',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Row = ({title, description, value, setValue}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'lightgrey',
        marginHorizontal: 20,
      }}>
      <View>
        <Text
          style={{fontWeight: 'bold', fontSize: 18, fontFamily: defaultFont}}>
          {title}
        </Text>
        <Text style={{color: '#8d8d8d', fontSize: 16, fontFamily: defaultFont}}>
          {description}
        </Text>
      </View>

      {/* -/+ buttons */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable
          onPress={() => {
            const newValue = value - 1 < 0 ? 0 : value - 1;
            setValue(newValue);
          }}
          style={myStyles.button}>
          <Text
            style={{fontSize: 20, color: '#474747', fontFamily: defaultFont}}>
            -
          </Text>
        </Pressable>

        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 16,
            fontFamily: defaultFont,
            width: 24,
            textAlign: 'center',
          }}>
          {value}
        </Text>

        <Pressable onPress={() => setValue(value + 1)} style={myStyles.button}>
          <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};
