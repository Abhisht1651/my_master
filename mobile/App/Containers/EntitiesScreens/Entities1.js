// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import images from '../../Themes/Images'
import Bubbles2 from '../../Components/Icons/Bubbles2'
import ThumbsLarge from '../../Components/Entities/ThumbsLarge'
import Profile from '../../Components/Entities/Profile'
import { X4SButton } from '../../Components/Buttons/X4SButton'

// Styles
import styles from './ScreenStyles/Entities1Styles'

type Props = {
  title: string,
  about: string,
  count: number,
  details: string
} & NavigationContainerProps

const Entities1 = ({ title, about, count, details, navigation }: Props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.topBox}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={images.arrow} />
        </TouchableOpacity>
        <Bubbles2 />
      </View>

      <View style={styles.contentBox}>
        <View style={styles.smallContentBox}>
          <View style={styles.profilepicBox}>
            <Profile profileIcons={[images.EntitiesImage11]} />
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.profileTitleFont}>{title}</Text>
            <Text style={styles.profileAboutFont}>{about}</Text>
          </View>
          <View style={styles.followContentBox}>
            <X4SButton outline title="Follow" />
            <Text style={styles.followDetails}>{`${count}K Following`}</Text>
          </View>
          <View style={styles.profileDetailsBox}>
            <Text style={styles.detailTitleFont}>Details</Text>
            <Text style={styles.detailsFont}>{details}</Text>
          </View>
        </View>
      </View>

      <View style={styles.footerBox}>
        <View style={styles.footerBox1}>
          <View style={styles.textBox}>
            <Text style={styles.textFont1}>Similar Entities</Text>
            <Text style={styles.textFont2}>View All</Text>
          </View>
        </View>
        <View style={styles.footerBox2}>
          <ScrollView horizontal>
            <View style={styles.box2}>
              <ThumbsLarge title="India" profileIcons={[images.EntitiesImage0]} />
            </View>
            <View style={styles.box}>
              <ThumbsLarge title="USA" profileIcons={[images.EntitiesImage3]} />
            </View>
            <View style={styles.box} profileIcons={[images.EntitiesImage4]}>
              <ThumbsLarge title="UNICEF" profileIcons={[images.EntitiesImage4]} />
            </View>
            <View style={styles.box}>
              <ThumbsLarge title="European" profileIcons={[images.EntitiesImage6]} />
            </View>
            <View style={styles.box}>
              <ThumbsLarge title="Europe" profileIcons={[images.EntitiesImage5]} />
            </View>
            <View style={styles.box}>
              <ThumbsLarge />
            </View>
            <View style={styles.box}>
              <ThumbsLarge />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

Entities1.defaultProps = {
  title: 'Donald Trump',
  about: 'President of the USA',
  count: 54,
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
}

export default Entities1
