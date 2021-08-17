import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {StayForView} from './StayForView';
import {GoInView} from './GoInView';
import {getThisMonth} from '../../../common/Date';

export const FlexibleView = ({setFlexibleOption}) => {
  const [stayFor, setStayFor] = useState('weekend');
  const thisMonth = getThisMonth('long');
  const [goIn, setGoIn] = useState(thisMonth);
  function updateStayFor(duration) {
    setStayFor(duration);
    sendDataBack();
  }
  function updateGoIn(month) {
    setGoIn(month);
    sendDataBack();
  }
  function sendDataBack() {
    setFlexibleOption({
      stayFor,
      goInMonth: goIn,
    });
  }
  return (
    <View style={{marginHorizontal: 24}}>
      <StayForView stayFor={stayFor} setStayFor={updateStayFor} />
      <GoInView goIn={goIn} setGoIn={updateGoIn} />
    </View>
  );
};
