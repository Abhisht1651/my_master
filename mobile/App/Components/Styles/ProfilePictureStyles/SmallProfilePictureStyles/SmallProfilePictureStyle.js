import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
const guidelineBaseHeight = 812
const verticalScale = (size) => (height / guidelineBaseHeight) * size
export default StyleSheet.create({
  container1: {
    width: verticalScale(27.77),
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: 100
  },
  container2: {
    width: verticalScale(19.13),
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
