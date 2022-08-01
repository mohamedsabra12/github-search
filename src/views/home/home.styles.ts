import styled from "styled-components/native"
import { Row, Text } from "@github-shared"
import { R } from "@github/res"

export const Container = styled(Row)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`

export const Header = styled(Text)`
  padding: ${R.spacing.smaller}px;
`
