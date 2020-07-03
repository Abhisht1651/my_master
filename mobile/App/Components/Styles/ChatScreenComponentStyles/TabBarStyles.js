import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  contmargin: {
    flexDirection: 'row',
    marginLeft: (75 / 375) * Width,
    marginRight: (73 / 375) * Width
  },
  textcont: {
    marginRight: (27 / 375) * Width,
    borderBottomColor: '#7B46E4'
  },
  text: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: (16 / 375) * Width,
    letterSpacing: (-0.11 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    color: '#22226B'
  }
})

export default styles
