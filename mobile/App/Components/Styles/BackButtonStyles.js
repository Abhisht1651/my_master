import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes'

export default StyleSheet.create({
  button: {
    marginHorizontal: Metrics.section,
    marginTop: Metrics.baseMargin
  },
  upper: {
    borderColor: '#1F1F60',
    width: 15,
    height: 0,
    borderWidth: 2,
    marginTop: 12,
    borderRadius: 2,
    transform: [{ rotate: '-45deg' }]
  },
  mid: {
    borderColor: '#1F1F60',
    width: 30,
    height: 0,
    borderWidth: 2,
    marginTop: 0,
    marginLeft: 2,
    borderRadius: 2
  },
  down: {
    borderColor: '#1F1F60',
    width: 15,
    height: 0,
    borderWidth: 2,
    marginTop: 0,
    borderRadius: 2,
    transform: [{ rotate: '45deg' }]
  }
})
