// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import images from '../../Themes/Images'
import Storyline from '../../Components/StoryLineShortCardDefualt'
// Styles
import styles from './ScreenStyles/TrendingStorylineStyles'

type Props = {} & NavigationContainerProps

const TrendingStoryline = ({ navigation }: Props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.topBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.arrow} />
        </TouchableOpacity>
        <Text style={styles.textFont}>Trending Storylines</Text>
      </View>
      <View style={styles.contentBox}>
        <ScrollView>
          <View>
            <View style={styles.topgap} />
            <View style={styles.post}>
              <Storyline />
            </View>
            <View style={styles.gap} />
            <View style={styles.post}>
              <Storyline />
            </View>
            <View style={styles.gap} />
            <View style={styles.post}>
              <Storyline />
            </View>
            <View style={styles.gap} />
            <View style={styles.post}>
              <Storyline />
            </View>
            <View style={styles.gap} />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default TrendingStoryline
