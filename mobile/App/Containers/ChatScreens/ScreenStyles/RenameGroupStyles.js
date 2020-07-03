import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

export const scaleHeight = Height / guidelineBaseWidth

export const scaledSize = (size) => Math.ceil(size * scale) + 1
const scale = (size) => (Width / guidelineBaseWidth) * size
const verticalScale = (size) => (Height / guidelineBaseHeight) * size
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor

export default StyleSheet.create({
  screen: {
    height: Height,
    width: Width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2222234D'
  },
  innerScreen: {
    height: verticalScale(321),
    width: scale(325),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 15
  },
  view1: {
    flexDirection: 'row',
    height: verticalScale(53),
    width: '100%',
    borderColor: '#E6ECED',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: moderateScale(20),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: -0.14
  },
  headerText2: {
    fontSize: moderateScale(16),
    color: '#262676',
    fontFamily: 'BananaGrotesk-Light',
    letterSpacing: -0.11
  },
  verticalgap: {
    height: verticalScale(16),
    width: '100%',
    backgroundColor: '#ffffff'
  },
  closeIcon: {
    height: 17.28,
    aspectRatio: 1
  },
  closeIconContainer: {
    marginLeft: 'auto',
    marginRight: scale(20.97)
  },
  view3: {
    marginBottom: verticalScale(40),
    marginTop: 'auto'
  },
  innerContainer: {
    width: scale(273),
    marginTop: verticalScale(47),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  }
})
