import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

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
    height: verticalScale(270),
    width: scale(325),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 15
  },
  view1: {
    flexDirection: 'row',
    height: verticalScale(53),
    width: '100%',
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1,
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
    height: verticalScale(1),
    width: '100%',
    backgroundColor: '#ffffff'
  },
  closeIcon: {
    height: 17.28,
    aspectRatio: 1
  },
  closeIconContainer: {
    right: scale(20),
    top: verticalScale(20),
    position: 'absolute'
  },
  view3: {
    marginTop: verticalScale(5),
    height: verticalScale(130),
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10)
  },
  circle: {
    height: verticalScale(25),
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#8F8FAF',
    borderRadius: 100
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  listText: {
    marginLeft: scale(10),
    fontFamily: 'BananaGrotesk-Light',
    fontSize: moderateScale(14),
    color: '#8F8FAF'
  },
  checkedCircle: {
    height: '100%',
    borderRadius: 100,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatList: {
    flex: 1,
    justifyContent: 'space-around'
  }
})
