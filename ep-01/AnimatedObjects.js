import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, Animated} from 'react-native';

const styles = StyleSheet.create({
  ball: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#000000',
    position: 'absolute',
  },
  scene: {
    flex: 1,
  },
});

const {width, height} = Dimensions.get('window');

export default function AnimatedObjects() {
  // return null;
  return (
    <View style={[styles.scene]}>
      {new Array(800).fill(true).map((_, i) => (
        <AnimatedBall key={i} />
      ))}
    </View>
  );
}

function AnimatedBall() {
  const animatedPosition = useRef(new Animated.Value(0)).current;
  const [xPos, setXPos] = useState(getRandomXPos);

  useEffect(() => {
    animate();
  }, []);

  const getRandomXPos = () => {
    return Math.random() * width;
  };

  const animate = () => {
    setXPos(getRandomXPos());
    animatedPosition.setValue(0);
    Animated.timing(animatedPosition, {
      toValue: height,
      duration: Math.random() * 3000 + 2000,
      useNativeDriver: true,
    }).start(() => animate());
  };

  return (
    <Animated.View style={[styles.ball, {top: animatedPosition, left: xPos}]} />
  );
}
