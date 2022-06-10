import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 25px;
  `;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 30%;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 85px;
`;


export const ContentButtton = styled.View`  
  padding: 10px; 
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ButtonGroup = styled.View`
  width: 45%;
`;

export const ForgotPin = styled.Text`
  font-size: ${RFValue(18)}px;
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;  
`;