import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const styles = StyleSheet.create({
  largethinbutton: {
    width: (325 / 375) * Width,
    height: (50 / 375) * Width,
    borderRadius: (39 / 375) * Width,
    backgroundColor: '#7B46E4'
  },
  largethintext: {
    fontSize: (16 / 375) * Width,
    color: '#FFFFFF',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.09 / 375) * Width,
    lineHeight: (18 / 375) * Width
  },
  disabledlargethinbutton: {
    width: (325 / 375) * Width,
    height: (50 / 375) * Width,
    borderRadius: (39 / 375) * Width,
    backgroundColor: '#7B46E466'
  },
  disabledlargethintext: {
    fontSize: (16 / 375) * Width,
    color: '#FFFFFF',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.09 / 375) * Width,
    lineHeight: (18 / 375) * Width
  },
  outlinelargethinbutton: {
    width: (325 / 375) * Width,
    height: (50 / 375) * Width,
    borderRadius: (39 / 375) * Width,
    borderWidth: (1 / 375) * Width,
    borderColor: '#7B46E4',
    backgroundColor: '#FFFFFF'
  },
  outlinelargethintext: {
    fontSize: (16 / 375) * Width,
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.09 / 375) * Width,
    lineHeight: (18 / 375) * Width
  },
  otherlargethinbutton: {
    width: (325 / 375) * Width,
    height: (50 / 375) * Width,
    borderRadius: (39 / 375) * Width,
    backgroundColor: '#8F8FAF'
  },
  otherlargethintext: {
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
