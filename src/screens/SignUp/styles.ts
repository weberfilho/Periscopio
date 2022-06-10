import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContentScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { 

  }
})`
  padding-top: 25px;
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 25px;  
  margin-top: ${getStatusBarHeight() + 20}px;  

`;

export const Form = styled.View`   
`;

export const Logo = styled.Image`
  width: 150px;
  height: 85px;
  left: 30%;
`;

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
