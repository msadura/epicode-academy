import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Snowflake from './Snowflake';

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const dimensions = Dimensions.get('window');

export default function Snow({fallingSnowflakesCount = 150}) {
  return (
    <Container>
      {new Array(fallingSnowflakesCount).fill(true).map((_, i) => (
        <Snowflake key={i} scene={dimensions} />
      ))}
    </Container>
  );
}
