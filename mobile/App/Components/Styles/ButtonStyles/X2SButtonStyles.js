import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  outlinex2sbutton: {
    width: (125 / 375) * Width,
    height: (30 / 375) * Width,
    borderRadius: (16 / 375) * Width,
    borderWidth: (1 / 375) * Width,
    borderColor: '#7B46E4',
    backgroundColor: '#FFFFFF'
  },
  outlinex2stext: {
    fontSize: (14 / 375) * Width,
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width
  },
  disabledx2sbutton: {
    width: (125 / 375) * Width,
    height: (30 / 375) * Width,
    borderRadius: (16 / 375) * Width,
    borderWidth: (1 / 375) * Width,
    borderColor: '#DCDCE9',
    backgroundColor: '#FFFFFF'
  },
  disabledx2stext: {
    fontSize: (14 / 375) * Width,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width
  },
  floatx2sbutton: {
    elevation: 5,
    width: (125 / 375) * Width,
    height: (30 / 375) * Width,
    borderRadius: (19 / 375) * Width,
    backgroundColor: '#FFFFFF'
  },
  floatx2stext: {
    fontSize: (14 / 375) * Width,
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width
  },
  x2sbutton: {
    width: (125 / 375) * Width,
    height: (30 / 375) * Width,
    borderRadius: (16 / 375) * Width,
    backgroundColor: '#7B46E4'
  },
  x2stext: {
    fontSize: (14 / 375) * Width,
    color: '#FFFFFF',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
