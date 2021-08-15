import React from 'react';
import {View, Text} from 'react-native';
import {DetailedPost} from '../components/DetailedPost';
import places from '../assets/data/feed';

export const PostScreen = props => {
  const {route} = props;
  const placeId = route.params.id;
  const index = places.findIndex(item => item.id === placeId);
  const post = places[index];

  return (
    <View>
      <DetailedPost post={post} />
    </View>
  );
};
