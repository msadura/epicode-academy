import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import BB8Animated from './BB-8Animated';
import theme from './theme';

const Container = styled.View`
  flex: 1;
  background-color: #444857;
  align-items: center;
  justify-content: center;
`;
export default function BB8ScreenAnimated() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BB8Animated bodyWidth={100} />
      </Container>
    </ThemeProvider>
  );
}
