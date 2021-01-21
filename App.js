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
import BB8ScreenAnimated from './ep04/BB8ScreenAnimated';
import ReduxAppScreen from './ep05/ReduxAppScreen';
import CircularProgressScreen from './ep06/CircularProgressScreen';
import SnowScreen from './ep07/SnowScreen';

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
        {/* <BB8Screen03 /> */}
        {/* ep04: BB8 Droid Animated */}
        {/* <BB8ScreenAnimated /> */}
        {/* ep05: Redux App Screen with debugger */}
        {/* <ReduxAppScreen /> */}
        {/* ep06: Circular progress component */}
        {/* <CircularProgressScreen /> */}
        {/* ep07: Animated snow */}
        <SnowScreen />
      </Container>
    </DevMenuTrigger>
  );
};

export default App;
