import React from 'react';
import {Image, Dimensions, StyleSheet, View} from 'react-native';

import Snow from './Snow';
import BgImg from './winterBg.jpg';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    overflow: 'hidden',
    // backgroundColor: '#0085ff',
  },
  bg: {
    width,
    height,
  },
});

export default function SnowScreen() {
  return (
    <View style={styles.container}>
      <Image source={BgImg} style={styles.bg} />
      <Snow />
    </View>
  );
}
