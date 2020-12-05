import React, {useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import {Animated} from 'react-native';

const EMPTY_COLOR = '#a0a0a1';
const PROGRESS_COLOR = '#0085FF';

const CircleBase = styled(Animated.View)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  border-width: ${props => props.size / 10}px;
`;

const EmptyCircle = styled(CircleBase)`
  border-color: ${EMPTY_COLOR};
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
`;

const Indicator = styled(CircleBase)`
  position: absolute;
  border-left-color: ${PROGRESS_COLOR};
  border-top-color: ${PROGRESS_COLOR};
  border-right-color: transparent;
  border-bottom-color: transparent;
`;

const CoverIndicator = styled(CircleBase)`
  position: absolute;
  border-left-color: ${EMPTY_COLOR};
  border-top-color: ${EMPTY_COLOR};
  border-right-color: transparent;
  border-bottom-color: transparent;
`;

export default function CircularProgress({progress = 0, size = 50}: Props) {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const animateProgress = useRef(toValue => {
    Animated.spring(animatedProgress, {
      toValue,
      useNativeDriver: true,
    }).start();
  }).current;

  useEffect(() => {
    animateProgress(progress);
  }, [animateProgress, progress]);

  const firstIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  const secondIndictorVisibility = animatedProgress.interpolate({
    inputRange: [0, 49, 50, 100],
    outputRange: [0, 0, 1, 1],
    extrapolate: 'clamp',
  });

  return (
    <EmptyCircle size={size}>
      <Indicator
        style={{transform: [{rotate: firstIndicatorRotate}]}}
        size={size}
      />
      <CoverIndicator size={size} />
      <Indicator
        size={size}
        style={{
          transform: [{rotate: secondIndicatorRotate}],
          opacity: secondIndictorVisibility,
        }}
      />
    </EmptyCircle>
  );
}
