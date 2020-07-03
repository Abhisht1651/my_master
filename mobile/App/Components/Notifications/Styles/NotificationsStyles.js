import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
    // marginTop: Metrics.navBarHeight,
    // backgroundColor: Colors.background
  },
  topbar: {
    flexDirection: 'row',
    marginTop: (12 / 812) * Height,
    marginBottom: (22 / 812) * Height,
    marginLeft: (25 / 375) * Width,
    marginRight: (25 / 375) * Width
  },
  topbarios: {
    flexDirection: 'row',
    marginTop: (42 / 812) * Height,
    marginBottom: (22 / 812) * Height,
    marginLeft: (25 / 375) * Width,
    marginRight: (25 / 375) * Width
  },
  arrowComponent: {
    justifyContent: 'flex-start',
    width: (23 / 375) * Width
  },
  topbarText: {
    marginLeft: (81 / 375) * Width,
    fontFamily: 'BananaGrotesk-Bold',
    // textAlign: 'center',
    fontSize: (20 / 375) * Width,
    letterSpacing: (-0.14 / 375) * Width,
    color: '#1F1F60'
  },
  flex: {
    flexDirection: 'column'
  },
  flex1: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: (58 / 812) * Height,
    paddingBottom: (31 / 812) * Height,
    marginLeft: (25 / 375) * Width
  },
  leftArrowPos: {
    paddingLeft: (25 / 375) * Width
  },
  iconTrendingPos: {
    paddingTop: (5 / 812) * Height
  },
  iconListPos: {
    paddingTop: (5 / 812) * Height
  },
  leftArrow: {
    height: (17 / 812) * Height,
    width: (22 / 375) * Width
  },
  iconTrending: {
    height: (25 / 812) * Height,
    width: (25 / 375) * Width
  },
  iconList: {
    height: (17 / 812) * Height,
    width: (18 / 375) * Width
  },
  notify: {
    paddingLeft: (82 / 375) * Width
  },
  notifyText: {
    fontSize: (20 / 812) * Height,
    lineHeight: (27 / 812) * Height,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold'
  },
  flex2: {
    // paddingTop:(31/812)*Height,
  },
  flex2_2: {
    width: (287 / 375) * Width
  },
  flex3_2: {
    width: (287 / 375) * Width
  },
  flex3_1: {
    backgroundColor: '#F7F7F7',
    paddingTop: (25.53 / 812) * Height,
    paddingLeft: (30 / 375) * Width,
    // paddingRight:(14/375)*Width,
    flexDirection: 'row'
  },
  flex2_1: {
    backgroundColor: '#F7F7F7',
    paddingTop: (23 / 812) * Height,
    paddingLeft: (27 / 375) * Width,
    // paddingRight:(14/375)*Width,
    flexDirection: 'row'
  },
  flex2_3: {
    backgroundColor: '#F7F7F7',
    paddingTop: (23 / 812) * Height,
    paddingLeft: (30 / 375) * Width,
    // paddingRight:(14/375)*Width,
    flexDirection: 'row'
  },
  flex2_1_1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex3_1_1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex2_1_1_2: {
    paddingTop: (2 / 812) * Height,
    paddingLeft: (14 / 375) * Width,
    width: (232 / 375) * Width,
    fontSize: (14 / 812) * Height,
    lineHeight: (19 / 812) * Height,
    fontFamily: 'BananaGrotesk-Light'
    // flexDirection:'row'
  },
  flex3_1_1_2: {
    // paddingTop:(2/812)*Height,
    paddingLeft: (18 / 375) * Width,
    width: (236 / 375) * Width,
    fontSize: (14 / 812) * Height,
    lineHeight: (19 / 812) * Height,
    fontFamily: 'BananaGrotesk-Light',
    flexDirection: 'row'
  },

  flex2_1_2_2: {
    paddingTop: (3 / 812) * Height,
    paddingLeft: (14 / 375) * Width,
    width: (232 / 375) * Width,
    fontSize: (14 / 812) * Height
    // fontFamily:"BananaGrotesk-Light",
    // flexDirection:'row'
  },
  flex3_1_2_2: {
    paddingTop: (3 / 812) * Height,
    paddingLeft: (18 / 375) * Width,
    width: (232 / 375) * Width,
    fontSize: (14 / 812) * Height
    // fontFamily:"BananaGrotesk-Light",
    // flexDirection:'row'
  },
  flex2_1_2_3: {
    paddingTop: (3 / 812) * Height,
    // paddingLeft:(28/375)*Width,
    // width:(232/375)*Width,
    fontSize: (14 / 812) * Height

    // fontFamily:"BananaGrotesk-Light",
    // flexDirection:'row'
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
    fontFamily: 'BananaGrotesk-Light',
    color: '#8F8FAF'
  },
  boldFont: {
    fontFamily: 'BananaGrotesk-Bold'
  },
  dots3Pos: {
    // paddingLeft:(38/375)*Width
  },
  dots3: {
    height: (3 / 812) * Height,
    width: (15 / 375) * Width
  },
  para1: {
    width: (66 / 375) * Width
  }
})

export default styles
