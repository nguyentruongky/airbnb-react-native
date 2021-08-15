import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {StayForView} from './StayForView';
import {GoInView} from './GoInView';
import {getThisMonth} from '../../../common/Date';

export const FlexibleView = () => {
  const [stayFor, setStayFor] = useState('weekend');
  const thisMonth = getThisMonth('long');
  const [goIn, setGoIn] = useState(thisMonth);
  return (
    <View style={{marginHorizontal: 24}}>
      <StayForView stayFor={stayFor} setStayFor={setStayFor} />
      <GoInView goIn={goIn} setGoIn={setGoIn} />
    </View>
  );
};
