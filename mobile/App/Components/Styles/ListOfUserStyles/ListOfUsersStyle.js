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
    width: '100%',
    height: 60 * scaleWidth,
    borderBottomWidth: 1 * scaleWidth,
    borderColor: '#E6ECED',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container2: {
    width: '100%',
    height: 70 * scaleWidth,
    borderBottomWidth: 1 * scaleWidth,
    borderColor: '#E6ECED',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    height: 44 * scaleWidth,
    width: 44 * scaleWidth,
    // borderWidth: 1,
    borderColor: '#DCDCE9',
    borderRadius: 22 * scaleWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13 * scaleWidth
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 22 * scaleWidth
  },
  textBlock: {
    marginRight: 13 * scaleWidth,
    alignItems: 'flex-start'
  },
  nameText: {
    color: '#1F1F60',
    fontSize: 18 * scaleWidth,
    letterSpacing: -0.12,
    fontFamily: 'BananaGrotesk-Medium'
  },
  optionalText: {
    color: '#8F8FAF',
    fontSize: 12 * scaleWidth,
    letterSpacing: -0.07,
    fontFamily: 'BananaGrotesk-Regular'
  },
  btnContainer1: {
    width: 75 * scaleWidth,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnContainer2: {
    width: 88 * scaleWidth,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  button: {
    height: 30 * scaleWidth,
    width: '100%',
    borderColor: '#7B46E4',
    borderWidth: 1 * scaleWidth,
    borderRadius: 16 * scaleWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#7B46E4',
    fontSize: 14 * scaleWidth,
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: -0.08
  }
})
