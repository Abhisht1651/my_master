import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width
const styles = StyleSheet.create({
  bubbles: {
    height: (145 / 768) * Height,
    width: Width,
    backgroundColor: 'white',
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  },
  margin: {
    backgroundColor: 'transparent',
    marginLeft: (10 / 375) * Width,
    marginRight: (5 / 375) * Width,
    height: (145 / 768) * Height
  },
  margin1: {
    backgroundColor: 'transparent',
    marginLeft: (25 / 375) * Width,
    marginRight: (5 / 375) * Width,
    height: (145 / 768) * Height
  },
  marginTop: {
    top: (17 / 768) * Height,
    height: '100%'
  }
})

export default styles
