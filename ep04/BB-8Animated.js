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
  background-color: green;
`;

const Container = styled.View`
  transform: translateX(-${props => props.bodyWidth / 2}px)
  align-items: center;
`;

export default function BB8({bodyWidth = 150}) {
  return (
    <FullSizeContainer>
      <Container bodyWidth={bodyWidth}>
        <BodyComponent bodyWidth={bodyWidth} />
        <HeadComponent bodyWidth={bodyWidth} />
      </Container>
    </FullSizeContainer>
  );
}
