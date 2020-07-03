import React from 'react'
import { View } from 'react-native'
import SearchSuggestion from './SearchSuggestion'
import SearchSuggestion2 from './SearchSuggestion2'
import styles from '../Styles/SearchSuggestionStyles/DisplayScreenStyle'

const DisplayScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <SearchSuggestion />
      </View>
      <View style={styles.box}>
        <SearchSuggestion2 />
      </View>
    </View>
  )
}

export default DisplayScreen
