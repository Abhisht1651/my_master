import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const guidelineBaseHeight = 812

const verticalScale = (size) => (height / guidelineBaseHeight) * size

export default StyleSheet.create({
  container1: {
    height: verticalScale(95),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#1F1F6016'
  },
  container2: {
    height: verticalScale(95),
    aspectRatio: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  imageStyle: {
    borderRadius: 100,
    height: verticalScale(95),
    aspectRatio: 1,
    backgroundColor: '#DCDCE9',
    top: verticalScale(24)
  },
  imageStyle2: {
    borderRadius: 100,
    height: verticalScale(95),
    aspectRatio: 1
  },
  addStoryIcon2: {
    height: verticalScale(25),
    aspectRatio: 1.2
  },
  addStory2: {
    height: verticalScale(48),
    aspectRatio: 1,
    left: verticalScale(35),
    bottom: verticalScale(20),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E6ECED',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container3: {
    margin: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  image3: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2
  },
  linearGradient: {
    borderRadius: 100,
    height: verticalScale(102),
    aspectRatio: 1
  },
  imageStyle4: {
    borderRadius: 100,
    height: verticalScale(95),
    aspectRatio: 1
  },
  online: {
    position: 'absolute',
    height: verticalScale(15),
    aspectRatio: 1,
    left: verticalScale(70),
    bottom: 0,
    backgroundColor: '#47C3F4',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container5: {
    margin: 2,
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'red'
  },
  imageStyle5: {
    borderRadius: 100,
    height: '100%',
    aspectRatio: 1,
    borderColor: 'white',
    borderWidth: 2
  }
})
