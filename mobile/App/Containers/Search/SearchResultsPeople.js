// @flow

import React from 'react'
import { View, ScrollView, ImageProps } from 'react-native'

// Styles
import styles from '../Styles/Search/SearchResultsPeopleStyle'
import images from '../../Themes/Images'

// Components
import ListOfUsers from '../../Components/ListOfUsers/ListOfUsers'

type Props = {
  data: Array<{
    name: string,
    image: ImageProps,
    optionalText: string,
    buttonText: string,
    buttonTextAfterPress: string
  }>
}

const SearchResultsPeople = (props: Props) => {
  const { data } = props

  const PeopleDataElements = data.map((item, index) => {
    const { name, image, optionalText, buttonText, buttonTextAfterPress } = item
    return (
      <View key={index} style={styles.displayItem}>
        <ListOfUsers
          type={1}
          buttonText={buttonText}
          optionalText={optionalText}
          name={name}
          image={image}
          buttonTextAfterPress={buttonTextAfterPress}
        />
      </View>
    )
  })

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.displayContainer}>{PeopleDataElements}</View>
      </ScrollView>
    </View>
  )
}

SearchResultsPeople.defaultProps = {
  data: [
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      optionalText: 'Following 54 Storylines',
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    }
  ]
}

export default SearchResultsPeople
