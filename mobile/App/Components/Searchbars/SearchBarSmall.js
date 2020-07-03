// @flow
import React, { useState, useEffect } from 'react'
import { View, TextInput, TouchableOpacity, Platform } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/SearchBarStyles/SearchBarSmallStyle'
import IconSearch from '../../Images/Icons/icon-search-small.svg'
import IconClose from '../../Images/Icons/icon-close-search.svg'

type Props = {
  placeholder: string,
  onSearchHandler: PropTypes.func,
  onTouchStart: PropTypes.func,
  onSubmitEditing: PropTypes.func
}

const SearchBarSmall = (props: Props) => {
  const { placeholder, onSearchHandler, onTouchStart, onSubmitEditing } = props
  const [crossIconHidden, setCrossIconHidden] = useState(true)
  const [value, setValue] = useState('')

  useEffect(() => {
    onSearchHandler(value)
  }, [value])

  const changeTextHandler = (text: string) => {
    if (text !== '') {
      setCrossIconHidden(false)
      setValue(text)
    } else {
      setCrossIconHidden(true)
      setValue(text)
    }
  }

  const onClearHandler = () => {
    setCrossIconHidden(true)
    setValue('')
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
        value={value}
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

SearchBarSmall.defaultProps = {
  placeholder: 'Search',
  onSearchHandler: () => {},
  onTouchStart: () => {},
  onSubmitEditing: () => {}
}
export default SearchBarSmall
