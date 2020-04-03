import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, Animated} from 'react-native';

const styles = StyleSheet.create({
  ball: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#333333',
    position: 'absolute',
    top: 0,
  },
  scene: {
    flex: 1,
  },
});

const {width, height} = Dimensions.get('window');

export default function AnimatedObjects() {
  return (
    <View style={[styles.scene]}>
      {new Array(100).fill(true).map((_, i) => (
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
    }).start(() => animate());
  };

  return (
    <Animated.View
      style={[
        styles.ball,
        {
          left: xPos,
          transform: [
            {
              translateY: animatedPosition,
            },
          ],
        },
      ]}
    />
  );
}
