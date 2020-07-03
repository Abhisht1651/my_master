import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../Themes/Colors'

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
    height: 76 * scaleHeight,
    width: 375 * scaleWidth,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: Colors.commentBarBorder,
    backgroundColor: Colors.whiteBackgroundColor
  },
  textInput: {
    height: 39.86 * scaleHeight,
    width: 220 * scaleWidth,
    backgroundColor: Colors.commentBarBackground,
    borderRadius: 19,
    paddingLeft: 15.73
  },
  comment: {
    padding: 0,
    margin: 0,
    height: '100%',
    width: '90%',
    color: '#1B2062',
    letterSpacing: -0.09,
    opacity: 0.3,
    textAlign: 'left',
    fontFamily: 'BananaGrotesk-Light',
    fontSize: scaledSize(16)
  },
  stickerIcon: {
    marginLeft: 8 * scaleWidth
  },
  cameraIcon: {
    marginRight: 25 * scaleWidth,
    marginLeft: 5 * scaleWidth
  },
  attachIcon: {
    marginLeft: 25 * scaleWidth,
    marginRight: 6 * scaleWidth
  }
})
