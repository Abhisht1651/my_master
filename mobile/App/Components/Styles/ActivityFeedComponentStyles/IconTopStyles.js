import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    width: (19 / 375) * Width,
    height: (19 / 375) * Width,
    borderRadius: (5 / 375) * Width,
    borderWidth: 1,
    borderColor: '#E6ECED',
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: (18 / 375) * Width,
    top: (18 / 375) * Width
  },
  imagetop: {
    height: (11 / 375) * Width,
    width: (13 / 375) * Width
  }
})

export default styles
