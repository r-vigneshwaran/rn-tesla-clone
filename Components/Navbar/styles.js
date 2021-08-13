import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    top: 50,
    backgroundColor: 'red'
    // top: 0
    // zIndex: 500
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain'
  },
  menu: {
    width: 25,
    height: 25
  }
});
export default styles;
