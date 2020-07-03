import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  largebutton: {
    height: (60 / 375) * Width,
    borderRadius: (39 / 375) * Width,
    width: (325 / 375) * Width,
    backgroundColor: '#7B46E4'
  },
  largetext: {
    fontSize: (16 / 375) * Width,
    color: '#FFFFFF',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.09 / 375) * Width,
    lineHeight: (18 / 375) * Width
  },
  disabledlargebutton: {
    height: (60 / 375) * Width,
    width: (325 / 375) * Width,
    borderRadius: (39 / 375) * Width,
    backgroundColor: '#7B46E466'
  },
  disabledlargetext: {
    fontSize: (16 / 375) * Width,
    color: '#FFFFFF',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.09 / 375) * Width,
    lineHeight: (18 / 375) * Width
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
