import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Column } from "@github-shared"
import { R } from "@github/res"

export const SearchScreen = styled(Column)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 10px;
`

export const Button = styled(TouchableOpacity)`
  align-items: center;
  margin-top: ${R.spacing.small}px;
  margin-left: ${R.spacing.smaller}px;
  align-items: flex-start;
  flex: 1;
`
