import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width

const common = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    paddingLeft: (27 / 375) * Width
  },
  flexRowBet: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  line: {
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  }
})

export default common
