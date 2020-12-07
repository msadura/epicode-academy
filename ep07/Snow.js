import React, {useState} from 'react';
import styled from 'styled-components/native';
import Snowflake from './Snowflake';

const Container = styled.View`
  flex: 1;
`;

export default function Snow({fallingSnowflakesCount = 50}) {
  const [dimensions, setDimensions] = useState({width: 0, height: 0});

  const onLayout = ({
    nativeEvent: {
      layout: {width, height},
    },
  }) => setDimensions({width, height});

  if (!dimensions.width || !dimensions.height) {
    return null;
  }

  return (
    <Container onLayout={onLayout}>
      {new Array(fallingSnowflakesCount).fill(true).map((_, i) => (
        <Snowflake key={i} scene={dimensions} />
      ))}
    </Container>
  );
}
