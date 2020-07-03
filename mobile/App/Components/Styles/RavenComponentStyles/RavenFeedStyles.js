import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    width: '86.66%',
    borderRadius: (15 / 768) * Height,
    borderWidth: (1 / 768) * Height,
    borderColor: '#DCDCE9',
    backgroundColor: '#FFFFFF',
    marginTop: (12.5 / 768) * Height,
    marginBottom: (12.5 / 768) * Height,
    marginRight: (25 / 375) * Width,
    marginLeft: (25 / 375) * Width
  },
  overcontainer: {
    width: '100%',
    borderRadius: (15 / 768) * Height,
    height: '100%',
    position: 'absolute'
  },
  imagecontainer: {
    width: '100%',
    borderRadius: (15 / 768) * Height,
    height: '100%',
    position: 'absolute'
  },
  container1: {
    height: (68 / 768) * Height,
    borderBottomWidth: (1 / 768) * Height,
    borderBottomColor: '#DCDCE9',
    justifyContent: 'center'
  },
  image: {
    height: (28 / 375) * Width,
    width: (28 / 375) * Width,
    borderRadius: (14 / 375) * Width,
    position: 'absolute'
  },
  headercontainer: {
    justifyContent: 'center'
  },
  icon: {
    height: (27 / 375) * Width,
    width: (20 / 375) * Width,
    left: (16 / 375) * Width,
    position: 'absolute'
  },
  right: {
    right: (20 / 375) * Width,
    position: 'absolute'
  },
  righticon: {
    width: (6 / 375) * Width,
    height: (12 / 375) * Width
  },
  container2: {
    height: (322 / 375) * Width,
    borderBottomWidth: (1 / 768) * Height,
    borderBottomColor: '#DCDCE9'
  },
  container3: {
    height: (68 / 768) * Height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendmorecont: {
    width: (140 / 375) * Width,
    height: (20 / 768) * Height,
    justifyContent: 'center'
  },
  sendmoretext: {
    fontSize: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width,
    textAlign: 'center',
    color: '#7B46E4'
  },
  sentraventext: {
    width: (200 / 375) * Width,
    fontSize: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width,
    color: '#8F8FAF'
  },
  underline: {
    textDecorationLine: 'underline'
  },
  absolute: {
    position: 'absolute',
    height: '98%',
    width: '98%',
    top: '1%',
    left: '1%',
    borderRadius: (15 / 768) * Height
  },
  blue: {
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  lightfill: {
    alignSelf: 'center',
    width: (50 / 375) * Width,
    height: (70 / 375) * Width
  },
  topcontainer: {
    height: (65 / 768) * Height,
    top: 0,
    position: 'absolute',
    justifyContent: 'center'
  },
  overraventext: {
    width: (200 / 375) * Width,
    fontSize: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width,
    color: '#FFFFFF'
  }
})

export default styles
