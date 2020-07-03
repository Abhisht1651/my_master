// @flow

import React from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity, ImageProps, Platform } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

// Styles
import styles from '../Styles/Poll/BoostScreenStyle'
import images from '../../Themes/Images'

// Components
import ListOfUsers from '../../Components/ListOfUsers/ListOfUsers'

type Props = NavigationContainerProps & {
  boostsData: Array<{
    name: string,
    image: ImageProps,
    buttonText: string,
    buttonTextAfterPress: string
  }>
}

const relatedPolls = (props: Props) => {
  const { navigation, boostsData } = props
  const { backIcon } = images

  const storyLineDataElements = boostsData.map((item, index) => {
    const { name, image, buttonText, buttonTextAfterPress } = item
    return (
      <View key={index} style={styles.previewContainer}>
        <ListOfUsers
          type={2}
          buttonText={buttonText}
          name={name}
          image={image}
          buttonTextAfterPress={buttonTextAfterPress}
        />
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
        <Text style={styles.relatedText}>Boosts</Text>
      </View>
      <View style={styles.divider} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContainer}>{storyLineDataElements}</View>
      </ScrollView>
    </View>
  )
}

relatedPolls.defaultProps = {
  boostsData: [
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    },
    {
      name: 'Amelia Jones',
      image: images.voterIcon2,
      buttonText: 'Add',
      buttonTextAfterPress: 'Added'
    }
  ]
}

export default relatedPolls
