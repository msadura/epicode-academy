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
} from 'react-native';
import styled from 'styled-components/native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AnimatedObjects from './ep-01/AnimatedObjects';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const App: () => React$Node = () => {
  return (
    <Container>
      <AnimatedObjects />
    </Container>
  );
};

export default App;
