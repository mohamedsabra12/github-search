import React from "react"
import { TouchableOpacity } from "react-native"
import { Image, Row, Text } from "@github-shared"
import image from "@github/assets/images"
import { R } from "@github/res"
import { IUsersProp } from "./users.prop"

export const UserBar = ({ navigation, route }: IUsersProp): JSX.Element => {
  return (
    <Row>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={image.back} />
      </TouchableOpacity>
      <Text preset="primaryLarger">
        {route.params.type == R.string.shared.organizationType
          ? R.string.shared.organizatios
          : R.string.shared.users}
      </Text>
    </Row>
  )
}
