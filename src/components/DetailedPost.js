import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const DetailedPost = props => {
  const post = props.post;

  return (
    <ScrollView>
      <View style={{margin: 20}}>
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

        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            marginVertical: 16,
          }}>
          {post.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailedPost;
