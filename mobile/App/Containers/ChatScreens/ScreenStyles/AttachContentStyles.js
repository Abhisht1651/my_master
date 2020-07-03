import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const guidelineBaseHeight = 812

const verticalScale = (size) => (Height / guidelineBaseHeight) * size

export default StyleSheet.create({
  screen: {
    height: Height,
    width: Width,
    backgroundColor: '#2222234D',
    flexDirection: 'column-reverse'
  },
  innerScreen: {
    height: verticalScale(325),
    backgroundColor: '#ffffff'
  },
  innerScreen2: {
    height: verticalScale(812 - 325),
    backgroundColor: '#2222234D'
  },
  view1: {
    flexDirection: 'row',
    height: verticalScale(64),
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#E6ECED',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  view2: {
    alignItems: 'center'
  },
  headerText: {
    width: '50%',
    textAlign: 'right',
    marginLeft: 'auto',
    fontSize: 18,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: -0.12
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
    margin: verticalScale(6)
  },
  space2: {
    margin: verticalScale(12)
  }
})
