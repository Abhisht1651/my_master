import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const scale = (size) => (Width / guidelineBaseWidth) * size
const verticalScale = (size) => (Height / guidelineBaseHeight) * size

export default StyleSheet.create({
  screen: {
    height: Height,
    width: Width,
    flexDirection: 'column-reverse'
  },
  innerScreen: {
    height: verticalScale(388),
    backgroundColor: '#ffffff'
  },
  innerScreen2: {
    height: verticalScale(424),
    backgroundColor: '#2222234D'
  },
  view1: {
    flexDirection: 'row',
    height: verticalScale(62),
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#E6ECED',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  view2: {
    height: verticalScale(326),
    alignItems: 'center'
  },
  headerText: {
    width: '70%',
    textAlign: 'right',
    marginLeft: 'auto',
    fontSize: 18,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: -0.12
    // borderColor: 'blue',
    // borderWidth: 2
  },
  closeIcon: {
    height: 17.28,
    aspectRatio: 1
  },
  closeIconContainer: {
    marginLeft: 95.75,
    marginRight: 25.97
  },
  space: {
    margin: 6
  },
  space2: {
    margin: 12
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(111)
  },
  square: {
    height: verticalScale(111),
    width: scale(111),
    borderRadius: scale(11),
    backgroundColor: '#F3F3F3'
  },
  gap: {
    height: '100%',
    width: scale(10),
    backgroundColor: '#ffffff'
  },
  topgap: {
    height: verticalScale(28),
    width: '100%',
    backgroundColor: '#ffffff'
  },
  verticalgap: {
    height: verticalScale(10),
    width: '100%',
    backgroundColor: '#ffffff'
  }
})
