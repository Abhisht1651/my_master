import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  topcover: {
    backgroundColor: 'white',
    height: (33.75 / 768) * Height,
    flex: 1
  },
  image: {
    height: Height,
    width: Width,
    position: 'absolute'
  },
  sentmessage: {
    top: (312.55 / 768) * Height
  },
  light: {
    height: (86.23 / 375) * Width,
    width: (63 / 375) * Width
  },
  textcont: {
    width: (230 / 375) * Width
  },
  text: {
    top: (330 / 768) * Height,
    textAlign: 'center',
    fontSize: (18 / 375) * Width,
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: (-0.12 / 375) * Width,
    lineHeight: (22 / 375) * Width,
    color: '#1F1F60'
  }
})

export default styles
