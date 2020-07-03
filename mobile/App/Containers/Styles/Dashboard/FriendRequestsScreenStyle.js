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
    marginLeft: (66 / 375) * Width,
    fontFamily: 'BananaGrotesk-Bold',
    // textAlign: 'center',
    fontSize: (20 / 375) * Width,
    letterSpacing: (-0.14 / 375) * Width,
    color: '#1F1F60'
  },
  divider: {
    width: Width,
    height: 1,
    backgroundColor: '#E6ECED'
  },
  filter: {
    height: (40 / 812) * Height
  },
  newsComponentContainer: {
    // backgroundColor: '#F7F7F7'
  },
  listComponent: {
    // marginTop: (27 / 812) * Height,
    alignItems: 'center'
  }
})
