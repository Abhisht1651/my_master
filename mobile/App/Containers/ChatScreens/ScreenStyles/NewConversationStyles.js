import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  screen: {
    height: Height,
    width: Width,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  topBox: {
    height: (117 / 812) * Height,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: (24 / 375) * Width,
    elevation: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#E6ECED',
    backgroundColor: '#FFFFFF'
  },
  topBox1: {
    width: '100%',
    height: (62 / 812) * Height,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  topBox2: {
    width: '100%',
    height: (45 / 812) * Height
  },
  backbutton: {
    height: (20 / 375) * Width,
    width: (20 / 375) * Width
  },
  titleFont: {
    color: '#1F1F60',
    fontSize: (20 / 375) * Width,
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.14 / 375) * Width
  },
  importFont: {
    color: '#7B46E4',
    fontSize: (16 / 375) * Width,
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.09 / 375) * Width
  },
  mainBox: {
    width: '100%',
    paddingHorizontal: (25 / 375) * Width,
    paddingTop: (34 / 812) * Height
  },
  textBox: {
    width: '100%',
    height: (24 / 812) * Height
  },
  textFont: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: (18 / 375) * Width,
    color: '#1F1F60',
    letterSpacing: (-0.12 / 375) * Width
  },
  listBox: {
    width: '100%',
    height: (575 / 812) * Height,
    alignItems: 'center'
  },
  bottomBox: {
    width: '100%',
    height: (110 / 812) * Height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrowleft: {
    width: (22 / 375) * Width,
    height: (17 / 375) * Width
  }
})
