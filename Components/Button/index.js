import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from './styles';

const CustomButton = ({ handlePress, title, type = 'primary' }) => {
  const textType = type === 'primary' ? 'white' : 'black';
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles[type]} onPress={handlePress}>
        <Text style={[styles.text, { color: textType }]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
