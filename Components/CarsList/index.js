import React from 'react';
import { data } from './data';
import { Dimensions, FlatList, View } from 'react-native';
import Card from '../Card';
import styles from './styles';

const CarsList = () => {
  return (
    <View style={styles.carListContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            taglineCTA={item.taglineCTA}
          />
        )}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('screen').height}
      />
    </View>
  );
};

export default CarsList;
