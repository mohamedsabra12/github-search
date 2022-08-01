import React from "react"
import { Container, Text } from "@github-shared"
import { SearchBar } from "@github/views/search/search-bar"
import { R } from "@github/res"
import { ISearchProp } from "./search.prop"
import { SearchScreen } from "./search.styles"

const Search = ({ navigation }: ISearchProp): JSX.Element => {
  return (
    <Container>
      <SearchBar navigation={navigation} />
      <SearchScreen>
        <Text>{R.string.shared.searchPage}</Text>
      </SearchScreen>
    </Container>
  )
}

export { Search }
