import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 16,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
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
