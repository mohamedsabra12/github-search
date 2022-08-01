import { ImageRequireSource } from "react-native"

const image = Object.freeze({
  back: require("./back.png"),
  backAndroid: require("./backAndroid.png"),
  cancel: require("./cancel.png"),
  home: require("./home.png"),
  organization: require("./organization.png"),
  people: require("./people.png"),
  search: require("./search.png"),
})

export default image as Record<keyof typeof image, ImageRequireSource>
