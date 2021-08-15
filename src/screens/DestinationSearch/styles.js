import {Dimensions, StyleSheet} from 'react-native';
import {defaultFont} from '../../common/Format';
const size = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
  },
  textInput: {
    fontSize: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 16,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
    marginVertical: 15,
  },
  locationText: {
    fontWeight: '500',
  },
  titleText: {
    color: 'white',
    marginHorizontal: 24,
    fontSize: 44,
    fontWeight: '500',
    zIndex: 2,
    fontFamily: defaultFont,
  },
  floatPanel: {
    marginTop: 44,
    height: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  locationName: {
    flex: 1,
    textAlign: 'center',
    marginRight: 16,
    fontSize: 18,
    fontWeight: '600',
  },
  gradientContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: size.height / 1.4,
    width: size.width,
    zIndex: 1,
  },
});

export default styles;
