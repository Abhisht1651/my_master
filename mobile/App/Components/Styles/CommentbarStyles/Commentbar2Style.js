import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../Themes/Colors'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 812

const scaleWidth = width / baseWidth
export const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)
export const scaledSize = (size) => Math.ceil(size * scale)

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 375 * scaleWidth,
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: Colors.commentBarBorder,
    backgroundColor: Colors.whiteBackgroundColor
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 39.86 * scaleHeight,
    width: 284 * scaleWidth,
    backgroundColor: Colors.commentBarBackground,
    borderRadius: 19,
    paddingLeft: 15.73
  },
  comment: {
    padding: 0,
    margin: 0,
    width: '78%',
    height: '70%',
    fontSize: scaledSize(16),
    color: '#1B2062',
    letterSpacing: -0.09,
    textAlign: 'left',
    textAlignVertical: 'center',
    fontFamily: 'BananaGrotesk-Light'
  },
  post: {
    flex: 1,
    alignItems: 'center'
  },
  blurredText: {
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: -0.09,
    opacity: 0.4
  },
  visibleText: {
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: -0.11
  },
  attachIcon: {
    marginLeft: 25.75 * scaleWidth,
    marginRight: 17.25 * scaleWidth
  }
})
