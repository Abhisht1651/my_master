import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const styles = StyleSheet.create({
  iconTrendingPos: {
    paddingTop: (26 / 812) * Height,
    paddingLeft: (22 / 375) * Width
  },
  iconTrending: {
    height: (34 / 812) * Height,
    width: (34 / 812) * Height,
    borderRadius: (10 / 812) * Height
  },
  con1: {
    paddingTop: (23 / 812) * Height,
    // paddingLeft:(14/375)*Width,
    width: (232 / 375) * Width
  },
  text1: {
    fontSize: (14 / 812) * Height,
    lineHeight: (19 / 812) * Height,
    fontFamily: 'BananaGrotesk-Light',
    color: '#1F1F60'
  },
  text2: {
    fontSize: (12 / 812) * Height,
    lineHeight: (14 / 812) * Height,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF'
  },
  boldFont: {
    fontFamily: 'BananaGrotesk-Bold'
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
  con3: {
    paddingTop: (3 / 812) * Height,
    paddingRight: (14 / 375) * Width
  }
})

export default styles
