import React from 'react';
import {View, Dimensions, FlatList} from 'react-native';
import {Post} from '../../components/Post';
import feed from '../../../assets/data/feed';

export const ResultListView = () => {
  return (
    <View style={{width: Dimensions.get('screen').width}}>
      <FlatList data={feed} renderItem={item => <Post post={item.item} />} />
    </View>
  );
};
