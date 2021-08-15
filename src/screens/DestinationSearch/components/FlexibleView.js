import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {StayForView} from './StayForView';
import {GoInView} from './GoInView';

export const FlexibleView = () => {
  const [stayFor, setStayFor] = useState('weekend');
  let thisMonth = new Intl.DateTimeFormat('en', {month: 'long'}).format(
    new Date(),
  );
  const [goIn, setGoIn] = useState(thisMonth);
  return (
    <View style={{marginHorizontal: 24}}>
      <StayForView stayFor={stayFor} setStayFor={setStayFor} />
      <GoInView goIn={goIn} setGoIn={setGoIn} />
    </View>
  );
};
