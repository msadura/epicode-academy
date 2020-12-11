import React, {useState} from 'react';
import styled from 'styled-components/native';
import Snowflake from './Snowflake';

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export default function Snow({fallingSnowflakesCount = 150}) {
  const [dimensions, setDimensions] = useState({width: 0, height: 0});

  const onLayout = ({
    nativeEvent: {
      layout: {width, height},
    },
  }) => setDimensions({width, height});

  const showContent = dimensions.width && dimensions.height;

  return (
    <Container onLayout={onLayout}>
      {showContent
        ? new Array(fallingSnowflakesCount)
            .fill(true)
            .map((_, i) => <Snowflake key={i} scene={dimensions} />)
        : null}
    </Container>
  );
}
