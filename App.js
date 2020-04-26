/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PanResponder,
  NativeModules,
} from 'react-native';
import styled from 'styled-components/native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AnimatedObjectsJsDriver from './ep01/AnimatedObjectsJsDriver';
import AnimatedObjectsNativeDriver from './ep01/AnimatedObjectsNativeDriver';
import BB8Screen02 from './ep02/BB8Screen';
import BB8Screen03 from './ep03/BB8Screen';

const Container = styled.SafeAreaView`
  flex: 1;
`;

// For screencast purposes - open dev menu with 3-fingers touch
const DevMenuTrigger = ({children, disabled}) => {
  const {DevMenu} = NativeModules;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => {
      if (!disabled && gestureState.numberActiveTouches === 3) {
        DevMenu.show();
      }
    },
  });
  return <Container {...panResponder.panHandlers}>{children}</Container>;
};

const App: () => React$Node = () => {
  return (
    <DevMenuTrigger disabled>
      <Container>
        {/* ep01: Optimize react native animations with native driver */}
        {/* <AnimatedObjectsJsDriver /> */}
        {/* <AnimatedObjectsNativeDriver /> */}
        {/* ep02: BB8 Droid with styled components part 1 */}
        {/* <BB8Screen02 /> */}
        {/* ep03: BB8 Droid with styled components - refactored with dynamic styles and theme */}
        <BB8Screen03 />
      </Container>
    </DevMenuTrigger>
  );
};

export default App;
