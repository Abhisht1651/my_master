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
    height: verticalScale(463),
    width: scale(325),
    backgroundColor: '#ffffff',
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
    width: '100%',
    height: verticalScale(60),
    alignItems: 'center'
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
    height: verticalScale(6),
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
    marginTop: verticalScale(35),
    height: verticalScale(200),
    paddingHorizontal: scale(25)
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
  },
  view4: {
    width: scale(325),
    height: 'auto',
    alignItems: 'center',
    marginBottom: verticalScale(30),
    marginTop: 'auto'
  }
})
