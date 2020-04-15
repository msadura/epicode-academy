import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

const BODY = '#eeeeee';
const DARK = '#000000';
const LIGHT = '#ffffff';
const GRAY1 = '#7699B7';
const GRAY2 = '#999999';
const ORANGE = '#CD7640';
const ORANGE2 = '#B19669';

const Container = styled.View`
  align-items: center;
`;

const HeadContainer = styled.View`
  position: absolute;
  top: -37%;
`;

const Head = styled.View`
  width: 100px;
  height: 60px;
  background-color: ${BODY};
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
`;

const Stripe = styled.View`
  position: absolute;
  width: 100%;
`;

const Stripe1 = styled(Stripe)`
  height: 11%;
  top: 6%;
  background-color: ${GRAY1};
`;

const Stripe2 = styled(Stripe)`
  height: 7%;
  top: 26%;
  background-color: ${ORANGE};
`;

const Stripe3 = styled(Stripe)`
  height: 7%;
  bottom: 7%;
  background-color: ${GRAY2};
`;

const StripeDetails = styled(Stripe)`
  height: 13%;
  bottom: 13%;
  justify-content: space-between;
  flex-direction: row;
`;

const StripeDetailsLeft = styled.View`
  flex: 1;
  flex-direction: row;
`;

const StripeDetailsRight = styled(StripeDetailsLeft)`
  justify-content: flex-end;
`;

const StripeDetail = styled.View`
  height: 100%;
  background-color: ${ORANGE};
`;

const StripeDetail1 = styled(StripeDetail)`
  margin-left: 5%;
  width: 10%;
`;

const StripeDetail2 = styled(StripeDetail)`
  margin-left: 10%;
  width: 25%;
`;

const StripeDetail3 = styled(StripeDetail)`
  width: 15%;
  height: 70%;
  align-self: flex-end;
`;

const EyesContainer = styled.View`
  position: absolute;
  top: 20%;
  width: 100%;
`;

const Eyes = styled.View`
  left: 50%;
`;

const Eye = styled.View`
  position: absolute;
`;

const EyeBig = styled(Eye)`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: ${DARK};
  border-width: 3px;
  border-color: ${BODY};
`;

const EyeBigDetail = styled(Eye)`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: ${LIGHT};
  left: 50%;
  top: 15%;
`;

const EyeSmall = styled(Eye)`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${LIGHT};
  border-width: 1px;
  border-color: ${DARK};
  left: 24px;
  top: 16px;
  align-items: center;
  justify-content: center;
`;

const EyeSmallDetail = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 4px;
  background-color: ${DARK};
`;

const AntennasContainer = styled.View`
  position: absolute;
  left: 20%;
  bottom: 70%;
  align-items: flex-end;
  flex-direction: row;
`;

const Antenna1 = styled.View`
  height: 28px;
  width: 2px;
  background-color: ${GRAY2};
`;

const Antenna2 = styled.View`
  height: 45px;
  width: 3px;
  background-color: ${GRAY2};
  margin-left: 7px;
  border-top-width: 7px;
  border-top-color: ${DARK};
`;

const Body = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: ${BODY};
  overflow: hidden;
`;

const JoinLine1 = styled.View`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  border-width: 2px;
  border-color: ${ORANGE2};
`;

const JoinLine2 = styled(JoinLine1)`
  left: -160%;
`;

const Ring = styled.View`
  position: absolute;
  background-color: ${ORANGE};
`;

const Ring1 = styled(Ring)`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  left: 20%;
  transform: scaleY(0.8);
`;

const RingFill1 = styled.View`
  background-color: ${BODY};
  width: 66px;
  height: 66px;
  border-radius: 33px;
  top: 10%;
  left: 13%;
`;

const SideRing = styled(Ring)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

const Ring2 = styled(SideRing)`
  top: 55%;
  left: -10%;
  transform: scaleY(0.5) rotate(50deg);
`;

const Ring3 = styled(SideRing)`
  top: 50%;
  left: 65%;
  transform: scaleY(0.5) rotate(-60deg);
`;

const SideRingFill = styled.View`
  background-color: ${BODY};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  top: 30%;
  left: 14%;
`;

export default function BB8() {
  return (
    <Container>
      <Body>
        <JoinLine1 />
        <JoinLine2 />

        <Ring1>
          <RingFill1 />
        </Ring1>

        <Ring2>
          <SideRingFill />
        </Ring2>
        <Ring3>
          <SideRingFill />
        </Ring3>
      </Body>
      <HeadContainer>
        <AntennasContainer>
          <Antenna1 />
          <Antenna2 />
        </AntennasContainer>
        <Head>
          <Stripe1 />
          <Stripe2 />
          <Stripe3 />

          <StripeDetails>
            <StripeDetailsLeft>
              <StripeDetail1 />
              <StripeDetail1 />
              <StripeDetail2 />
              <StripeDetail2 />
            </StripeDetailsLeft>
            <StripeDetailsRight>
              <StripeDetail3 />
            </StripeDetailsRight>
          </StripeDetails>

          <EyesContainer>
            <Eyes>
              <EyeBig>
                <EyeBigDetail />
              </EyeBig>
              <EyeSmall>
                <EyeSmallDetail />
              </EyeSmall>
            </Eyes>
          </EyesContainer>
        </Head>
      </HeadContainer>
    </Container>
  );
}
