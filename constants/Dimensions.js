import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height



export default WINDOWS_DIMENSTION = {
    WIDTH: windowWidth,
    HEIGHT: windowHeight
}


export const relativeWidth = (width) => {
    return Math.round(WINDOWS_DIMENSTION.WIDTH / width)
}
export const relativeHeight = (height) => {
    return Math.round(WINDOWS_DIMENSTION.HEIGHT / height)
}