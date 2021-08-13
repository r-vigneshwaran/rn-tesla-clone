import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import CarsList from './Components/CarsList';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <CarsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  carContainer: {
    width: '100%',
    height: '100%'
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
  }
});
