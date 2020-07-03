import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  supercontainer: {
    flex: 768 - 75
  },
  topcover: {
    backgroundColor: 'white',
    height: (33.75 / 768) * Height
  },
  container1: {
    height: (65 / 768) * Height,
    backgroundColor: 'white',
    borderBottomWidth: (1 / 768) * Height,
    borderBottomColor: '#E6ECED'
  },
  ravencontext: {
    marginTop: (11 / 375) * Width,
    marginLeft: (25 / 375) * Width,
    width: (82 / 375) * Width
  },
  ravencont: {
    width: (54 / 375) * Width,
    height: (30 / 375) * Width,
    borderBottomWidth: (2 / 786) * Height,
    borderBottomColor: '#7B46E4',
    borderRadius: (1 / 786) * Height
  },
  raventext: {
    fontSize: (16 / 375) * Width,
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: (-0.11 / 768) * Width,
    lineHeight: (27 / 375) * Width,
    textAlign: 'center',
    color: '#22226B'
  },
  newraven: {
    position: 'absolute',
    left: (58 / 375) * Width,
    top: (5 / 375) * Width,
    height: (18 / 375) * Width,
    width: (28 / 375) * Width,
    borderRadius: (8 / 375) * Width,
    backgroundColor: '#46C3F4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newravencount: {
    color: '#FFFFFF',
    fontSize: (12 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular'
  },
  messagecontext: {
    marginTop: (11 / 375) * Width,
    marginLeft: (147.5 / 375) * Width,
    position: 'absolute'
  },
  messagecont: {
    width: (80 / 375) * Width
  },
  messagetext: {
    fontSize: (16 / 375) * Width,
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: (-0.11 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    textAlign: 'center',
    color: '#A4A4C0'
  },
  newmessage: {
    position: 'absolute',
    left: (82 / 375) * Width,
    top: (5 / 768) * Height,
    height: (18 / 375) * Width,
    width: (28 / 375) * Width,
    borderRadius: (8 / 375) * Width,
    backgroundColor: '#46C3F4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newmessagecount: {
    color: '#FFFFFF',
    fontSize: (12 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular'
  },
  writecont: {
    marginTop: (11 / 375) * Width,
    width: (30 / 375) * Width,
    right: (25 / 375) * Width,
    position: 'absolute'
  },
  writeimage: {
    height: (28 / 768) * Height,
    width: (30 / 768) * Height
  },
  container2: {
    height: (40 / 768) * Height,
    backgroundColor: 'white',
    borderBottomWidth: (1 / 768) * Height,
    borderBottomColor: '#E6ECED',
    justifyContent: 'center',
    zIndex: 2
  },
  iconsvg: {
    top: (78 / 768) * Height,
    right: (15 / 375) * Width,
    position: 'absolute',
    zIndex: 3
  },
  iconsvg2: {
    top: ((78 + 33.5) / 768) * Height,
    right: (15 / 375) * Width,
    position: 'absolute',
    zIndex: 3
  },
  filtericon: {
    height: (10 / 375) * Width,
    width: (21 / 375) * Width,
    left: (42 / 375) * Width
  },
  filtercont: {
    right: (6 / 375) * Width
  },
  timefiltertext: {
    fontSize: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    top: (-1.5 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    position: 'absolute'
  },
  all: {
    fontSize: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    top: (-1.5 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    position: 'absolute',
    left: (28 / 375) * Width
  },
  sent: {
    fontSize: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    top: (-1.5 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    position: 'absolute',
    left: (18 / 375) * Width
  },
  received: {
    fontSize: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    top: (-1.5 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    position: 'absolute',
    left: (-10 / 375) * Width
  },
  container3: {
    backgroundColor: '#F7F7F7',
    flex: 1
  },
  footer: {
    flex: 75
  },
  flatlist: {
    marginBottom: (100 / 375) * Width,
    zIndex: 1
  },
  flatlist2: {
    marginBottom: (100 / 375) * Width + (33.5 / 768) * Height,
    zIndex: 1
  },
  modal: {
    flex: 1,
    alignSelf: 'auto',
    left: (180 / 375) * Width,
    top: (55 / 768) * Height
  }
})

export default styles
