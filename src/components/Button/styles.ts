import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton) `
  width: 100%; 
  min-height: 56px;
  max-height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background-color: #531EB2;
  border-radius: 12px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: ${RFValue(16)}px;
  color: #fff;
`;

export const Load = styled.ActivityIndicator`
color: #fff;
`;