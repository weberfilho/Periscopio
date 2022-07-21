import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: ${getStatusBarHeight() + 15}px;
  padding-bottom: 25%;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 150px;
  height: 85px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

