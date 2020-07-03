import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const styles = StyleSheet.create({
  iconPos: {
    paddingTop: (28 / 812) * Height,
    paddingLeft: (25 / 375) * Width
  },
  icon: {
    height: (27 / 812) * Height,
    width: (27 / 812) * Height
  },
  iconRound: {
    borderRadius: (13.5 / 812) * Height
  },
  icons: {
    height: (19 / 812) * Height,
    width: (19 / 812) * Height,
    top: (15 / 812) * Height,
    left: (15 / 812) * Height
  },
  con1: {
    paddingTop: (23 / 812) * Height,
    // paddingLeft:(14/375)*Width,
    width: (232 / 375) * Width
  },
  dots3Pos: {
    paddingTop: (21 / 812) * Height,
    paddingRight: (14 / 375) * Width
  },
  dots3: {
    height: (3 / 812) * Height,
    width: (15 / 375) * Width
  },
  con2: {
    paddingTop: (3 / 812) * Height,
    width: (232 / 375) * Width
  },
  con4: {
    paddingTop: (3 / 812) * Height,
    paddingRight: (14 / 375) * Width,
    justifyContent: 'flex-end'
  },
  text1: {
    fontSize: (14 / 812) * Height,
    lineHeight: (19 / 812) * Height,
    fontFamily: 'BananaGrotesk-Light',
    color: '#8F8FAF'
  },
  text2: {
    fontSize: (12 / 812) * Height,
    lineHeight: (14 / 812) * Height,
    fontFamily: 'BananaGrotesk-Light',
    color: '#8F8FAF'
  },
  text3: {
    fontSize: (12 / 812) * Height,
    lineHeight: (14 / 812) * Height,
    fontFamily: 'BananaGrotesk-Light',
    color: '#8F8FAF'
  },
  semiboldFont: {
    fontFamily: 'BananaGrotesk-Semibold',
    color: '#1F1F60'
  }
})

export default styles
