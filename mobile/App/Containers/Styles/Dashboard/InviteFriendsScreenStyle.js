import { StyleSheet, Dimensions } from 'react-native'
// import { Colors, Metrics } from '../../Themes/'
const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
    // marginTop: Metrics.navBarHeight,
    // backgroundColor: Colors.background
  },
  topBar: {
    flexDirection: 'row',
    height: (70 / 812) * Height,
    width: Width,
    paddingTop: (21 / 812) * Height,
    paddingLeft: (25 / 375) * Width,
    paddingRight: (25 / 375) * Width,
    paddingBottom: (8 / 812) * Height
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
  divider: {
    width: Width,
    height: 1,
    backgroundColor: '#E6ECED',
    marginBottom: (38 / 812) * Height
  },
  importText: {
    marginLeft: '10%',
    // marginRight: (25 / 375) * Width,
    textAlign: 'left',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: (20 / 375) * Width,
    letterSpacing: (-0.14 / 375) * Width,
    color: '#1F1F60'
  },
  importCard: {
    height: (510 / 812) * Height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inviteText: {
    marginTop: (27 / 812) * Height,
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: (16 / 375) * Width,
    letterSpacing: (-0.09 / 375) * Width,
    color: '#7B46E4'
  },
  buttonStyle: {
    alignItems: 'center'
  },
  box: {
    height: (200 / 812) * Height,
    width: (325 / 375) * Width
  }
})
