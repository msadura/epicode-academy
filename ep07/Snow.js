import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Snowflake from './Snowflake';

const dimensions = Dimensions.get('window');

export default function Snow({snowflakesCount = 100}) {
  return (
    <View
      style={[
        styles.container,
        {width: dimensions.width, height: dimensions.height},
      ]}>
      {new Array(snowflakesCount).fill(true).map((_, i) => (
        <Snowflake key={i} scene={dimensions} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
