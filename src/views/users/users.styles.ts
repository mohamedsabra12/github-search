import { View } from "react-native"
import styled from "styled-components/native"
import { Image, Text } from "@github-shared"
import { R } from "@github/res"

export const Card = styled(View)`
  flex-direction: row;
  padding-top: ${R.spacing.small}px;
  padding-left: ${R.spacing.smaller}px;
`

export const UserImage = styled(Image)`
  height: ${R.spacing.massive}px;
  width: ${R.spacing.massive}px;
  border-radius: ${R.spacing.medium}px;
  position: relative;
  opacity: 0.65;
`

export const UserName = styled(Text)`
  margin-top: ${R.spacing.smaller}px;
  font-size: ${R.spacing.small}px;
  color: ${R.color.text};
  font-weight: bold;
`
