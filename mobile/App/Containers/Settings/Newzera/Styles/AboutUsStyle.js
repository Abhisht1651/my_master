import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    paddingLeft: (27 / 375) * Width
  },
  leftArrow: {
    height: (13.5 / 812) * Height,
    width: (18 / 375) * Width
  },
  line: {
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  },
  heading: {
    fontSize: (20 / 812) * Height,
    lineHeight: (27 / 812) * Height,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold'
  },
  subHeading: {
    fontSize: (16 / 812) * Height,
    lineHeight: (18 / 812) * Height,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium'
  },
  content: {
    fontSize: (16 / 812) * Height,
    lineHeight: (27 / 812) * Height,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Light'
  }
})

export default styles
