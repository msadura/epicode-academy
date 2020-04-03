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
    left: 100,
  },
  scene: {flex: 1},
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
  const animatedY = useRef(new Animated.Value(0)).current;
  const [x, setX] = useState(0);

  const animate = () => {
    animatedY.setValue(0);
    setX(Math.random() * width);
    Animated.timing(animatedY, {
      duration: Math.random() * 3000 + 2000,
      toValue: height,
    }).start(() => animate());
  };

  useEffect(() => {
    animate();
  }, []);

  return <Animated.View style={[styles.ball, {left: x, top: animatedY}]} />;
}
