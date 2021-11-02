import styled from 'styled-components/native';

const TextField = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.secondaryLight,
}))`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  border: 2px solid ${props => props.theme.colors.secondaryLight};
  border-radius: 7px;
  text-align: right;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 18px;
  width: 100%;
`;

export default TextField;
