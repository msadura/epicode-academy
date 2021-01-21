import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';

const SHADOW_COLOR = '#02d8f3';
const MAIN_COLOR = '#ff003c';
const ANIMATION_DURATION = 2000;
const GLITCH_AMPLITUDE = 5;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  buttonHeight: {
    height: 80,
  },
  leftRectangle: {
    width: 20,
    height: 60,
    backgroundColor: MAIN_COLOR,
  },
  leftCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderRightColor: 'transparent',
    borderTopColor: MAIN_COLOR,
    transform: [{rotate: '90deg'}],
  },
  rightSide: {
    backgroundColor: MAIN_COLOR,
    borderColor: SHADOW_COLOR,
    borderRightWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30,
    paddingLeft: 10,
  },
  rightSideCover: {
    borderRightWidth: 6,
    borderBottomWidth: 3,
    borderTopWidth: 3,
  },
  leftSideCover: {
    borderLeftWidth: 3,
    borderLeftColor: SHADOW_COLOR,
  },
  coverContainer: {
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    zIndex: 1,
  },
  labelText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  glitchText: {
    textShadowColor: SHADOW_COLOR,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
  },
});

export default function CyberButton({label = 'cyberpunk_'}) {
  const mainAnimatedValue = useRef(new Animated.Value(0)).current;
  const animatedX = useRef(new Animated.Value(0)).current;

  const runAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.spring(animatedX, {
          toValue: -GLITCH_AMPLITUDE,
          useNativeDriver: false,
          speed: 1000,
          bounciness: 1000,
        }),
        Animated.spring(animatedX, {
          toValue: GLITCH_AMPLITUDE,
          useNativeDriver: false,
          speed: 1000,
          bounciness: 1000,
        }),
      ]),
    ).start();

    Animated.timing(mainAnimatedValue, {
      toValue: 100,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start(() => {
      mainAnimatedValue.setValue(0);
      runAnimation();
    });
  };

  useEffect(() => {
    runAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const height = mainAnimatedValue.interpolate({
    inputRange: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    outputRange: [0.01, 20, 10, 30, 30, 30, 15, 20, 10, 10, 20],
  });

  const positionY = mainAnimatedValue.interpolate({
    inputRange: [0, 10, 20, 30, 60, 65, 70, 80, 90, 100],
    outputRange: [30, 40, 20, 60, 60, 20, 5, 0, 0, 20],
  });

  return (
    <View style={styles.row}>
      <View style={styles.row}>
        <View>
          <View style={styles.leftRectangle} />
          <View style={styles.leftCorner} />
        </View>
        <View style={[styles.rightSide, styles.buttonHeight]}>
          <Text style={styles.labelText}>{label?.toUpperCase()}</Text>
        </View>
      </View>
      <Animated.View
        style={[
          styles.row,
          styles.coverContainer,
          {height},
          {transform: [{translateX: animatedX}, {translateY: positionY}]},
        ]}>
        <Animated.View
          style={[
            styles.row,
            styles.buttonHeight,
            {transform: [{translateY: Animated.multiply(positionY, -1)}]},
          ]}>
          <View>
            <View style={[styles.leftRectangle, styles.leftSideCover]} />
            <View style={styles.leftCorner} />
          </View>
          <View
            style={[
              styles.rightSide,
              styles.buttonHeight,
              styles.rightSideCover,
            ]}>
            <Text style={[styles.labelText, styles.glitchText]}>
              {label?.toUpperCase()}
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
