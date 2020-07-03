import { StyleSheet, Dimensions, Platform } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width
const footerHeight = Height * 0.102
const NAVBAR_HEIGHT = Platform.OS === 'ios' ? (86.5 / 768) * Height : (53 / 768) * Height
const styles = StyleSheet.create({
  fill: {
    height: Height,
    flex: 1,
    backgroundColor: '#F7F7F7',
    zIndex: 2
  },
  container1: {
    flex: 768 - 75,
    zIndex: 0
  },
  iconmenu: {
    height: (15 / 375) * Width,
    width: (20 / 375) * Width
  },
  flatlist: {
    marginBottom: (21 / 768) * Height
  },
  flatlistinside: {
    width: (325 / 375) * Width,
    marginLeft: (25 / 375) * Width,
    marginRight: (25 / 375) * Width
  },
  filtericon: {
    height: (10 / 375) * Width,
    width: (21 / 375) * Width
  },
  flatlistcont: {
    marginTop: (21 / 768) * Height,
    marginBottom: (21 / 768) * Height,
    alignItems: 'center'
  },
  container2: {
    flex: 75
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1,
    height: NAVBAR_HEIGHT,
    justifyContent: 'center',
    zIndex: 1
  },
  footer: {
    height: footerHeight,
    bottom: 0
  },
  contentContainer: {
    paddingTop: NAVBAR_HEIGHT
  },
  logo: {
    top: (16.5 / 768) * Height,
    left: (12.5 / 375) * Width,
    height: (50 / 768) * Height,
    width: (163 / 375) * Width
  },
  menu: {
    top: (50 / 768) * Height,
    right: (25 / 375) * Width,
    position: 'absolute'
  },
  logo1: {
    left: (12.5 / 375) * Width,
    height: (50 / 768) * Height,
    width: (163 / 375) * Width
  },
  menu1: {
    right: (25 / 375) * Width,
    position: 'absolute'
  },
  header2: {
    height: (157 / 768) * Height,
    backgroundColor: 'white',
    width: '100%',
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  },
  header3: {
    height: (40 / 768) * Height,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  press: {
    width: (100 / 375) * Width
  },
  press2: {
    width: (190 / 375) * Width
  },
  iconsvg: {
    left: (25 / 375) * Width
  },
  timefiltertext: {
    left: (26 / 375) * Width,
    fontSize: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    top: (-1 / 768) * Height,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    position: 'absolute'
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#E6ECED'
  },
  modal: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute'
  },
  button: {
    position: 'absolute',
    top: (111 / 768) * Height,
    alignSelf: 'center'
  }
})

export default styles
