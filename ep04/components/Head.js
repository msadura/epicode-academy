import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import Circle from './Circle';

const HeadContainer = styled.View`
  position: absolute;
  top: -37%;
`;

const Head = styled.View`
  width: ${props => props.width}px;
  height: ${props => props.width * 0.6}px;
  background-color: ${props => props.theme.BODY};
  border-top-left-radius: ${props => props.width}px;
  border-top-right-radius: ${props => props.width}px;
  border-bottom-left-radius: ${props => props.width * 0.25}px;
  border-bottom-right-radius: ${props => props.width * 0.25}px;
  overflow: hidden;
`;

const Stripe = styled.View`
  position: absolute;
  width: 100%;
`;

const Stripe1 = styled(Stripe)`
  height: 11%;
  top: 6%;
  background-color: ${props => props.theme.GRAY1};
`;

const Stripe2 = styled(Stripe)`
  height: 7%;
  top: 26%;
  background-color: ${props => props.theme.ORANGE};
`;

const Stripe3 = styled(Stripe)`
  height: 7%;
  bottom: 7%;
  background-color: ${props => props.theme.GRAY2};
`;

const StripeAnimated = Stripe.withComponent(Animated.View);

const StripeDetails = styled(StripeAnimated)`
  width: 135%
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
  flex: 1.35;
  justify-content: flex-end;
`;

const StripeDetail = styled.View`
  height: 100%;
  background-color: ${props => props.theme.ORANGE};
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

const Eyes = styled(Animated.View)`
  left: 50%;
`;

const Eye = styled(Circle)`
  position: absolute;
`;

const EyeBig = styled(Eye)`
  background-color: ${props => props.theme.DARK};
  border-width: 3px;
  border-color: ${props => props.theme.BODY};
`;

const EyeBigDetail = styled(Eye)`
  background-color: ${props => props.theme.LIGHT};
  left: 50%;
  top: 15%;
`;

const EyeSmall = styled(Eye)`
  background-color: ${props => props.theme.LIGHT};
  border-width: 1px;
  border-color: ${props => props.theme.DARK};
  left: ${props => props.size * 1.6}px;
  top: ${props => props.size * 1.2}px;
  align-items: center;
  justify-content: center;
`;

const EyeSmallDetail = styled(Circle)`
  background-color: ${props => props.theme.DARK};
`;

const AntennasContainer = styled(Animated.View)`
  position: absolute;
  left: 20%;
  bottom: 70%;
  align-items: flex-end;
  flex-direction: row;
`;

const Antenna1 = styled.View`
  height: ${props => props.size * 0.19}px;
  width: 2px;
  background-color: ${props => props.theme.GRAY2};
`;

const Antenna2 = styled.View`
  height: ${props => props.size * 0.3}px;
  width: 3px;
  background-color: ${props => props.theme.GRAY2};
  margin-left: 7px;
  border-top-width: 7px;
  border-top-color: ${props => props.theme.DARK};
`;

export default function HeadComponent({bodyWidth, lookRight = true}) {
  const headWidth = bodyWidth * 0.66;
  const animatedValue = useRef(new Animated.Value(0)).current;

  const lookAnimation = isRight => {
    Animated.timing(animatedValue, {
      toValue: isRight ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    lookAnimation(lookRight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lookRight]);

  const negativePosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -headWidth * 0.35],
  });

  const positivePosition = Animated.multiply(negativePosition, -1);

  return (
    <HeadContainer>
      <AntennasContainer style={{transform: [{translateX: positivePosition}]}}>
        <Antenna1 size={bodyWidth} />
        <Antenna2 size={bodyWidth} />
      </AntennasContainer>
      <Head width={headWidth}>
        <Stripe1 />
        <Stripe2 />
        <Stripe3 />

        <StripeDetails style={{transform: [{translateX: negativePosition}]}}>
          <StripeDetailsLeft>
            <StripeDetail1 />
            <StripeDetail1 />
            <StripeDetail2 />
            <StripeDetail2 />
          </StripeDetailsLeft>
          <StripeDetailsRight>
            <StripeDetail3 />
            <StripeDetail2 />
            <StripeDetail1 />
          </StripeDetailsRight>
        </StripeDetails>

        <EyesContainer>
          <Eyes style={{transform: [{translateX: negativePosition}]}}>
            <EyeBig size={bodyWidth * 0.17}>
              <EyeBigDetail size={bodyWidth * 0.026} />
            </EyeBig>
            <EyeSmall size={bodyWidth * 0.093}>
              <EyeSmallDetail size={bodyWidth * 0.06} />
            </EyeSmall>
          </Eyes>
        </EyesContainer>
      </Head>
    </HeadContainer>
  );
}
