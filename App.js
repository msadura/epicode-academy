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
import BB8Screen from './ep02/BB8Screen';

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
        <BB8Screen />
      </Container>
    </DevMenuTrigger>
  );
};

export default App;
