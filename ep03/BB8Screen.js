import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import BB8 from './BB-8';
import theme from './theme';

const Container = styled.View`
  flex: 1;
  background-color: #444857;
  align-items: center;
  justify-content: center;
`;
export default function BB8Screen() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BB8 />
      </Container>
    </ThemeProvider>
  );
}
