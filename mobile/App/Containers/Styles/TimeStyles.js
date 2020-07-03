import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    width: Width * 1.5,
    height: Height,
    flex: 1,
    backgroundColor: 'white'
  },
  container1: {
    width: Width,
    height: '100%',
    backgroundColor: '#F7F7F7',
    marginRight: (15 / 375) * Width
  },
  item: {
    marginVertical: 14,
    flexDirection: 'row'
  },
  bubbles: {
    flexWrap: 'wrap',
    maxWidth: (250 / 375) * Width,
    paddingTop: (16 / 375) * Width,
    paddingBottom: (13 / 375) * Width,
    borderRadius: (32 / 375) * Width,
    backgroundColor: 'white'
  },
  text: {
    marginLeft: 15,
    maxWidth: 220,
    marginRight: 15
  }
})

export default styles
