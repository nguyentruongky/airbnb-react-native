import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const PostCarouselItem = props => {
  const navigation = useNavigation();
  const post = props.post;

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('PostScreen', {
          id: post.id,
        })
      }
      style={{
        height: 120,
        marginBottom: 100,
        padding: 5,
        width: useWindowDimensions().width - 60,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <Image
          style={{height: '100%', aspectRatio: 1, resizeMode: 'cover'}}
          source={{
            uri: `${post?.image}`,
          }}
        />
        <View style={{flex: 1, marginHorizontal: 12}}>
          <Text style={{marginVertical: 10, fontSize: 13, color: '#5b5b5b'}}>
            {post?.bedroom} bedroom {post?.bed} bed
          </Text>
          <Text style={{fontSize: 15}} numberOfLines={2}>
            {post?.type}. {post?.title}
          </Text>

          <Text style={{fontSize: 15, fontWeight: 'bold', marginVertical: 10}}>
            <Text> ${post?.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
