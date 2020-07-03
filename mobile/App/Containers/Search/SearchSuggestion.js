// @flow

import React, { useState } from 'react'
import { View, Text, Image, ImageProps } from 'react-native'

// Styles
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../Styles/Search/SearchSuggestionStyle'
import images from '../../Themes/Images'

type Props = {
  textInput: string,
  lastSearch: Array<string>,
  searchSuggestion: Array<{ category: string, query: string, image: ImageProps }>,
  showSuggestion: boolean
}

const SearchSuggestion = (props: Props) => {
  const { textInput, lastSearch, searchSuggestion, showSuggestion } = props
  const { iconClose } = images

  const [lastSearchState, setLastSearchState] = useState(lastSearch)

  const deleteLastSearch = (item) => {
    const updatedLastSearchState = []
    for (let i = 0; i < lastSearchState.length; i += 1) {
      if (lastSearchState[i] !== item) {
        updatedLastSearchState.push(lastSearchState[i])
      }
    }
    setLastSearchState(updatedLastSearchState)
  }

  const lastSearchElements = lastSearchState.map((item, index) => {
    return (
      <View key={index} style={styles.displayItemContainer}>
        <Text style={styles.latestSearchText}>{item}</Text>
        <TouchableOpacity onPress={() => deleteLastSearch(item)}>
          <Image source={iconClose} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
    )
  })

  const searchSuggestionElements = searchSuggestion.map((item, index) => {
    const { category, query, image } = item
    let queryMatched = ''
    let queryNotMatched = ''
    for (let i = 0; i < query.length; i += 1) {
      if (i < textInput.length && textInput[i] === query[i] && queryNotMatched === '') {
        queryMatched += query[i]
      } else {
        queryNotMatched += query[i]
      }
    }
    let imageStyle = styles.searchSuggestionImage
    if (category === 'User') {
      imageStyle = styles.searchSuggestionImageUser
    }
    if (category === 'StoryLine' || category === 'Poll') {
      imageStyle = styles.searchSuggestionImagePoll
    }
    return (
      <View key={index} style={styles.searchSuggestionContainer}>
        <View style={styles.searchSuggestionImageContainer}>
          <Image source={image} style={imageStyle} />
        </View>
        <View style={styles.searchSuggestionTextContainer}>
          <Text style={styles.searchSuggestionCategoryText}>{category}</Text>
          <View style={styles.searchSuggestionQueryContainer}>
            <Text style={styles.searchSuggestionQueryMatchedText}>{queryMatched}</Text>
            <Text style={styles.searchSuggestionQueryUnmatchedText}>{queryNotMatched}</Text>
          </View>
        </View>
      </View>
    )
  })
  return (
    <View>
      {showSuggestion ? (
        <Text style={styles.headingText}>Suggestions</Text>
      ) : (
        <Text style={styles.headingText}>Last Searches</Text>
      )}
      {showSuggestion ? (
        <View style={styles.display}>{searchSuggestionElements}</View>
      ) : (
        <View style={styles.display}>{lastSearchElements}</View>
      )}
    </View>
  )
}

SearchSuggestion.defaultProps = {
  textInput: 'Donald T',
  lastSearch: ['Amazonas fire', 'Queen Elizabeth', 'Nicolas Maduro'],
  searchSuggestion: [
    { category: 'Entitiy', query: 'Donald Trump', image: images.EntitiesImage0 },
    { category: 'StoryLine', query: 'Donald Trump', image: images.allEventsSelected },
    { category: 'Poll', query: 'Donald Trump', image: images.iconPollDark },
    { category: 'User', query: 'Donald Trump', image: images.voterIcon3 }
  ],
  showSuggestion: false
}

export default SearchSuggestion
