import styled from 'styled-components/native';

const Card = styled.View`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadii.medium}px;
  padding: 15px;
`;

export default Card;
