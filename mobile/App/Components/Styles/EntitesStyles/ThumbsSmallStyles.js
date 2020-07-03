import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  cardBox: {
    backgroundColor: 'transparent',
    width: (20 / 375) * Width,
    height: (20 / 768) * Height,
    alignItems: 'center',
    borderRadius: (5 / 375) * Width
  },
  profileIconBox: {
    width: (20 / 375) * Width,
    height: (20 / 375) * Width,
    borderRadius: (5 / 375) * Width
  },
  profileIcon: {
    width: (20 / 375) * Width,
    height: (20 / 375) * Width,
    borderRadius: (5 / 375) * Width
  }
})
