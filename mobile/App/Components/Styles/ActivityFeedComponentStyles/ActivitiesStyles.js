import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginLeft: (40 / 375) * Width,
    marginRight: (30 / 375) * Width
  },
  textfont: {
    fontSize: (14 / 375) * Width,
    letterSpacing: (-0.1 / 375) * Width,
    lineHeight: (18 / 375) * Width
  },
  activityid: {
    marginTop: (25 / 768) * Height,
    marginBottom: (25 / 768) * Height
  },
  profile: {
    width: (28 / 375) * Width,
    height: (28 / 375) * Width,
    borderRadius: (14 / 375) * Width
  },
  ellipse: {
    right: (-10 / 375) * Width,
    position: 'absolute',
    zIndex: 1
  },
  text1: {
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Semibold'
  },
  text2: {
    color: '#8989A7',
    fontFamily: 'BananaGrotesk-Light'
  },
  text3: {
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular'
  },
  others: {
    marginLeft: (40 / 375) * Width,
    marginRight: (20 / 375) * Width,
    marginTop: (3 / 375) * Width
  },
  type: {
    color: '#1F1F60',
    fontSize: (12 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular'
  },
  dot1: {
    height: (2 / 375) * Width,
    width: (2 / 375) * Width,
    borderRadius: (1 / 375) * Width,
    backgroundColor: '#1F1F60',
    position: 'absolute',
    marginLeft: (44 / 375) * Width,
    marginTop: (6 / 375) * Width
  },
  dot2: {
    height: (2 / 375) * Width,
    width: (2 / 375) * Width,
    borderRadius: (1 / 375) * Width,
    backgroundColor: '#1F1F60',
    position: 'absolute',
    marginLeft: (39 / 375) * Width,
    marginTop: (6 / 375) * Width
  },
  time: {
    color: '#8989A7',
    fontSize: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular'
  },
  timealign1: {
    position: 'absolute',
    marginRight: 2,
    marginLeft: (47 / 375) * Width
  },
  timealign2: {
    position: 'absolute',
    marginRight: 2,
    marginLeft: (42 / 375) * Width
  },
  follow: {
    width: (34 / 375) * Width,
    height: (34 / 375) * Width,
    borderRadius: (7 / 375) * Width,
    marginTop: (10 / 768) * Width,
    marginRight: (10 / 768) * Width
  },
  comment: {
    fontSize: (12 / 375) * Width,
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#1F1F60',
    marginTop: (10 / 375) * Width
  },
  border: {
    borderBottomWidth: (1 / 768) * Height,
    width: '100%',
    borderColor: '#E6ECED'
  },
  events: {
    marginTop: (10 / 768) * Height,
    zIndex: 0
  },
  profileimage: {
    position: 'absolute'
  },
  elipsissize: {
    height: (3 / 768) * Height,
    width: (17 / 768) * Height
  },
  feed: {
    height: (10 / 768) * Height,
    width: (20 / 768) * Height,
    top: (3 / 768) * Height,
    left: (5 / 768) * Height
  }
})

export default styles
