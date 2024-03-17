import { WINDOWS_DIMENSTION } from './Dimensions'


const scaleFactor = WINDOWS_DIMENSTION.WIDTH / 380

export const relativeFontSize = (size) => {
    return Math.round(scaleFactor * size)
}

export const lineHeight = (val) => {
    return scaleFactor * val
}