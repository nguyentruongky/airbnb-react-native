import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';

const SearchResultScreen = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={item => <Post post={item.item} />} />
    </View>
  );
};

export default SearchResultScreen;
