import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1
  },
  margincontainer: {
    marginLeft: (25 / 375) * Width,
    marginRight: (25 / 375) * Width
  },
  flatlist1cont: {
    marginTop: (27 / 768) * Height,
    marginBottom: (27 / 768) * Height
  },
  border: {
    borderBottomColor: '#E6ECED',
    borderBottomWidth: (1 / 375) * Width
  },
  date: {
    fontSize: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    color: '#8F8FAF',
    textAlign: 'center'
  },
  storylinemargin: {
    marginTop: (16 / 768) * Height,
    marginBottom: (16 / 768) * Height
  }
})

export default styles
