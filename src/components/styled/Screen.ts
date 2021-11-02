import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const Screen = styled(SafeAreaView)`
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
  flex: 1;
`;

export default Screen;
