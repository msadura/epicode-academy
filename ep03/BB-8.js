import React from 'react';
import styled from 'styled-components/native';
import HeadComponent from './components/Head';
import BodyComponent from './components/Body';

const Container = styled.View`
  align-items: center;
`;

export default function BB8({bodyWidth = 150}) {
  return (
    <Container>
      <BodyComponent bodyWidth={bodyWidth} />
      <HeadComponent bodyWidth={bodyWidth} />
    </Container>
  );
}
