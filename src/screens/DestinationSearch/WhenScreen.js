import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import {GradientBackground} from './components/GradientBackground';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import {CalendarView} from './components/CalendarView';
import {FlexibleView} from './components/FlexibleView';
import {black, defaultFont} from '../../common/Format';
import {useEffect} from 'react';

export const WhenScreen = props => {
  const navigation = useNavigation();
  const {route} = props;
  const searchData = route.params.searchData;

  const size = Dimensions.get('screen');
  const [exactDay, setExactDay] = useState(null);
  const [flexibleOption, setFlexibleOption] = useState(null);

  const [type, setType] = useState('calendar');
  const [canNext, setCanNext] = useState(false);

  function toNextScreen() {
    navigation.navigate('WhoComingScreen', {
      searchData: {...searchData, exactDay, flexibleOption},
    });
  }

  useEffect(() => {
    setCanNext(exactDay !== null || flexibleOption !== null);
  }, [exactDay, flexibleOption]);

  function clearExactDay() {
    setExactDay(null);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.gradientContainer, {height: 300}]}>
        <GradientBackground />
      </View>
      <Text style={styles.titleText}>When will you be there?</Text>
      <NavigationBar
        duration={exactDay}
        location={searchData.location.description}
      />

      <TabContainer
        type={type}
        setType={type => {
          if (type === 'flexible') {
            setExactDay(null);
          }
          setType(type);
        }}
      />
      <SafeAreaView
        style={{
          height: size.height - 470,
          backgroundColor: 'white',
        }}>
        {type === 'calendar' ? (
          <CalendarView setSelectedRangeString={setExactDay} />
        ) : (
          <FlexibleView setFlexibleOption={setFlexibleOption} />
        )}
      </SafeAreaView>
      <FooterView
        clearDuration={clearExactDay}
        canNext={canNext}
        toNextScreen={toNextScreen}
      />
    </View>
  );
};

const NavigationBar = ({location, duration}) => {
  const navigation = useNavigation();

  return (
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
          {location}
        </Text>
        {duration && (
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#666',
              marginTop: 4,
              marginRight: 16,
              fontFamily: defaultFont,
            }}>
            {duration}
          </Text>
        )}
      </View>
    </View>
  );
};

const FooterView = ({clearDuration, canNext, toNextScreen}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginBottom: 16,
      }}>
      <Text
        onPress={() => clearDuration()}
        style={{
          fontFamily: defaultFont,
          fontWeight: '500',
          color: black,
          fontSize: 18,
          textDecorationColor: black,
          textDecorationLine: 'underline',
        }}>
        Clear
      </Text>
      <Pressable
        onPress={toNextScreen}
        style={{
          opacity: canNext ? 1 : 0.1,
          backgroundColor: black,
          paddingVertical: 18,
          paddingHorizontal: 24,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: defaultFont,
            fontWeight: '500',
            color: 'white',
            fontSize: 18,
          }}>
          Next
        </Text>
      </Pressable>
    </View>
  );
};

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
});

const TabContainer = ({type, setType}) => {
  const size = Dimensions.get('screen');

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        zIndex: 2,
      }}>
      <View style={myStyles.tabContainer}>
        <Pressable onPress={() => setType('calendar')}>
          <View style={myStyles.tab}>
            <Text
              style={[
                myStyles.switch,
                type === 'calendar' ? myStyles.active : null,
              ]}>
              Calendar
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setType('flexible')}>
          <View style={myStyles.tab}>
            <Text
              style={[
                myStyles.switch,
                type === 'flexible' ? myStyles.active : null,
              ]}>
              I'm flexible
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
