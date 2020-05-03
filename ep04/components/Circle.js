import styled from 'styled-components/native';

export default styled.View`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
`;
