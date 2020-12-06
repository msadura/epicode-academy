import React, {useState} from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

export default function Snow({snowlakesCount = 50}) {
  const [dimensions, setDimensions] = useState({width: 0, height: 0});

  const onLayout = ({
    nativeEvent: {
      layout: {width, height},
    },
  }) => setDimensions({width, height});

  return <Container onLayout={onLayout} />;
}

function getSnowflakeConfig({width, height}) {}
