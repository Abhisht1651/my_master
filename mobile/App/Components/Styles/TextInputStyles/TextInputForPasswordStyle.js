import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 812

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)

export default StyleSheet.create({
  textInput: {
    width: '100%',
    height: scaleHeight * 30,
    borderBottomWidth: 1,
    fontSize: scaledSize(18),
    paddingVertical: 0,
    paddingLeft: 0,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: -0.12,
    textAlign: 'left'
  }
})
