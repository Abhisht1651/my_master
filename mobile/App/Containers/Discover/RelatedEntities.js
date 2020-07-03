// @flow

import React from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity, Platform, ImageProps } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

// Styles
import styles from '../Styles/Discover/RelatedEntitiesStyle'
import images from '../../Themes/Images'

// Components
import Entities from '../../Components/Entities/CardType1'

type Props = NavigationContainerProps & {
  headerTitle: string,
  Data: Array<{
    title: string,
    count: number,
    profileIcons: ImageProps
  }>
}

const relatedEntities = (props: Props) => {
  const { navigation, headerTitle, Data } = props
  const { backIcon } = images

  const EntitiesDataElements = Data.map((item, index) => {
    const { title, count, profileIcons } = item
    return (
      <View key={index} style={styles.previewContainer}>
        <Entities title={title} count={count} profileIcons={profileIcons} />
      </View>
    )
  })
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? <View style={styles.topCover} /> : null}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.relatedText}>{headerTitle}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContainer}>{EntitiesDataElements}</View>
      </ScrollView>
    </View>
  )
}

relatedEntities.defaultProps = {
  headerTitle: 'Related Entities',
  Data: [
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

export default relatedEntities
