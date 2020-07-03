import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 812

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
// const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)
const scale = (size) => (width / baseWidth) * size
const moderateScale = (size, factor = 0.3) => size + (scale(size) - size) * factor

export default StyleSheet.create({
  card: {
    height: 296 * scaleHeight,
    width: 325 * scaleWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15
  },
  closeIcon: {
    height: 19 * scaleHeight,
    aspectRatio: 1,
    tintColor: '#1E1E60'
  },
  closeIconContainer: {
    height: 19 * scaleHeight,
    width: '84%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  textContainer: {
    height: '51%',
    width: '80%',
    marginVertical: 5 * scaleHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteAccountText: {
    fontSize: moderateScale(20),
    color: '#1E1E60',
    letterSpacing: -0.14,
    fontFamily: 'BananaGrotesk-Bold',
    marginBottom: 11 * scaleHeight
  },
  infoText: {
    fontSize: moderateScale(16),
    color: '#1F1F60',
    letterSpacing: -0.11,
    fontFamily: 'BananaGrotesk-Light',
    lineHeight: 25 * scaleHeight,
    textAlign: 'center'
  },
  continueButtonContainer: {
    height: '18%',
    width: '84%',
    marginVertical: 5 * scaleHeight,
    backgroundColor: '#7B46E4',
    borderRadius: 39,
    alignItems: 'center',
    justifyContent: 'center'
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    letterSpacing: -0.09,
    fontFamily: 'BananaGrotesk-Bold'
  }
})
