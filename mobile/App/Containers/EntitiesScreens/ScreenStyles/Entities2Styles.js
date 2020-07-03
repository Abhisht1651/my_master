import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  },
  topBox: {
    height: (61 / 812) * Height,
    paddingHorizontal: (25 / 375) * Width,
    width: '100%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#E6ECED',
    elevation: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  backbutton: {
    height: (20 / 375) * Width,
    width: (20 / 375) * Width
  },
  contentBox: {
    height: (516 / 812) * Height,
    width: '100%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#E6ECED',
    elevation: 1,
    justifyContent: 'center',
    paddingTop: (37 / 812) * Height,
    paddingBottom: (58 / 812) * Height,
    paddingLeft: (25 / 375) * Width,
    paddingRight: (31 / 375) * Width
    //    borderColor: 'blue',
    //    borderWidth: 2
  },
  smallContentBox: {
    justifyContent: 'center',
    alignItems: 'center'
    //  borderColor: '#f30d0d',
    //  borderWidth: 2,
  },
  profilepicBox: {
    marginTop: (75 / 812) * Height // changed 37 --> 75
  },
  profileDetails: {
    height: (49 / 812) * Height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (39 / 812) * Height // changed 19 --> 39
    //  borderWidth: 2,
    //  borderColor: 'cyan'
  },
  profileTitleFont: {
    color: '#1F1F60',
    fontSize: (20 / 375) * Width,
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.14 / 375) * Width
  },
  profileAboutFont: {
    // marginTop: 9,
    color: '#1F1F60',
    fontSize: (16 / 375) * Width,
    fontFamily: 'BananaGrotesk-Light',
    letterSpacing: (-0.11 / 375) * Width,
    textAlign: 'left'
  },
  followContentBox: {
    marginTop: (30 / 812) * Height,
    height: (57 / 812) * Height,
    justifyContent: 'center',
    alignItems: 'center'
    //  borderWidth: 2,
    //  borderColor: 'cyan'
  },
  followDetails: {
    color: '#8F8FAF',
    fontSize: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Light',
    marginTop: (5 / 812) * Height
  },
  profileDetailsBox: {
    width: '100%',
    marginTop: (29 / 812) * Height,
    marginBottom: (58 / 812) * Height
  },
  detailTitleFont: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: (18 / 375) * Width,
    letterSpacing: (-0.12 / 375) * Width,
    color: '#1F1F60'
  },
  detailsFont: {
    fontFamily: 'BananaGrotesk-Light',
    fontSize: (16 / 375) * Width,
    letterSpacing: (-0.11 / 375) * Width,
    color: '#1F1F60',
    marginTop: (15 / 812) * Height,
    lineHeight: (27 / 812) * Height // Added lineHeight here
  },
  footerBox: {
    height: (184 / 812) * Height,
    width: '100%'
  },
  footerBox1: {
    height: (84 / 812) * Height
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: (42 / 812) * Height,
    marginHorizontal: (25 / 375) * Width
    //  borderColor: 'blue',
    //  borderWidth: 2
  },
  footerBox2: {
    height: (109 / 812) * Height
  },
  textFont1: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    fontSize: (18 / 375) * Width,
    letterSpacing: (-0.12 / 375) * Width,
    textAlign: 'left',
    opacity: 1
  },
  textFont2: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#7B46E4',
    fontSize: (16 / 375) * Width,
    letterSpacing: (-0.09 / 375) * Width,
    textAlign: 'left',
    opacity: 1
  },
  box: {
    paddingHorizontal: 8
  },
  box2: {
    paddingLeft: 26,
    paddingRight: 8
  },
  footerBox3: {
    height: (410 / 812) * Height
  },
  footerBox4: {
    width: '100%',
    height: (322 / 812) * Height
  },
  footerBox5: {
    width: '100%'
  },
  postWidthtop: {
    width: (300 / 375) * Width,
    marginLeft: (25 / 375) * Width
  },
  postWidth: {
    width: (300 / 375) * Width,
    marginLeft: (15 / 375) * Width
  },
  filter: {
    flexDirection: 'row',
    width: (88 / 375) * Width,
    justifyContent: 'space-between'
  },
  filterFont: {
    color: '#8F8FAF',
    letterSpacing: (-0.07 / 375) * Width,
    fontSize: (12 / 375) * Width
  },
  multipleEvents: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  verticalgap: {
    height: (20 / 812) * Height
  }
})
