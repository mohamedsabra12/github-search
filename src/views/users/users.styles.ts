import { View } from "react-native"
import styled from "styled-components/native"
import { Image, Text } from "@github-shared"
import { R } from "@github/res"

export const Card = styled(View)`
  flex-direction: row;
  padding-top: 15;
  padding-left: 5;
`

export const UserImage = styled(Image)`
  margin-left: 0px;
  height: 40px;
  width: 40px;
  border-radius: 30px;
  position: relative;
  opacity: 0.65;
`

export const UserName = styled(Text)`
  margin-top: 10px;
  font-size: 15px;
  color: ${R.color.text};
  font-weight: bold;
`
