import React from 'react';
import CircularProgress from './CircularProgress';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default function CircularProgressScreen() {
  return (
    <Container>
      <CircularProgress progress={10} size={200} />
    </Container>
  );
}
