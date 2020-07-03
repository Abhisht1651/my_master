import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
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
  container2: {
    height: (92 / 768) * Height,
    backgroundColor: '#F5F8F8'
  },
  container2text: {
    fontSize: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Light',
    letterSpacing: 0,
    lineHeight: (21 / 375) * Width,
    alignSelf: 'center',
    color: '#9A9AB8',
    marginRight: (25 / 375) * Width,
    marginLeft: (25 / 375) * Width,
    marginTop: (20 / 768) * Height
  },
  chatcont: {
    marginRight: (25 / 375) * Width,
    marginLeft: (25 / 375) * Width,
    borderBottomWidth: (1 / 375) * Width,
    borderBottomColor: '#E6ECED'
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
  }
})

export default styles
