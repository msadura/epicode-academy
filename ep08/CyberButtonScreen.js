import React from 'react';
import {StyleSheet, View} from 'react-native';
import CyberButton from './CyberButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  btnContainer: {
    marginTop: 20,
  },
});

export default function CyberButtonScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <CyberButton label="CYBERPUNK" />
      </View>
    </View>
  );
}
