import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export const Form = styled.View`   
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: ${getStatusBarHeight() + 15}px;
  padding-bottom: 10%;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 85px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  padding-bottom: 40px;
`;

export const ContentScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const InputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputGroup = styled.View`
  width:45%;   
`;

export const ContainerButton = styled.View`
  width: 80%;
  margin-top: 20px;
`;
