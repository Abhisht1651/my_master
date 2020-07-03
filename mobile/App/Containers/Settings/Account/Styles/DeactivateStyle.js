import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const styles = StyleSheet.create({
  zidx: {
    zIndex: 1
  },
  container: {
    paddingTop: (213 / 812) * Height,
    paddingLeft: (26 / 375) * Width,
    position: 'absolute'
  },
  box: {
    width: (324 / 375) * Width,
    backgroundColor: 'white',
    borderRadius: (15 / 812) * Height
  },
  close: {
    height: (19 / 812) * Height,
    width: (19 / 812) * Height
  },
  closePos: {
    paddingLeft: (280 / 375) * Width,
    paddingTop: (25 / 812) * Height
  },
  headText: {
    fontFamily: 'BananaGrotesk-Bold',
    color: '#1F1F60',
    fontSize: (20 / 812) * Height,
    lineHeight: (27 / 812) * Height,
    textAlign: 'center'
  },
  contText: {
    fontFamily: 'BananaGrotesk-Light',
    color: '#1F1F60',
    fontSize: (16 / 812) * Height,
    lineHeight: (27 / 812) * Height,
    textAlign: 'center'
  },
  button: {
    width: (275 / 375) * Width,
    backgroundColor: '#7B46E4',
    borderRadius: (38.5 / 812) * Height,
    height: (50 / 812) * Height
  },
  continue: {
    color: 'white',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: (16 / 812) * Height,
    lineHeight: (18 / 812) * Height,
    textAlign: 'center'
  }
})

export default styles
