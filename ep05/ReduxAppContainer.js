import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-native';
import styled from 'styled-components/native';
import {
  increaseCounter,
  decreaseCounter,
  changeBackgroundColor,
} from './actions';
import {Text} from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor};
  align-items: center;
  justify-content: center;
`;

const ButtonsRow = styled.View`
  flex-direction: row;
  margin-vertical: 8px;
`;

function ReduxAppContainer({
  counter,
  backgroundColor,
  increaseCounter,
  decreaseCounter,
  changeBackgroundColor,
}) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Text>Counter: {counter}</Text>
      <ButtonsRow>
        <Button onPress={increaseCounter} title="Increase" color="#048010" />
        <Button onPress={decreaseCounter} title="Decrease" color="#f5a623" />
      </ButtonsRow>
      <Text>Background color: {backgroundColor}</Text>
      <Text>Change background:</Text>
      <Button title="gray" onPress={() => changeBackgroundColor('gray')} />
      <Button
        title="dark blue"
        onPress={() => changeBackgroundColor('darkblue')}
      />
      <Button title="pink" onPress={() => changeBackgroundColor('pink')} />
      <Button title="red" onPress={() => changeBackgroundColor('red')} />
    </Container>
  );
}
const mapStateToProps = state => {
  return {
    counter: state.counter,
    backgroundColor: state.backgroundColor,
  };
};

const mapDispatchToProps = {
  increaseCounter,
  decreaseCounter,
  changeBackgroundColor,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxAppContainer);
