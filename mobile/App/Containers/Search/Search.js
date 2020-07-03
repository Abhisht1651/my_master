// @flow

import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainerProps } from '@react-navigation/native'
import SearchSuggestion from './SearchSuggestion'
import SearchResultsNavigation from './SearchResultsNavigation'

// Styles
import styles from '../Styles/Search/SearchStyle'

// Components
import SearchBarSmall from '../../Components/Searchbars/SearchBarSmall'

type Props = NavigationContainerProps & {}

const Search = (props: Props) => {
  const { navigation } = props

  const [displayState, setDisplayState] = useState(false)
  const [result, setResult] = useState(false)
  const [textInput, setTextInput] = useState('')

  const display = (
    <View style={styles.displayContainer}>
      <SearchSuggestion showSuggestion={displayState} textInput={textInput} />
    </View>
  )

  const onSearchHandler = (text) => {
    if (text !== '') {
      setDisplayState(true)
    } else {
      setDisplayState(false)
    }
    setTextInput(text)
  }

  const onSubmitEditing = () => {
    setResult(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <SearchBarSmall onSearchHandler={onSearchHandler} onSubmitEditing={onSubmitEditing} />
        <View style={styles.cancelButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>

      {result ? <SearchResultsNavigation /> : display}
    </View>
  )
}

export default Search
