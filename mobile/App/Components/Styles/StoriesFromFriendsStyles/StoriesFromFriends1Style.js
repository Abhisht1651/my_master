import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 812

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)
export const scaledSize = (size) => Math.ceil(size * scale)

export default StyleSheet.create({
  container: {
    aspectRatio: 0.58,
    height: 127 * scaleHeight,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    aspectRatio: 0.77,
    height: 95 * scaleHeight,
    borderRadius: 18 * scaleHeight
  },
  addIcon: {
    position: 'absolute',
    backgroundColor: '#47C3F4',
    aspectRatio: 1,
    height: 36 * scaleHeight,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    top: 70 * scaleHeight
  },
  verticalPart: {
    position: 'absolute',
    width: 2 * scaleHeight,
    height: 13 * scaleHeight,
    backgroundColor: '#FFFFFF',
    borderRadius: 1
  },
  horizontalPart: {
    position: 'absolute',
    width: 13 * scaleHeight,
    height: 2 * scaleHeight,
    backgroundColor: '#FFFFFF',
    borderRadius: 1
  },
  TriangleShapeCSS: {
    position: 'absolute',
    bottom: 22.5 * scaleHeight,
    left: 45 * scaleHeight,
    width: 0,
    height: 0,
    borderLeftWidth: 4 * scaleHeight,
    borderRightWidth: 4 * scaleHeight,
    borderBottomWidth: 7 * scaleHeight,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#47C3F4',
    borderRadius: 2,
    transform: [{ rotate: '19deg' }]
  },
  text: {
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: scaledSize(14),
    color: '#8F8FAF',
    letterSpacing: -0.08
  }
})
