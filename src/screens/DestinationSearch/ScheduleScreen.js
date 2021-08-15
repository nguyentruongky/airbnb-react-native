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
import {useState} from 'react';
import {CalendarView} from './components/CalendarView';
import {FlexibleView} from './components/FlexibleView';

export const ScheduleScreen = () => {
  const size = Dimensions.get('screen');
  const [duration, setDuration] = useState(null);

  const navigation = useNavigation();
  const [type, setType] = useState('calendar');

  function setSelectedRangeString(dateString) {
    setDuration(dateString);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.gradientContainer, {height: 300}]}>
        <GradientBackground />
      </View>
      <Text style={styles.titleText}>When will you be there?</Text>
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
          {duration && (
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: '#666',
                marginTop: 4,
                marginRight: 16,
                fontFamily: 'AirbnbCerealApp-Book',
              }}>
              {duration}
            </Text>
          )}
        </View>
      </View>

      <TabContainer type={type} setType={setType} />
      <SafeAreaView
        style={{
          height: size.height - 470,
          backgroundColor: 'white',
        }}>
        {type === 'calendar' ? (
          <CalendarView setSelectedRangeString={setSelectedRangeString} />
        ) : (
          <FlexibleView />
        )}
      </SafeAreaView>
      <FooterView />
    </View>
  );
};

const FooterView = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      marginBottom: 16,
    }}>
    <Text
      style={{
        fontFamily: 'AirbnbCerealApp-Book',
        fontWeight: '500',
        color: '#232323',
        fontSize: 18,
        textDecorationColor: '#232323',
        textDecorationLine: 'underline',
      }}>
      Clear
    </Text>
    <Pressable
      style={{
        backgroundColor: '#232323',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontFamily: 'AirbnbCerealApp-Book',
          fontWeight: '500',
          color: 'white',
          fontSize: 18,
        }}>
        Next
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
    fontFamily: 'AirbnbCerealApp-Book',
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
