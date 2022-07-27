import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Column, Text } from "@github-shared"

export const SearchScreen = styled(Column)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 10;
`

export const OptionText = styled(Text)``

export const Button = styled(TouchableOpacity)`
  align-items: center;
  margin-top: 10;
  margin-left: 5;
  align-items: flex-start;
  flex: 1;
`
