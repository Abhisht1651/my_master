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
    width: 375 * scaleWidth,
    height: 130 * scaleHeight,
    borderBottomWidth: 1,
    borderColor: '#E6ECED',
    // alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20 * scaleHeight,
    backgroundColor: '#F7F7F7'
  },
  containerwhite: {
    width: 375 * scaleWidth,
    height: 130 * scaleHeight,
    borderBottomWidth: 1,
    borderColor: '#E6ECED',
    // alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20 * scaleHeight,
    backgroundColor: '#FFFFFF'
  },
  dot: {
    height: 8 * scaleWidth,
    width: 8 * scaleWidth,
    borderRadius: 4 * scaleWidth,
    marginTop: 15 * scaleHeight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8 * scaleWidth,
    backgroundColor: '#7B46E4',
    marginLeft: 12 * scaleWidth
  },
  dotwhite: {
    height: 8 * scaleWidth,
    width: 8 * scaleWidth,
    borderRadius: 4 * scaleWidth,
    marginTop: 15 * scaleHeight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8 * scaleWidth,
    marginLeft: 12 * scaleWidth
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
    height: '65%',
    resizeMode: 'contain'
  },
  textBlock: {
    width: '50%',
    // marginRight: 13 * scaleWidth,
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
    fontSize: scaledSize(14),
    letterSpacing: -0.08,
    fontFamily: 'BananaGrotesk-Regular'
  },
  btnContainer: {
    marginTop: 15 * scaleHeight,
    flexDirection: 'row',
    marginBottom: 16 * scaleHeight
  },
  daysTextContainer: {
    marginTop: '1%',
    width: '23%',
    alignItems: 'flex-end',
    marginRight: 26 * scaleWidth
    // justifyContent: 'center'
  },
  button: {
    marginRight: 10 * scaleWidth
  },
  buttonStyle: {
    width: 75 * scaleWidth,
    textAlign: 'center'
  },
  daysText: {
    color: '#8F8FAF',
    fontSize: scaledSize(12),
    letterSpacing: -0.07,
    fontFamily: 'BananaGrotesk-Regular'
  }
})
