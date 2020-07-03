import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 812

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight

const scale = (size) => (width / baseWidth) * size
const moderateScale = (size, factor = 0.3) => size + (scale(size) - size) * factor

export default StyleSheet.create({
  card: {
    height: 280 * scaleHeight,
    width: 325 * scaleWidth,
    maxWidth: '90.27%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(15)
  },
  closeIcon: {
    height: 19 * scaleHeight,
    aspectRatio: 1
  },
  closeIconContainer: {
    height: 19 * scaleHeight,
    width: '84%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  addressContainer: {
    height: '21%',
    width: '80%',
    marginVertical: 5 * scaleHeight,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 31
  },
  currentLocationText: {
    fontSize: moderateScale(18),
    color: '#1F1F60',
    letterSpacing: -0.12,
    fontFamily: 'BananaGrotesk-Medium',
    marginBottom: 11 * scaleHeight
  },
  addresstext: {
    fontSize: moderateScale(16),
    color: '#1F1F60',
    letterSpacing: -0.11,
    fontFamily: 'BananaGrotesk-Light'
  },
  currentLocationIconContainer: {
    height: '12%',
    width: '10%',
    marginBottom: 35 * scaleHeight,
    marginTop: 17 * scaleHeight
  },
  continueButtonContainer: {
    height: '18%',
    width: '84%',
    marginVertical: 5 * scaleHeight,
    backgroundColor: '#7B46E4',
    borderRadius: moderateScale(39),
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
