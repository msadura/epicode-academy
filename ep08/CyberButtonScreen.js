import React, {useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
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
  const btnRef = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Text>auto animate:</Text>
        <CyberButton label="cyberpunk_" />
      </View>
      <View style={styles.btnContainer}>
        <Text>Tap to animate:</Text>
        <TouchableOpacity onPress={() => btnRef.current.animate()}>
          <CyberButton
            ref={btnRef}
            mainColor="blue"
            shadowColor="red"
            disableAutoAnimation
            label="cyberpunk_"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
