import React from 'react';
import styled from 'styled-components/native';
import BB8 from './BB-8';

const Container = styled.View`
  flex: 1;
  background-color: #444857;
  align-items: center;
  justify-content: center;
`;
export default function BB8Screen() {
  return (
    <Container>
      <BB8 />
    </Container>
  );
}
