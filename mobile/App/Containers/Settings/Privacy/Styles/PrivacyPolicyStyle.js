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
  },
  flexRowBet: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  photo: {
    height: (44 / 812) * Height,
    width: (44 / 812) * Height,
    borderRadius: (22 / 812) * Height
  },
  flexRowblock: {
    flexDirection: 'row'
  },
  name: {
    fontSize: (18 / 812) * Height,
    lineHeight: (27 / 812) * Height,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium'
  },
  unblock: {
    width: (75 / 375) * Width,
    borderRadius: (16 / 812) * Height,
    height: (30 / 812) * Height,
    borderWidth: (1 / 812) * Height,
    borderColor: '#7B46E4'
  },
  unblockText: {
    fontSize: (14 / 812) * Height,
    lineHeight: (16 / 812) * Height,
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    textAlign: 'center'
  }
})

export default styles
