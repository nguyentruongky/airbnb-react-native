import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const GoInView = ({setMonth}) => {
  const months = getNextMonths();
  let thisMonth = new Intl.DateTimeFormat('en', {month: 'long'}).format(
    new Date(),
  );

  const [goIn, setGoIn] = useState(thisMonth);
  return (
    <View>
      <Text style={styles.title}>
        Go in <Text style={{color: '#232323'}}>{goIn}</Text>
      </Text>
      <FlatList
        style={{marginTop: 24}}
        data={months}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <GoInMonthButton
            key={item}
            currentSelected={goIn}
            title={item}
            select={setGoIn}
          />
        )}
      />
    </View>
  );
};

function getNextMonths() {
  const today = new Date();
  let thisMonth = new Intl.DateTimeFormat('en', {month: 'numeric'}).format(
    today,
  );
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let nextMonths = [];
  for (let i = thisMonth - 1; i < 12; i++) {
    nextMonths.push(months[i]);
  }
  for (let i = 0; i < thisMonth - 1; i++) {
    nextMonths.push(months[i]);
  }
  return nextMonths;
}

const GoInMonthButton = ({currentSelected, title, select}) => {
  return (
    <Pressable
      style={[
        styles.button,
        currentSelected === title ? styles.selectedButton : null,
      ]}
      onPress={() => select(title)}>
      <FontAwesome
        name={currentSelected === title ? 'calendar-check-o' : 'calendar-o'}
        size={24}
        color="#666"
      />
      <Text style={styles.stayForButtonTitle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontFamily: 'AirbnbCerealApp-Book',
    color: '#666',
    fontSize: 20,
    marginTop: 40,
  },
  selectedButton: {
    borderColor: '#232323',
    backgroundColor: '#fafafa',
    borderWidth: 2,
  },
  button: {
    height: 150,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#666',
  },
  stayForButtonTitle: {
    fontFamily: 'AirbnbCerealApp-Book',
    color: '#232323',
    fontSize: 18,
    backgroundColor: 'white',
    marginTop: 16,
  },
});
