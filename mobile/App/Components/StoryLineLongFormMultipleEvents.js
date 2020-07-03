// @flow
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, ImageBackground, ImageProps } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { widthPercentageToDP as wp } from '../Themes/ScreenMetrics'

// Styles
import styles from './Styles/StoryLineLongFormMultipleEventsStyle'
import images from '../Themes/Images'
import Timeline from './Timeline'

// Components
import { X4SButton } from './Buttons/X4SButton'
import { DefaultButton } from './Buttons/DefaultButton'

type Props = {
  reach: string,
  friendsFollowing: string,
  category: string,
  endStatus: string,
  storyTitle: string,
  updatedTime: string,
  followDisplay: boolean,
  following: boolean,
  trending: boolean,
  active: boolean,
  date: string,
  totalStoryItems: number,
  carouselItems: Array<{
    previewText: string,
    commentText: string,
    storyImage: ImageProps,
    read: boolean,
    onPressCard: PropTypes.func,
    entityItems: Array<{ image: ImageProps, onPressEntity: PropTypes.func }>
  }>,
  voterIcons: Array<ImageProps>,
  onPressVoterIcons: PropTypes.func,
  onPressShare: PropTypes.func,
  onPressReact: PropTypes.func,
  onPressRaven: PropTypes.func,
  onPressFollow: PropTypes.func
}
const StoryLineLongFormMultipleEvents = (props: Props) => {
  const [paginationActive, setPaginationActive] = useState(0)
  const {
    friendsFollowing,
    reach,
    endStatus,
    storyTitle,
    updatedTime,
    category,
    date,
    totalStoryItems,
    carouselItems,
    followDisplay,
    following,
    trending,
    active,
    voterIcons,
    onPressVoterIcons,
    onPressReact,
    onPressRaven,
    onPressShare,
    onPressFollow
  } = props
  const {
    iconStoryLineTrending,
    pollActiveIcon,
    iconStoryLineReach,
    shareIcon,
    reactIcon,
    ravenIcon,
    sourceIcon,
    backIcon,
    iconPeople
  } = images

  const [followState, setFollowState] = useState(following)

  const onPressFollowFunction = () => {
    setFollowState(!followState)
    onPressFollow()
  }

  const commentIconsElement = voterIcons.map((voterIcon, index) => (
    <TouchableOpacity key={index} onPress={onPressVoterIcons}>
      <Image source={voterIcon} style={styles.commentsIcon} />
    </TouchableOpacity>
  ))
  function renderItem({
    item,
    index
  }: {
    item: {
      previewText: string,
      commentText: string,
      storyImage: ImageProps,
      read: boolean,
      onPressCard: PropTypes.func,
      entityItems: Array<{ image: ImageProps, onPressEntity: PropTypes.func }>
    },
    index: number
  }) {
    const { previewText, commentText, storyImage, read, entityItems, onPressCard } = item
    const relatedEntityIconContainer = entityItems.map((entityItem, i) => {
      const { image, onPressEntity } = entityItem
      return (
        <TouchableOpacity key={i} onPress={onPressEntity}>
          <Image source={image} style={styles.relatedEntityIcon} />
        </TouchableOpacity>
      )
    })
    if (read) {
      return (
        <TouchableOpacity key={index} style={styles.previewContainerRead}>
          <Text style={styles.readText}>Read full storyline</Text>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity key={index} style={styles.previewContainer} onPress={onPressCard}>
        <ImageBackground source={storyImage} style={styles.image} imageStyle={styles.imageBorder}>
          <View style={styles.imageItems}>
            {index === paginationActive ? (
              <View style={styles.playButton}>
                <View style={styles.triangle} />
              </View>
            ) : null}
            {index === paginationActive ? (
              <Image source={sourceIcon} style={styles.sourceImage} />
            ) : null}
          </View>
        </ImageBackground>
        <Text style={styles.previewText}>{previewText}</Text>
        <View style={styles.relatedEntityContainer}>
          <Text style={styles.EntityRelatedText}>Related entities</Text>
          <View style={styles.relatedEntityIconContainer}>{relatedEntityIconContainer}</View>
        </View>
        <View style={styles.divider} />
        <View style={styles.commentsContainer}>
          {commentIconsElement}
          <Text style={styles.commentsText}>{commentText}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.headingText}>{category}</Text>
          <View style={styles.dot} />
          <Image source={pollActiveIcon} style={styles.storyLineIconHeading} />
          {active ? <Text style={styles.activeText}>Active</Text> : null}
          {trending ? <View style={styles.dot} /> : null}
          {trending ? (
            <Image source={iconStoryLineTrending} style={styles.storyLineIconHeading} />
          ) : null}
          <View style={styles.endedButton}>
            <Text style={styles.endedButtonText}>{endStatus}</Text>
          </View>
        </View>
        {followDisplay ? (
          <TouchableOpacity onPress={() => onPressFollowFunction()}>
            {followState ? (
              <X4SButton disabled title="Following" onPress={onPressFollow} />
            ) : (
              <TouchableOpacity onPress={() => setFollowState(!followState)}>
                <DefaultButton outline title="Follow" onPress={() => onPressFollowFunction()} />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.friends}>
        <View style={styles.friendsTextContainer}>
          <Image source={iconStoryLineReach} style={styles.friendsIcon} />
          <Text style={styles.friendsText}> {reach}</Text>
        </View>
        <View style={styles.friendsTextContainer}>
          <Image source={iconPeople} style={styles.friendsIcon} />
          <Text style={styles.friendsText}> {friendsFollowing}</Text>
        </View>
      </View>
      <Text style={styles.newsTitleText}>{storyTitle}</Text>
      <Text style={styles.updateTimeText}>Updated {updatedTime} ago</Text>
      <View style={styles.caraouselContainer}>
        <Carousel
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          data={carouselItems}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          sliderWidth={wp('86.67%')}
          itemWidth={wp('77.86%')}
          renderItem={renderItem}
          onSnapToItem={(index) => setPaginationActive(index)}
        />
      </View>
      <Text style={styles.date}>{date}</Text>
      <Timeline len={totalStoryItems} active={paginationActive} />
      <View style={styles.actionIconsContainer}>
        <TouchableOpacity onPress={onPressShare}>
          <Image source={shareIcon} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressRaven}>
          <Image source={ravenIcon} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressReact}>
          <Image source={reactIcon} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
StoryLineLongFormMultipleEvents.defaultProps = {
  reach: '1101K Reached',
  friendsFollowing: '24K Followers',
  category: 'World',
  endStatus: 'Ended',
  storyTitle: 'UK exit from the European Union',
  updatedTime: '2m',
  followDisplay: true,
  following: false,
  trending: true,
  active: false,
  date: 'July 25th,1991',
  totalStoryItems: 8,
  carouselItems: [
    {
      storyImage: images.storyImage,
      previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
      commentText: '34K comments',
      read: false,
      onPressCard: () => {},
      entityItems: [
        { image: images.iconStoryLineRelatedEntity1, onPressEntity: () => {} },
        { image: images.iconStoryLineRelatedEntity2, onPressEntity: () => {} },
        { image: images.iconStoryLineRelatedEntity3, onPressEntity: () => {} },
        { image: images.iconStoryLineRelatedEntity4, onPressEntity: () => {} }
      ]
    },
    {
      storyImage: images.storyImage,
      previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
      commentText: '34K comments',
      read: false,
      onPressCard: () => {},
      entityItems: [
        { image: images.iconStoryLineRelatedEntity1, onPressEntity: () => {} },
        { image: images.iconStoryLineRelatedEntity2, onPressEntity: () => {} },
        { image: images.iconStoryLineRelatedEntity3, onPressEntity: () => {} },
        { image: images.iconStoryLineRelatedEntity4, onPressEntity: () => {} }
      ]
    },
    {
      storyImage: images.storyImage,
      previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
      commentText: '34K comments',
      read: false,
      onPressCard: () => {},
      entityItems: [
        { image: images.iconStoryLineRelatedEntity1, onPressEntity: () => {} },
        { image: images.iconStoryLineRelatedEntity2, onPressEntity: () => {} },
        { image: images.iconStoryLineRelatedEntity3, onPressEntity: () => {} },
        { image: images.iconStoryLineRelatedEntity4, onPressEntity: () => {} }
      ]
    },
    {
      storyImage: null,
      previewText: '',
      commentText: '',
      read: true,
      onPressCard: () => {},
      entityItems: [
        { image: images.iconStoryLineRelatedEntity3, onPressEntity: () => {} },
        { image: images.iconStoryLineRelatedEntity4, onPressEntity: () => {} }
      ]
    }
  ],
  voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
  onPressVoterIcons: () => {},
  onPressReact: () => {},
  onPressRaven: () => {},
  onPressShare: () => {},
  onPressFollow: () => {}
}
export default StoryLineLongFormMultipleEvents
