import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const styles = StyleSheet.create({
  flexError: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  oopsText: {
    fontSize: (25 / 812) * Height,
    lineHeight: (39 / 812) * Height,
    color: '#141B4E',
    fontFamily: 'BananaGrotesk-Thin'
  },
  errorimg: {
    height: (191.65 / 812) * Height,
    width: (287.36 / 375) * Width
  },
  text404: {
    fontSize: (62 / 812) * Height,
    lineHeight: (75 / 812) * Height,
    color: '#141B4E',
    fontFamily: 'BananaGrotesk-Thin'
  },
  textlast: {
    fontSize: (16 / 812) * Height,
    lineHeight: (21 / 812) * Height,
    color: '#141B4E',
    fontFamily: 'BananaGrotesk-Extralight'
  },
  buttonHome: {
    height: (60 / 812) * Height,
    width: (325 / 375) * Width,
    backgroundColor: '#141B4E',
    borderRadius: (30 / 812) * Height,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: (16 / 812) * Height,
    lineHeight: (27 / 812) * Height,
    color: 'white',
    fontFamily: 'BananaGrotesk-Bold'
  }
})

export default styles
