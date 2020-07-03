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
    width: 325 * scaleWidth,
    height: 80 * scaleHeight,
    borderBottomWidth: 1,
    borderColor: '#E6ECED',
    alignItems: 'center',
    flexDirection: 'row'
  },
  imageContainer: {
    height: 44 * scaleHeight + 1,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#DCDCE9',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13 * scaleWidth
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 50
  },
  textBlock: {
    width: '55.13%',
    marginRight: 13 * scaleWidth,
    alignItems: 'flex-start'
  },
  nameText: {
    color: '#1F1F60',
    fontSize: scaledSize(18),
    letterSpacing: -0.12,
    fontFamily: 'BananaGrotesk-Medium'
  },
  optionalText: {
    color: '#8F8FAF',
    fontSize: scaledSize(12),
    letterSpacing: -0.07,
    fontFamily: 'BananaGrotesk-Regular'
  },
  btnContainer: {
    width: '23%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  button: {
    height: 30 * scaleHeight,
    width: '85%',
    borderColor: '#7B46E4',
    borderWidth: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#7B46E4',
    fontSize: scaledSize(14) - 1,
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: -0.08
  },
  checkBox: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#8F8FAF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedBox: {
    width: 14,
    height: 14,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
