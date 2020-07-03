// @flow

import React from 'react'
import { View, ScrollView, ImageProps } from 'react-native'

// Styles
import styles from '../Styles/Search/SearchResultsEntitiesStyle'
import images from '../../Themes/Images'

// Components
import Entities from '../../Components/Entities/CardType1'

type Props = {
  data: Array<{
    title: string,
    count: number,
    profileIcons: ImageProps
  }>
}

const SearchResultsEntities = (props: Props) => {
  const { data } = props

  const EntitiesDataElements = data.map((item, index) => {
    const { title, count, profileIcons } = item
    return (
      <View key={index} style={styles.displayItem}>
        <Entities title={title} count={count} profileIcons={profileIcons} />
      </View>
    )
  })

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.displayContainer}>{EntitiesDataElements}</View>
      </ScrollView>
    </View>
  )
}

SearchResultsEntities.defaultProps = {
  data: [
    {
      title: 'India',
      count: 52,
      profileIcons: [images.EntitiesImage0]
    },
    {
      title: 'United States of America',
      count: 52,
      profileIcons: [images.EntitiesImage1]
    },
    {
      title: 'India',
      count: 52,
      profileIcons: [images.EntitiesImage0]
    },
    {
      title: 'United States of America',
      count: 52,
      profileIcons: [images.EntitiesImage1]
    },
    {
      title: 'India',
      count: 52,
      profileIcons: [images.EntitiesImage0]
    },
    {
      title: 'United States of America',
      count: 52,
      profileIcons: [images.EntitiesImage1]
    },
    {
      title: 'India',
      count: 52,
      profileIcons: [images.EntitiesImage0]
    },
    {
      title: 'United States of America',
      count: 52,
      profileIcons: [images.EntitiesImage1]
    }
  ]
}

export default SearchResultsEntities
