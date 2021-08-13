import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    padding: 10
    // position: 'absolute',
    // bottom: 100
  },
  primary: {
    backgroundColor: '#212022',
    width: '100%',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondary: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
    textTransform: 'uppercase'
  }
});
export default styles;
