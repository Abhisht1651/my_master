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
  feedback: {
    fontSize: (18 / 812) * Height,
    lineHeight: (22 / 812) * Height,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    textAlign: 'center'
  },
  submitAgain: {
    height: (50 / 812) * Height,
    width: (225 / 375) * Width,
    borderRadius: (38.5 / 812) * Height,
    backgroundColor: '#7B46E4'
  },
  sendNo: {
    height: (50 / 812) * Height,
    width: (325 / 375) * Width,
    borderRadius: (38.5 / 812) * Height,
    backgroundColor: '#7B46E4',
    opacity: 0.5
  },
  sendYes: {
    height: (50 / 812) * Height,
    width: (325 / 375) * Width,
    borderRadius: (38.5 / 812) * Height,
    backgroundColor: '#7B46E4'
  },
  submitAgainText: {
    fontSize: (16 / 812) * Height,
    lineHeight: (18 / 812) * Height,
    color: 'white',
    fontFamily: 'BananaGrotesk-Bold',
    textAlign: 'center'
  },
  tell: {
    fontSize: (18 / 812) * Height,
    lineHeight: (22 / 812) * Height,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium'
  },
  input: {
    height: (296 / 812) * Height,
    width: (324 / 375) * Width,
    backgroundColor: '#F5F8F8',
    padding: (20 / 375) * Width,
    paddingRight: (65 / 375) * Width,
    borderRadius: (10 / 375) * Width,
    fontFamily: 'BananaGrotesk-Light',
    fontSize: (16 / 812) * Height,
    lineHeight: (27 / 812) * Height
  },
  buttonSubmit: {
    width: (325 / 375) * Width
  }
})

export default styles
