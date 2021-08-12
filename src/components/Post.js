import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Post = props => {
  const post = props.post;
  const navigator = useNavigation();

  function showPostPage() {
    navigator.navigate('PostScreen', {
      id: post.id,
    });
  }
  return (
    <Pressable style={{margin: 20}} onPress={showPostPage}>
      <Image
        style={{
          width: '100%',
          aspectRatio: 3 / 2,
          resizeMode: 'cover',
          borderRadius: 10,
        }}
        source={{
          uri: `${post.image}`,
        }}
      />

      <Text style={{marginVertical: 10, fontSize: 16, color: '#5b5b5b'}}>
        {post.bedroom} bedroom {post.bed} bed
      </Text>
      <Text style={{fontSize: 18, lineHeight: 26}} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
        <Text style={{color: '#5b5b5b', textDecorationLine: 'line-through'}}>
          ${post.oldPrice}
        </Text>
        <Text> ${post.newPrice}</Text> / night
      </Text>

      <Text
        style={{
          fontSize: 18,
          color: '#5b5b5b',
          textDecorationLine: 'underline',
        }}>
        ${post.totalPrice} total
      </Text>
    </Pressable>
  );
};
