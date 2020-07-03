// @flow
// import React, { useState } from 'react'
import React, { useState, useEffect, useRef } from 'react'

import { View, Text, Image, TouchableOpacity, ImageProps } from 'react-native'
import PropTypes from 'prop-types'
import {getStorylineDetails,getRelatedStorylines,getMultimediaDetails,deleteStorylineFollower,
  addStorylineFollower,updateStorylineFollowers, getrelatedStorylineEvents,getEventDetails} from '../Containers/StoryLine/my_queries';
import {withApollo} from 'react-apollo';
import Video from 'react-native-video'


// Styles
import styles from './Styles/StoryLineShortCardDefaultStyle'
import styles1 from '../Containers/Styles/StoryLine/HomeStyle'
import images from '../Themes/Images'

// Components
import { X4SButton } from './Buttons/X4SButton'
import { DefaultButton } from './Buttons/DefaultButton'
import moment from 'moment'


// type Props = {
//   border: boolean,
//   reach: number,
//   heading: string,
//   storyTitle: string,
//   friendsFollowing: string,
//   updatedTime: string,
//   following: boolean,
//   trending: boolean,
//   storyImage: ImageProps,
//   onPressFollow: PropTypes.func,
//   followDisplay: boolean,
//   followerDisplay: boolean
// }

const storyLineShortCardDefault = (props) => {
  const  user_id = "5081a186-6c47-48fa-aaff-dbd5f45ee242"
  const client=props.client;
  if (!client){
    console.log("CLient not working")
  }

  const { iconStoryLineTrending, iconStoryLineReach, iconPeople ,player} = images
  const{updatedTime,
        following,
        reach,
        trending,
        heading,
        storyTitle,     
        storyImage,
        friendsFollowing,
        followers,
        storyline_id,
        video} = props
  const {followerDisplay,followDisplay,border}={followerDisplay:true,followDisplay:true,border:true}
  const [paused, setPaused] = useState(true)

  
  const onPressFollow=async(followState)=>{await relatedstory(client,storyline_id,user_id,reach,followState)}

    
  const [followState, setFollowState] = useState(following)
  const onPressFollowFunction = () => {

    setFollowState(!followState)
    onPressFollow(!followState)
  }
  // console.log(followState,"hi")
  const relatedstory = async (client,storyline_id,user_id,reach,followState) => {
    // console.log(followers,"hi follower",followState)
    
    if (followState){
      const followers1=followers+1;
      const reach1=reach+1;
      try {
        const { data: datastory, error: errorstory } = await client.mutate({
          mutation: updateStorylineFollowers,
          variables: { storyline_id:storyline_id,followers:followers1,reach:reach1 }
        })
      } catch (errorstory) {
        throw errorstory
      }
      try {
        const { data: dataaddstory, error: erroraddstory } = await client.mutate({
          mutation:addStorylineFollower,
          variables: { storyline:storyline_id,user:user_id }
        })
      } catch (erroraddstory) {
        throw erroraddstory
      }
    }
    else{
      try {
        const { data: datadeletestoryfol, error: errordeletestoryfol } = await client.mutate({
          mutation: deleteStorylineFollower,
          variables: { storyline:storyline_id,user:user_id }
          
        })
      } catch (errordeletestoryfol) {
        throw errordeletestoryfol
      }
      const followers2=followers-1;
      const reach2=reach-1;
      try {
        const { data: datastoryd, error: errorstoryd } = await client.mutate({
          mutation: updateStorylineFollowers,
          variables: { storyline_id:storyline_id,followers:followers2,reach:reach2 }
        })
      } catch (errorstoryd) {
        throw errorstoryd
      }


    }
  }


  // console.log(video,"hi")
  if(!video){
    return (
      <View style={border ? styles.container : styles.containerWithoutBorder}>
        <View style={styles.info}>
          <View style={styles.heading}>
            <View style={styles.headingTextContainer}>
              <Text style={styles.headingText}>{heading}</Text>
              {trending ? <View style={styles.dot} /> : null}
              {trending ? (
                <Image source={iconStoryLineTrending} style={styles.iconStoryLineTrending} />
              ) : null}
              {trending ? <Text style={styles.headingText}>Trending</Text> : null}
            </View>
            <View>
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
          </View>
          <View style={styles.friends}>
            <View style={styles.friendsTextContainer}>
              <Image source={iconStoryLineReach} style={styles.friendsIcon} />
              <Text style={styles.friendsText}> {reach}K Reached</Text>
            </View>
            {followerDisplay ? (
              <View style={styles.friendsTextContainer}>
                <Image source={iconPeople} style={styles.friendsIcon} />
                <Text style={styles.friendsText}> {friendsFollowing} friends following</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.newsContainer}>
            <Text style={styles.newsTitleText}>{storyTitle}</Text>
            <Text style={styles.updateTimeText}>Updated {updatedTime} ago</Text>
          </View>
        </View>
  
        <Image source={{uri:storyImage.toString()}} style={border ? styles.image : styles.imageWithoutBorder} />
      </View>
    )

  }
  if(video){
    return (
      <View style={border ? styles.container : styles.containerWithoutBorder}>
        <View style={styles.info}>
          <View style={styles.heading}>
            <View style={styles.headingTextContainer}>
              <Text style={styles.headingText}>{heading}</Text>
              {trending ? <View style={styles.dot} /> : null}
              {trending ? (
                <Image source={iconStoryLineTrending} style={styles.iconStoryLineTrending} />
              ) : null}
              {trending ? <Text style={styles.headingText}>Trending</Text> : null}
            </View>
            <View>
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
          </View>
          <View style={styles.friends}>
            <View style={styles.friendsTextContainer}>
              <Image source={iconStoryLineReach} style={styles.friendsIcon} />
              <Text style={styles.friendsText}> {reach}K Reached</Text>
            </View>
            {followerDisplay ? (
              <View style={styles.friendsTextContainer}>
                <Image source={iconPeople} style={styles.friendsIcon} />
                <Text style={styles.friendsText}> {friendsFollowing} friends following</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.newsContainer}>
            <Text style={styles.newsTitleText}>{storyTitle}</Text>
            <Text style={styles.updateTimeText}>Updated {updatedTime} ago</Text>
          </View>
        </View>
  
        {/* <Image source={{uri:storyImage.toString()}} style={border ? styles.image : styles.imageWithoutBorder} /> */}
        
        <TouchableOpacity style={styles1.galleryImageContainer} onPress={() => setPaused(!paused)}>
          <Video
            source={{uri:storyImage.toString()}}
            poster="https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loading-screen-featured-image.jpg"
            style={styles1.galleryImage}
            paused={paused}
            resizeMode="cover"
            posterResizeMode="cover"
          />
          {paused ? <Image source={player} style={styles1.player} /> : null}
        </TouchableOpacity>
      </View>
    )
  }

}

// storyLineShortCardDefault.defaultProps = {
//   border: true,
//   reach: 45,
//   heading: 'World',
//   storyTitle: 'UK exit from the European Union',
//   friendsFollowing: '45 friends Following',
//   updatedTime: '2m',
//   following: true,
//   trending: true,
//   storyImage: images.storyImage,
//   onPressFollow: () => {},
//   followDisplay: true,
//   followerDisplay: true
// }

export default withApollo(storyLineShortCardDefault)
