import React, {useRef, useEffect, useState} from 'react';
import {Animated, StyleSheet, Easing} from 'react-native';

const styles = StyleSheet.create({
  snowflake: {
    color: 'white',
    position: 'absolute',
  },
});

const START_Y_POSITION = -50;

export default function Snowflake({scene}) {
  const animatedY = useRef(new Animated.Value(START_Y_POSITION)).current;
  const animatedRotation = useRef(new Animated.Value(0)).current;
  const animatedSideMovement = useRef(new Animated.Value(0)).current;

  const [config, setConfig] = useState(() => getConfig(scene));

  const runAnimation = snowflakeConfig => {
    animatedY.setValue(START_Y_POSITION);
    animatedRotation.setValue(0);

    const rotateAnimation = Animated.loop(
      Animated.timing(animatedRotation, {
        toValue: 1,
        duration: config.rotationDuration,
        useNativeDriver: true,
      }),
    );

    const sideMovementAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedSideMovement, {
          toValue: -1,
          duration: config.sideMovementDuration,
          easing: Easing.aseInOutSine,
          useNativeDriver: true,
        }),
        Animated.timing(animatedSideMovement, {
          toValue: 1,
          duration: config.sideMovementDuration,
          eeasing: Easing.aseInOutSine,
          useNativeDriver: true,
        }),
      ]),
    );

    const fallAnimation = Animated.sequence([
      Animated.delay(config.fallDelay),
      Animated.timing(animatedY, {
        toValue: scene.height,
        duration: config.fallDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]);

    rotateAnimation.start();
    sideMovementAnimation.start();

    fallAnimation.start(() => {
      const newConfig = getConfig(scene);
      setConfig(newConfig);
    });

    return () => {
      rotateAnimation.stop();
      sideMovementAnimation.stop();
      fallAnimation.stop();
    };
  };

  useEffect(() => {
    if (config) {
      const stopAnimation = runAnimation();
      return () => stopAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  const rotate = animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: config.rotationDirection
      ? ['0deg', '360deg']
      : ['360deg', '0deg'],
    extrapolate: 'clamp',
  });

  const translateX = animatedSideMovement.interpolate({
    inputRange: [-1, 1],
    outputRange: [-config.sideMovementAmplitude, config.sideMovementAmplitude],
  });

  return (
    <Animated.Text
      style={[
        styles.snowflake,
        {
          transform: [{translateY: animatedY}, {rotate}, {translateX}],
        },
        {
          left: config.xPosition,
          fontSize: config.size,
          opacity: config.opacity,
        },
      ]}>
      {config.type}
    </Animated.Text>
  );
}

const snowlakeTypes = ['❄', '❅', '❆'];

function getConfig(scene) {
  const {width} = scene;

  const size = randomInt(10, 18);
  const opacity = randomInt(4, 10) / 10;
  const type = snowlakeTypes[randomInt(0, 2)];

  const xPosition = randomInt(0, width);
  const fallDuration = randomInt(10000, 30000);
  const fallDelay = randomInt(500, 8000);

  const rotationDuration = randomInt(5000, 10000);
  const rotationDirection = randomInt(0, 1);

  const sideMovementDuration = randomInt(3000, 8000);
  const sideMovementAmplitude = randomInt(0, 20);

  return {
    size,
    opacity,
    type,
    xPosition,
    fallDuration,
    fallDelay,
    rotationDuration,
    rotationDirection,
    sideMovementDuration,
    sideMovementAmplitude,
  };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
