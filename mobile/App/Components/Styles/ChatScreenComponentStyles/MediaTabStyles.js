import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1
  },
  image: {
    height: (125 / 375) * Width,
    width: (125 / 375) * Width
  }
})

export default styles
