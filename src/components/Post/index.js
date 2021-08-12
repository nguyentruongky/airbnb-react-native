import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Post = props => {
  const post = props.post;
  const navigator = useNavigation();

  function showPostPage() {
    navigator.navigate('PostScreen', {
      id: post.id,
    });
  }
  return (
    <Pressable style={styles.container} onPress={showPostPage}>
      <Image
        style={styles.image}
        source={{
          uri: `${post.image}`,
        }}
      />

      <Text style={styles.bedrooms}>
        {post.bedroom} bedroom {post.bed} bed
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrices}>${post.oldPrice}</Text>
        <Text> ${post.newPrice}</Text> / night
      </Text>

      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </Pressable>
  );
};

export default Post;
