import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  screen: {
    height: Height,
    width: Width,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  }
})
