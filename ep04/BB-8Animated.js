import React, {useRef, useState, useEffect} from 'react';
import {Animated, PanResponder} from 'react-native';
import styled from 'styled-components/native';
import HeadComponent from './components/Head';
import BodyComponent from './components/Body';

const FullSizeContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled.View`
  transform: translateX(-${props => props.bodyWidth / 2}px)
  align-items: center;
`;

export default function BB8({bodyWidth = 150}) {
  const animatedX = useRef(new Animated.Value(0)).current;
  const xValue = useRef(0);
  const [isRight, setIsRight] = useState(true);
  const isRightRef = useRef(true);

  useEffect(() => {
    const id = animatedX.addListener(event => {
      xValue.current = event.value;
    });

    return () => animatedX.removeListener(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moveTo = xPos => {
    const distance = xPos - xValue.current;
    const moveRight = distance > 0;

    if (moveRight !== isRightRef.current) {
      setIsRight(moveRight);
      isRightRef.current = moveRight;
    }

    Animated.decay(animatedX, {
      velocity: (0.2 * distance) / 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    moveTo(100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gesture) => {
        moveTo(gesture.x0);
      },
      onPanResponderMove: (event, gesture) => {
        moveTo(gesture.moveX);
      },
    }),
  ).current;

  const rotation = animatedX.interpolate({
    inputRange: [0, bodyWidth * Math.PI],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <FullSizeContainer {...panResponder.panHandlers}>
      <Animated.View style={{transform: [{translateX: animatedX}]}}>
        <Container bodyWidth={bodyWidth}>
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <BodyComponent bodyWidth={bodyWidth} />
          </Animated.View>
          <HeadComponent bodyWidth={bodyWidth} lookRight={isRight} />
        </Container>
      </Animated.View>
    </FullSizeContainer>
  );
}
