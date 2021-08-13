import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('screen').height
  },
  titles: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '30%',
    width: '100%'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute'
  },
  bottom: {
    position: 'absolute',
    bottom: 50,
    width: '100%'
  },
  underline: {
    textDecorationLine: 'underline'
  }
});
export default styles;
