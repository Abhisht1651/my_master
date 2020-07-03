import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    width: Width,
    flex: 1
  },
  container1: {
    flex: 768 - 75
  },
  container2: {
    flex: 75
  },
  filtericon: {
    height: (10 / 375) * Width,
    width: (21 / 375) * Width
  },
  headertext: {
    backgroundColor: 'white',
    height: (62 / 768) * Height,
    flex: 1
  },
  topcover: {
    backgroundColor: 'white',
    height: (33.75 / 768) * Height,
    flex: 1
  },
  activityfeedtext: {
    color: '#1F1F60',
    textAlign: 'center',
    fontSize: (20 / 375) * Width,
    marginTop: (13 / 768) * Height,
    marginBottom: (28 / 768) * Height,
    fontFamily: 'BananaGrotesk-Bold',
    lineHeight: (27 / 375) * Width
  },
  header2: {
    height: (40 / 768) * Height,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  iconsvg: {
    left: (25 / 375) * Width,
    width: (90 / 375) * Width
  },
  iconsvgselected: {
    left: (25 / 375) * Width,
    width: (190 / 375) * Width
  },
  button: {
    position: 'absolute',
    top: (60 / 768) * Height,
    alignSelf: 'center',
    borderRadius: (19 / 375) * Width
  },
  timefiltertext: {
    left: (26 / 375) * Width,
    fontSize: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    letterSpacing: -0.07,
    lineHeight: (14 / 375) * Width,
    position: 'absolute'
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#E6ECED'
  },
  profile: {
    width: (32 / 375) * Width,
    height: (32 / 375) * Width,
    borderRadius: (16 / 375) * Width
  },
  text: {
    left: '7.04%'
  },
  margin: {
    marginLeft: (25 / 375) * Width,
    marginRight: (25 / 375) * Width,
    marginBottom: (50 / 768) * Height
  },
  ellipse: {
    right: 0,
    position: 'absolute',
    marginTop: '2%',
    height: (10 / 768) * Height,
    backgroundColor: 'white'
  },
  activityid: {
    marginLeft: (25 / 375) * Width,
    marginRight: (24 / 375) * Width,
    marginTop: (25 / 768) * Height,
    marginBottom: (26 / 768) * Height
  },
  events: {
    width: '100%',
    height: (90 / 768) * Height,
    borderWidth: (1 / 768) * Height,
    borderRadius: 15,
    borderColor: '#E6ECED',
    marginTop: (10 / 768) * Height
  },
  modal: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  floatx2sbutton: {
    elevation: 5,
    width: (125 / 375) * Width,
    height: (30 / 375) * Width,
    borderRadius: (19 / 375) * Width,
    backgroundColor: '#FFFFFF'
  },
  floatx2stext: {
    fontSize: (14 / 375) * Width,
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width
  },
  btntext: {
    alignItems: 'center',
    top: (7 / 375) * Width
  }
})

export default styles
