// @flow

import React, { useState, useEffect } from 'react'
import { View, TextInput, TouchableOpacity, Platform } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/SearchBarStyles/SearchBarDefaultStyle'
import IconSearch from '../../Images/Icons/icon-search-small.svg'
import IconClose from '../../Images/Icons/icon-close-search.svg'

type Props = {
  placeholder: string,
  onSearchHandler: PropTypes.func,
  onTouchStart: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  value: string
}

const SearchBarDefault = (props: Props) => {
  const { placeholder, onSearchHandler, onTouchStart, onSubmitEditing, value } = props
  const [crossIconHidden, setCrossIconHidden] = useState(true)
  const [valueState, setValueState] = useState(value)

  useEffect(() => {
    onSearchHandler(valueState)
  }, [valueState])

  const changeTextHandler = (text: string) => {
    if (text !== '') {
      setCrossIconHidden(false)
      setValueState(text)
    } else {
      setCrossIconHidden(true)
      setValueState(text)
    }
  }

  const onClearHandler = () => {
    setCrossIconHidden(true)
    setValueState('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchIcon}>
        <IconSearch height="100%" />
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#8F8FAF"
        style={styles.textinput}
        value={valueState}
        selectionColor="#7B46E4"
        spellCheck={false}
        autoCorrect={false}
        keyboardType={Platform.OS === 'ios' ? 'default' : 'visible-password'}
        onChangeText={changeTextHandler}
        onTouchStart={onTouchStart}
        onSubmitEditing={onSubmitEditing}
      />
      {!crossIconHidden && (
        <TouchableOpacity style={styles.clear} onPress={onClearHandler}>
          <IconClose height="100%" />
        </TouchableOpacity>
      )}
    </View>
  )
}

SearchBarDefault.defaultProps = {
  placeholder: 'Search',
  value: '',
  onSearchHandler: () => {},
  onTouchStart: () => {},
  onSubmitEditing: () => {}
}

export default SearchBarDefault
