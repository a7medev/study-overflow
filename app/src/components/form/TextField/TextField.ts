import styled from 'styled-components/native';

export interface TextFieldProps {
  error?: boolean;
}

const TextField = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.secondaryLight,
}))<TextFieldProps>`
  padding: 10px 20px;
  background-color: ${props =>
    props.theme.colors[props.error ? 'errorLight' : 'white']};
  color: ${props => props.theme.colors.black};
  border: 2px solid
    ${props => props.theme.colors[props.error ? 'error' : 'secondaryLight']};
  border-radius: ${props => props.theme.borderRadii.medium}px;
  text-align: right;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 18px;
  width: 100%;
`;

export default TextField;
