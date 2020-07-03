import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  active: {
    marginTop: 10,
    marginBottom: 10,
    height: (75 / 768) * Height,
    width: '100%'
  }
})

export default styles
