import React, {useEffect, useRef, useImperativeHandle, forwardRef} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';

const SHADOW_COLOR = '#add8e6';
const MAIN_COLOR = '#ff003c';
const ANIMATION_DURATION = 1500;
const GLITCH_AMPLITUDE = 5;
const REPEAT_DELAY = 2000;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  leftCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightColor: 'transparent',
    transform: [{rotate: '90deg'}],
  },
  rightSide: {
    borderRightWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSideCover: {
    borderTopWidth: 2,
  },
  leftSideCover: {
    borderLeftWidth: 2,
  },
  coverContainer: {
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    zIndex: 1,
  },
  labelText: {
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  glitchText: {
    textShadowOffset: {width: 3, height: 2},
    textShadowRadius: 1,
  },
});

function CyberButton(
  {
    label = '',
    buttonHeight = 80,
    glitchAmplitude = GLITCH_AMPLITUDE,
    glitchDuration = ANIMATION_DURATION,
    repeatDelay = REPEAT_DELAY,
    shadowColor = SHADOW_COLOR,
    mainColor = MAIN_COLOR,
    labelTextStyle,
    labelContainerStyle,
    disableAutoAnimation = false,
  },
  ref,
) {
  const cornerCutSize = buttonHeight / 4;
  const mainAnimatedValue = useRef(new Animated.Value(0)).current;
  const animatedX = useRef(new Animated.Value(0)).current;

  const runAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.spring(animatedX, {
          toValue: -glitchAmplitude,
          useNativeDriver: false,
          speed: 1000,
          bounciness: 1000,
        }),
        Animated.spring(animatedX, {
          toValue: glitchAmplitude,
          useNativeDriver: false,
          speed: 1000,
          bounciness: 1000,
        }),
      ]),
    ).start();

    Animated.timing(mainAnimatedValue, {
      toValue: 100,
      duration: glitchDuration,
      useNativeDriver: false,
    }).start(() => {
      mainAnimatedValue.setValue(0);
      if (!disableAutoAnimation) {
        setTimeout(() => runAnimation(), repeatDelay);
      }
    });
  };

  useEffect(() => {
    if (!disableAutoAnimation) {
      runAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(ref, () => ({
    animate: runAnimation,
  }));

  const height = mainAnimatedValue.interpolate({
    inputRange: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    outputRange: [
      0.01,
      buttonHeight / 4,
      buttonHeight / 8,
      buttonHeight / 2.5,
      buttonHeight / 2.5,
      buttonHeight / 2.5,
      buttonHeight / 5.5,
      buttonHeight / 4,
      buttonHeight / 8,
      buttonHeight / 8,
      buttonHeight / 4,
    ],
  });

  const positionY = mainAnimatedValue.interpolate({
    inputRange: [0, 10, 20, 30, 60, 65, 70, 80, 90, 100],
    outputRange: [
      buttonHeight / 2.5,
      buttonHeight / 2,
      buttonHeight / 4,
      buttonHeight / 1.3,
      buttonHeight / 1.3,
      buttonHeight / 4,
      buttonHeight / 16,
      0,
      0,
      buttonHeight / 4,
    ],
  });

  const renderButton = (isCover = false) => {
    return (
      <View style={styles.row}>
        <View>
          <View
            style={[
              {
                height: buttonHeight - cornerCutSize,
                width: cornerCutSize,
                backgroundColor: mainColor,
              },
              isCover ? styles.leftSideCover : null,
              isCover ? {borderLeftColor: shadowColor} : null,
            ]}
          />
          <View
            style={[
              styles.leftCorner,
              {
                borderRightWidth: cornerCutSize,
                borderTopWidth: cornerCutSize,
                borderTopColor: mainColor,
              },
            ]}
          />
        </View>
        <View
          style={[
            styles.rightSide,
            isCover ? styles.rightSideCover : null,
            {
              height: buttonHeight,
              paddingRight: cornerCutSize * 2,
              paddingLeft: cornerCutSize,
              borderColor: shadowColor,
              backgroundColor: mainColor,
            },
            isCover
              ? {
                  borderRightWidth: buttonHeight / 16,
                  borderBottomWidth: buttonHeight / 16,
                }
              : null,
          ]}>
          <Text
            style={[
              styles.labelText,
              {fontSize: buttonHeight / 2.5},
              labelTextStyle,
              isCover ? styles.glitchText : null,
              isCover ? {textShadowColor: shadowColor} : null,
            ]}>
            {label?.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.row}>
      {renderButton()}
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
            {
              transform: [{translateY: Animated.multiply(positionY, -1)}],
              height: buttonHeight,
            },
          ]}>
          {renderButton(true)}
        </Animated.View>
      </Animated.View>
    </View>
  );
}

export default forwardRef(CyberButton);
