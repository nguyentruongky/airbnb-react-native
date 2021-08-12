import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 13,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 15,
  },
  prices: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  oldPrices: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  totalPrice: {
    fontSize: 18,
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

export default styles;
