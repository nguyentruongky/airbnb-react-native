import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

const DetailedPost = props => {
  const post = props.post;

  return (
    <ScrollView>
      <View style={styles.container}>
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
