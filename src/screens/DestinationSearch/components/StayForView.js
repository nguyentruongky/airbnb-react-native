import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export const StayForView = ({stayFor, setStayFor}) => {
  return (
    <View>
      <Text style={styles.title}>
        Stay for a <Text style={{color: '#232323'}}>{stayFor}</Text>
      </Text>
      <View style={{flexDirection: 'row', marginTop: 24}}>
        <StayForButton
          currentSelected={stayFor}
          title="Weekend"
          select={setStayFor}
        />
        <StayForButton
          currentSelected={stayFor}
          title="Week"
          select={setStayFor}
        />
        <StayForButton
          currentSelected={stayFor}
          title="Month"
          select={setStayFor}
        />
      </View>
    </View>
  );
};

const StayForButton = ({currentSelected, title, select}) => {
  const lowerTitle = title.toLowerCase();
  return (
    <Pressable
      style={[
        styles.stayForButton,
        currentSelected === lowerTitle ? styles.selectedStayForButton : null,
      ]}
      onPress={() => select(lowerTitle)}>
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
    marginTop: 24,
  },
  selectedStayForButton: {
    borderColor: '#232323',
    backgroundColor: '#fafafa',
    borderWidth: 2,
  },
  stayForButton: {
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 48,
  },
  stayForButtonTitle: {
    fontFamily: 'AirbnbCerealApp-Book',
    color: '#232323',
    fontSize: 18,
    backgroundColor: 'white',
  },
});
