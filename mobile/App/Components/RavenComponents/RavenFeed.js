// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from '../Styles/RavenComponentStyles/RavenFeedStyles'
import { Images } from '../../Themes'
import Storyline from '../StoryLineShortCardDefualt'

const Width = Dimensions.get('window').width

type Props = {
  images: Array<Image>,
  friendcount: number,
  friendcount: number,
  sent: Boolean,
  sentimages: Array<Image>,
  ravensentperson: String,
  ravenfriends: PropTypes.func,
  sendmorefriends: PropTypes.func,
  storylineitem: PropTypes.Array,
  ravenimage: Image
} & NavigationContainerProps

const RavenFeed = (props: Props) => {
  const {
    images,
    friendcount,
    sent,
    sentimages,
    ravensentperson,
    ravenfriends,
    sendmorefriends,
    storylineitem,
    ravenimage
  } = props
  const [value, setvalue] = useState(true)
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableWithoutFeedback onPress={ravenfriends}>
          <View style={styles.headercontainer}>
            {images && images.length >= 1 && (
              <Image source={images[0]} style={[styles.image, { left: (16 / 375) * Width }]} />
            )}
            {images && images.length >= 2 && (
              <Image
                source={images[1]}
                style={[styles.image, { left: (16 / 375) * Width + (20 / 375) * Width }]}
              />
            )}
            {images && images.length >= 3 && (
              <Image
                source={images[2]}
                style={[styles.image, { left: (16 / 375) * Width + (40 / 375) * Width }]}
              />
            )}
            {ravenimage && <Image source={ravenimage} style={styles.icon} />}
            <View style={styles.sentravencont}>
              <Text
                style={[
                  styles.sentraventext,
                  {
                    left: images
                      ? (images.length - 1) * (22 / 375) * Width +
                        (28 / 375) * Width +
                        (20 / 375) * Width
                      : (28 / 375) * Width + (20 / 375) * Width
                  }
                ]}>
                {sent ? <Text>You received a raven from </Text> : <Text>You sent a raven to </Text>}
                <Text style={styles.underline}>{friendcount} friends</Text>
              </Text>
            </View>
            <View style={styles.right}>
              <Image source={Images.right} style={styles.righticon} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.container2}>
        <Storyline
          reach={storylineitem.reach}
          heading={storylineitem.heading}
          storyTitle={storylineitem.storyTitle}
          friendsFollowing={storylineitem.friendsFollowing}
          updatedTime={storylineitem.updatedTime}
          following={storylineitem.following}
          trending={storylineitem.trending}
          storyImage={storylineitem.storyImage}
          border={false}
        />
      </View>
      <View style={styles.container3}>
        <View style={styles.sendmorecont}>
          <TouchableWithoutFeedback onPress={sendmorefriends}>
            <Text style={styles.sendmoretext}>Send to more friends</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      {sent && value && (
        <View style={styles.overcontainer}>
          <Image source={Images.overimage} style={styles.imagecontainer} />
          <TouchableOpacity onPress={() => setvalue(false)}>
            <View style={styles.blue}>
              <Image source={Images.lightfill} style={styles.lightfill} />
              <View style={styles.topcontainer}>
                <View style={styles.headercontainer}>
                  {sentimages && sentimages.length >= 1 && (
                    <Image
                      source={sentimages[0]}
                      style={[styles.image, { left: (16 / 375) * Width }]}
                    />
                  )}
                  {sentimages && sentimages.length >= 2 && (
                    <Image
                      source={sentimages[1]}
                      style={[styles.image, { left: (16 / 375) * Width + (20 / 375) * Width }]}
                    />
                  )}
                  {sentimages && sentimages.length >= 3 && (
                    <Image
                      source={sentimages[2]}
                      style={[styles.image, { left: (16 / 375) * Width + (40 / 375) * Width }]}
                    />
                  )}
                  <View style={styles.sentravencont}>
                    <Text
                      style={[
                        styles.overraventext,
                        {
                          left: sentimages
                            ? (sentimages.length - 1) * (22 / 375) * Width +
                              (28 / 375) * Width +
                              (20 / 375) * Width
                            : (28 / 375) * Width + (20 / 375) * Width
                        }
                      ]}>
                      {ravensentperson} sent you a Raven!
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default RavenFeed
