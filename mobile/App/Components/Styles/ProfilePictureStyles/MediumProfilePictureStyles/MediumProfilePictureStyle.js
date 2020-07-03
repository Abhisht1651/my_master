import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const baseWidth = 375

const scaleWidth = width / baseWidth

export default StyleSheet.create({
  container1: {
    height: 44 * scaleWidth,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image1: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: 100
  },
  container2: {
    margin: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  image2: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white'
  },
  linearGradient: {
    borderRadius: 100,
    height: 48 * scaleWidth,
    aspectRatio: 1
  },
  imageStyle3: {
    borderRadius: 100,
    height: 44 * scaleWidth,
    aspectRatio: 1
  },
  online: {
    position: 'absolute',
    height: 10,
    aspectRatio: 1,
    left: 32 * scaleWidth,
    bottom: 0,
    backgroundColor: '#47C3F4',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container4: {
    margin: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  imageStyle4: {
    borderRadius: 100,
    height: '100%',
    aspectRatio: 1,
    borderColor: 'white',
    borderWidth: 2
  }
})
