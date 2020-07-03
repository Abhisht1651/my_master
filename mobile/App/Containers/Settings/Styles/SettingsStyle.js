import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const styles = StyleSheet.create({
  backColor: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  leftArrow: {
    height: (13.5 / 812) * Height,
    width: (18 / 375) * Width
  },
  heading: {
    fontSize: (20 / 812) * Height,
    lineHeight: (27 / 812) * Height,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold'
  },
  subHeading: {
    fontSize: (20 / 812) * Height,
    lineHeight: (27 / 812) * Height,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold'
  },
  content: {
    fontSize: (16 / 812) * Height,
    lineHeight: (27 / 812) * Height,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Light'
  },
  rightSmallArrow: {
    height: (13.5 / 812) * Height,
    width: (6 / 375) * Width
  }
})

export default styles
