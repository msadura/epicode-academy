import React from 'react';
import styled from 'styled-components/native';
import Circle from './Circle';

const Body = styled(Circle)`
  background-color: ${props => props.theme.BODY};
  overflow: hidden;
`;

const JoinLine1 = styled(Circle)`
  position: absolute;
  border-width: 2px;
  border-color: ${props => props.theme.ORANGE2};
`;

const JoinLine2 = styled(JoinLine1)`
  left: -160%;
`;

const Ring = styled(Circle)`
  position: absolute;
  background-color: ${props => props.theme.ORANGE};
`;

const Ring1 = styled(Ring)`
  left: 20%;
  transform: scaleY(0.8);
`;

const RingFill1 = styled(Circle)`
  background-color: ${props => props.theme.BODY};
  top: 10%;
  left: 13%;
`;

const Ring2 = styled(Ring)`
  top: 55%;
  left: -10%;
  transform: scaleY(0.5) rotate(50deg);
`;

const Ring3 = styled(Ring)`
  top: 50%;
  left: 65%;
  transform: scaleY(0.5) rotate(-60deg);
`;

const SideRingFill = styled(Circle)`
  background-color: ${props => props.theme.BODY};
  top: 30%;
  left: 14%;
`;

export default function BodyComponent({bodyWidth}) {
  const joinLineWidth = bodyWidth * 2.66;

  return (
    <Body size={bodyWidth}>
      <JoinLine1 size={joinLineWidth} />
      <JoinLine2 size={joinLineWidth} />

      <Ring1 size={bodyWidth * 0.6}>
        <RingFill1 size={bodyWidth * 0.44} />
      </Ring1>

      <Ring2 size={bodyWidth * 0.46}>
        <SideRingFill size={bodyWidth * 0.33} />
      </Ring2>
      <Ring3 size={bodyWidth * 0.46}>
        <SideRingFill size={bodyWidth * 0.33} />
      </Ring3>
    </Body>
  );
}
