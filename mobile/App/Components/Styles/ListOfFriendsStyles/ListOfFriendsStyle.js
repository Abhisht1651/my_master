import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 768

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)

export default StyleSheet.create({
  container: {
    width: 105 * scaleHeight,
    height: 161 * scaleHeight,

    borderRadius: 7 * scaleHeight,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  photo: {
    height: 60 * scaleHeight,
    aspectRatio: 1,
    marginBottom: 8 * scaleHeight,
    marginTop: 10 * scaleHeight
  },
  name: {
    width: '62.28%',
    height: 31 * scaleHeight,
    marginBottom: 9 * scaleHeight
    // borderWidth: 1
  },
  button: {
    maxWidth: '95%',
    minWidth: '71%',
    paddingLeft: 5 * scaleHeight,
    paddingRight: 5 * scaleHeight,
    height: 30 * scaleHeight,
    borderWidth: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13 * scaleHeight
  },
  image: {
    borderRadius: 60,
    height: 60 * scaleHeight,
    aspectRatio: 1
  },
  nameText: {
    color: '#1F1F60',
    fontSize: scaledSize(14),
    fontFamily: 'BananaGrotesk-Light',
    textAlign: 'center'
  },
  buttonText: {
    color: '#7B46E4',
    fontSize: scaledSize(14),
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: -0.08
  }
})
