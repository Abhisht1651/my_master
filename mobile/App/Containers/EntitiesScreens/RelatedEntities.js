// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import images from '../../Themes/Images'
// Styles
import styles from './ScreenStyles/RelatedEntitiesStyles'
import CardType1 from '../../Components/Entities/CardType1'

type Props = {} & NavigationContainerProps

const RelatedEntities = ({ navigation }: Props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.topBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.arrow} />
        </TouchableOpacity>
        <Text style={styles.textFont}>Related Entities</Text>
      </View>
      <View style={styles.contentBox}>
        <ScrollView>
          <View style={styles.box1}>
            <CardType1 title="India" profileIcons={[images.EntitiesImage0]} count={52} />
          </View>
          <View style={styles.box0}>
            <CardType1
              title="United States of America"
              profileIcons={[images.EntitiesImage1]}
              count={51}
            />
          </View>
          <View style={styles.box0}>
            <CardType1 />
          </View>
          <View style={styles.box0}>
            <CardType1 title="United States of America" />
          </View>
          <View style={styles.box0}>
            <CardType1 />
          </View>
          <View style={styles.box0}>
            <CardType1 />
          </View>
          <View style={styles.box0}>
            <CardType1 />
          </View>
          <View style={styles.box0}>
            <CardType1 />
          </View>
          <View style={styles.box0}>
            <CardType1 />
          </View>
          <View style={styles.box0}>
            <CardType1 />
          </View>
          <View style={styles.box0}>
            <CardType1 />
          </View>
          <View style={styles.box0}>
            <CardType1 />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default RelatedEntities
