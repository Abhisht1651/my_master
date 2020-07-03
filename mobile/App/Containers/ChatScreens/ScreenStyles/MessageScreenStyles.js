import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  supercontainer: { flex: 768 - 75 },
  container1: {
    height: (65 / 768) * Height
  },
  ravencontext: {
    marginTop: (11 / 375) * Width,
    marginLeft: (25 / 375) * Width,
    width: (82 / 375) * Width
  },
  ravencont: {
    width: (54 / 375) * Width,
    height: (30 / 375) * Width
  },
  raventext: {
    fontSize: (16 / 375) * Width,
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: (-0.11 / 768) * Width,
    lineHeight: (27 / 375) * Width,
    textAlign: 'center',
    color: '#A4A4C0'
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
    width: (80 / 375) * Width,
    borderBottomWidth: (2 / 786) * Height,
    borderBottomColor: '#7B46E4',
    borderRadius: (1 / 786) * Height
  },
  messagetext: {
    fontSize: (16 / 375) * Width,
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: (-0.11 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    textAlign: 'center',
    color: '#22226B'
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
    height: (75 / 768) * Height,
    backgroundColor: 'white',
    borderBottomWidth: (1 / 768) * Height,
    borderBottomColor: '#E6ECED'
  },
  searchbarstyle: {
    marginTop: (35 / 768) * Width,
    alignSelf: 'center'
  },
  iconsvg: {
    top: (78 / 768) * Height,
    left: (200 / 375) * Width,
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
    backgroundColor: '#FFFFFF'
  },
  footer: {
    flex: 75,
    zIndex: -1
  },
  flatlist: {
    marginBottom: (25 / 768) * Height
  },
  chatcont: {
    marginRight: (25 / 375) * Width,
    marginLeft: (25 / 375) * Width,
    borderBottomWidth: (1 / 375) * Width,
    borderBottomColor: '#E6ECED'
  },
  chatcont1: {
    marginRight: (25 / 375) * Width,
    marginLeft: (25 / 375) * Width
  },
  personimage: {
    height: (44 / 375) * Width,
    width: (44 / 375) * Width,
    borderRadius: (22 / 375) * Width,
    marginTop: (20 / 768) * Height,
    marginBottom: (22 / 768) * Height
  },
  chattext: {
    position: 'absolute',
    left: (57 / 375) * Width,
    marginTop: (25 / 768) * Height
  },
  personname: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: (18 / 375) * Width,
    letterSpacing: (-0.12 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    color: '#1F1F60'
  },
  chatmsg: {
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: (12 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    color: '#8F8FAF',
    top: (-1 / 768) * Height,
    width: (200 / 375) * Width
  },
  time: {
    right: 0,
    position: 'absolute',
    marginTop: (27 / 768) * Height,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: (12 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    color: '#8F8FAF'
  },
  request: {
    height: (40 / 768) * Height,
    justifyContent: 'center',
    marginRight: (25 / 375) * Width
  },
  requesttext: {
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: (14 / 375) * Width,
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width,
    color: '#7B46E4',
    position: 'absolute',
    right: (13 / 375) * Width
  },
  right: {
    position: 'absolute',
    right: 0,
    width: (6 / 375) * Width,
    height: (12 / 375) * Width,
    top: (3 / 768) * Height
  },
  newmessagechat: {
    position: 'absolute',
    height: (18 / 375) * Width,
    width: (28 / 375) * Width,
    borderRadius: (8 / 375) * Width,
    backgroundColor: '#46C3F4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    marginTop: (50 / 768) * Height
  },
  basedcontacttext: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: (18 / 375) * Width,
    letterSpacing: (-0.12 / 375) * Width,
    lineHeight: (22 / 375) * Width,
    color: '#1F1F60',
    marginLeft: (25 / 375) * Width,
    marginTop: (25 / 768) * Height
  }
})

export default styles
