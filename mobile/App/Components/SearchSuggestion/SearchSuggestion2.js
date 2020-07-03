// @flow

import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, Platform, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../Styles/SearchSuggestionStyles/SearchSuggestion2Style'
import Images from '../../Themes/Images'

type Props = {
  placeholder: string,
  rightEndText: string,
  zIndex: number
}

const SearchSuggestion2 = (props: Props) => {
  const [value, setValue] = useState(false)
  const [searchItem, setSearchItem] = useState('')

  const { placeholder, rightEndText, zIndex } = props

  const changeTextHandler = (text: string) => {
    let val = false
    if (text !== '') {
      val = true
    }
    setValue(val)
    setSearchItem(text)
  }

  const closeDropDown = () => {
    setValue(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder={placeholder}
          style={styles.inputField}
          selectionColor="#7B46E4"
          keyboardType={Platform.OS === 'ios' ? 'default' : 'visible-password'}
          onChangeText={changeTextHandler}
          onBlur={closeDropDown}
        />
        <Text style={styles.optionalText}>{rightEndText}</Text>
      </View>

      {value && (
        <View style={styles.dropDownBody} zIndex={zIndex}>
          <ScrollView>
            <TouchableOpacity>
              <View style={styles.firstItem}>
                <Image source={Images.currentLocationIconSmall} style={styles.locationIcon} />
                <Text style={styles.currentLocationText}>Use Current location</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>{searchItem}</Text>
                <Text style={styles.randomText}>randomtext2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>{searchItem}</Text>
                <Text style={styles.randomText}>randomtext3</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </View>
  )
}

SearchSuggestion2.defaultProps = {
  placeholder: 'Search',
  rightEndText: '(Optional)',
  zIndex: 1
}

export default SearchSuggestion2
