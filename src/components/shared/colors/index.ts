import { blues } from './blues'
import { grays } from './grays'
import { greens } from './greens'
import { reds } from './reds'
import { yellows } from './yellows'

const black = '#000000'
const white = '#FFFFFF'
const blue = blues.blue500
const green = greens.green500
const red = reds.red500
const yellow = yellows.yellow500

export const colors = {
  ...blues,
  ...grays,
  ...greens,
  ...reds,
  ...yellows,
  black,
  blue,
  green,
  red,
  white,
  yellow,
  error: reds.red400,
  primary: blues.blue500,
  secondary: grays.gray200,
  warning: yellows.yellow300,
  text: grays.gray900,
}
