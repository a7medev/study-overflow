import styled from 'styled-components/native';

const Card = styled.Pressable(props => ({
  backgroundColor: props.theme.colors.white,
  borderRadius: props.theme.borderRadii.medium,
  padding: 15,
}));

export default Card;
