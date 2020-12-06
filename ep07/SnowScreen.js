import React from 'react';
import styled from 'styled-components/native';
import Snow from './Snow';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default function SnowScreen() {
  return (
    <Container>
      <Snow />
    </Container>
  );
}
