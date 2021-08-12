import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const PostCarouselItem = props => {
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
        marginBottom: 140,
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
          style={styles.image}
          source={{
            uri: `${post?.image}`,
          }}
        />
        <View style={{flex: 1, marginHorizontal: 12}}>
          <Text style={styles.bedrooms}>
            {post?.bedroom} bedroom {post?.bed} bed
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post?.type}. {post?.title}
          </Text>

          <Text style={styles.prices}>
            <Text> ${post?.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;
