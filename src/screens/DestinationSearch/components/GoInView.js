import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getThisMonth, getNextMonths} from '../../../common/Date';
import {black, defaultFont} from '../../../common/Format';

export const GoInView = ({setMonth}) => {
  const months = getNextMonths();
  const thisMonth = getThisMonth('long');

  const [goIn, setGoIn] = useState(thisMonth);
  return (
    <View>
      <Text style={styles.title}>
        Go in{' '}
        <Text style={{color: black, fontFamily: defaultFont}}>{goIn}</Text>
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
    fontFamily: defaultFont,
    color: '#666',
    fontSize: 20,
    marginTop: 40,
  },
  selectedButton: {
    borderColor: black,
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
    fontFamily: defaultFont,
    color: black,
    fontSize: 18,
    backgroundColor: 'white',
    marginTop: 16,
  },
});
