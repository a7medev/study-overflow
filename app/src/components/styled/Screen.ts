import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const Screen = styled(SafeAreaView)(props => ({
  backgroundColor: props.theme.colors.background,
  padding: 20,
  flex: 1,
}));

export default Screen;
