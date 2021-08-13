import React, { useState } from 'react';
import { Text, View, ImageBackground, TouchableHighlight } from 'react-native';
import styles from './styles';
import CustomButton from '../Button';

export default function Card({ image, title, subTitle, taglineCTA }) {
  const [ctaType, setCtaType] = useState(true);
  const [buttonType, setButtonType] = useState(true);

  const handlePressCustom = () => {
    setCtaType(!ctaType);
  };
  const handlePressExisting = () => {
    setButtonType(!buttonType);
  };

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.bgImage} />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subTitle} {` `}
          <Text style={styles.underline}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.bottom}>
        <CustomButton
          handlePress={handlePressCustom}
          title={'Custom Order'}
          type={ctaType ? 'primary' : 'secondary'}
        />
        <CustomButton
          handlePress={handlePressExisting}
          title={'Existing Inventory'}
          type={buttonType ? 'secondary' : 'primary'}
        />
      </View>
    </View>
  );
}
