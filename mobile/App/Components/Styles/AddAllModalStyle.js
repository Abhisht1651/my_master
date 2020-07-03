import { StyleSheet, Dimensions } from 'react-native'
// import { Colors, Metrics } from '../../Themes/'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1
  },
  modal: {
    backgroundColor: '#FFFFFF',
    height: (360 / 812) * Height,
    width: '90%',
    borderRadius: (15 / 812) * Height,
    borderWidth: (1 / 812) * Height,
    borderColor: '#fff',
    // marginTop: '32%',
    marginLeft: '5%'
  },
  closeIcon: {
    alignItems: 'flex-end',
    marginRight: '4%',
    marginTop: '4%'
  },
  addAll: {
    marginTop: (38 / 812) * Height,
    // marginLeft: (25 / 375) * Width,
    textAlign: 'center',
    fontSize: (20 / 375) * Width,
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.14 / 375) * Width,
    color: '#1F1F60',
    lineHeight: (27 / 812) * Height,
    marginBottom: (8 / 812) * Height
  },
  sureText: {
    marginLeft: (32 / 375) * Width,
    marginRight: (32 / 375) * Width,
    textAlign: 'center',
    fontSize: (16 / 375) * Width,
    letterSpacing: (-0.14 / 375) * Width,
    color: '#1F1F60',
    lineHeight: (25 / 812) * Height,
    fontFamily: 'BananaGrotesk-Light',
    marginBottom: (39 / 812) * Height
  },
  continueButton: {
    alignItems: 'center',
    marginTop: (60 / 812) * Height
  }
})
