import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Row, Image } from "@github-shared"
import { AppRoute } from "@github/navigation/routes"
import image from "@github/assets/images"
import { R } from "@github/res"
import { IHomeProp } from "./home.prop"
import { Container, Header } from "./home.styles"

export const HomeBar = ({ navigation }: IHomeProp): JSX.Element => {
  return (
    <Row>
      <Header preset="primaryLarger">{R.string.shared.home}</Header>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate(AppRoute.Search, {})}>
          <Image source={image.search} />
        </TouchableOpacity>
      </Container>
    </Row>
  )
}
