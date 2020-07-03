import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: (62 / 768) * Height,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#E6ECED',
    borderBottomWidth: (1 / 375) * Width
  },
  arrowleft: {
    width: (22 / 375) * Width,
    height: (17 / 375) * Width
  },
  backbutton: {
    height: (20 / 375) * Width,
    width: (22 / 375) * Width,
    left: (27 / 375) * Width,
    top: (16.5 / 768) * Height,
    position: 'absolute'
  },
  heading: {
    fontSize: (20 / 375) * Width,
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.14 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    alignSelf: 'center',
    top: (13 / 768) * Height,
    color: '#1F1F60'
  },
  elipsis: {
    position: 'absolute',
    right: (27 / 375) * Width,
    top: (20 / 375) * Width,
    height: (10 / 768) * Height,
    justifyContent: 'center'
  },
  container1: {
    backgroundColor: 'white'
  },
  grpicon: {
    marginTop: (40 / 768) * Height,
    height: (95 / 375) * Width,
    width: (95 / 375) * Width,
    borderRadius: (47.5 / 375) * Width,
    marginBottom: (15 / 768) * Height,
    alignSelf: 'center'
  },
  cameracont: {
    position: 'absolute',
    height: (48 / 375) * Width,
    width: (48 / 375) * Width,
    borderRadius: (24 / 375) * Width,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    top: (79 / 375) * Width,
    left: (201 / 375) * Width,
    borderWidth: (1 / 375) * Width,
    borderColor: '#E6ECED'
  },
  cameraimg: {
    height: (23 / 375) * Width,
    width: (28 / 375) * Width
  },
  grpnametext: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: (18 / 375) * Width,
    letterSpacing: (-0.12 / 375) * Width,
    lineHeight: (22 / 375) * Width,
    color: '#1F1F60',
    marginBottom: (5 / 768) * Height,
    alignSelf: 'center'
  },
  activetext: {
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: (12 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    color: '#8F8FAF',
    marginBottom: (10 / 768) * Height,
    alignSelf: 'center'
  },
  button: {
    marginBottom: (60 / 768) * Height,
    alignSelf: 'center'
  },
  membertxt: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: (18 / 375) * Width,
    letterSpacing: (-0.12 / 375) * Width,
    lineHeight: (22 / 375) * Width,
    color: '#1F1F60',
    left: (25 / 375) * Width,
    marginBottom: (9 / 768) * Height
  },
  addcont: {
    position: 'absolute',
    right: (25 / 375) * Width
  },
  addtext: {
    fontFamily: 'BananaGrotesk-Semibold',
    fontSize: (14 / 375) * Width,
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width,
    color: '#7B46E4'
  },
  listofuser: {
    marginLeft: (25 / 375) * Width
  },
  flatlist: {
    marginBottom: (50 / 768) * Height
  },
  label: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: (16 / 375) * Width,
    letterSpacing: (-0.11 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    color: '#22226B'
  },
  tab: {
    width: (210 / 375) * Width,
    alignSelf: 'center'
  },
  tabstyle: {
    borderBottomColor: '#7B46E4'
  },
  options: {
    marginLeft: (24 / 375) * Width,
    marginRight: (27 / 375) * Width
  },
  optionscont: {
    marginBottom: (15 / 768) * Height
  },
  optionstext: {
    fontFamily: 'BananaGrotesk-Light',
    fontSize: (16 / 375) * Width,
    letterSpacing: (-0.11 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    color: '#22226B'
  },
  border: {
    borderBottomWidth: (1 / 375) * Width,
    borderBottomColor: '#E6ECED',
    marginBottom: (15 / 768) * Height
  },
  borderlast: {
    borderBottomWidth: (1 / 375) * Width,
    borderBottomColor: '#E6ECED',
    marginBottom: (45 / 768) * Height
  },
  togglebutton: {
    position: 'absolute',
    right: 0,
    top: (5 / 768) * Height
  }
})

export default styles
