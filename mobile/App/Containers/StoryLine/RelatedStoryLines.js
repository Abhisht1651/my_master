// @flow

// import React from 'react'
import React, { useState, useEffect, useRef } from 'react'

import { View, ScrollView, Image, Text, TouchableOpacity, Platform } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import StoryLineShortCard from '../../Components/StoryLineShortCardDefualt'
import {withApollo} from 'react-apollo';
import {getStorylineDetails,getuserfollow,
  getRelatedStorylines,getMultimediaDetails,getrelatedStorylineEvents, getStorylineEvents,getEventDetails} from './my_queries';


// Styles
import styles from '../Styles/StoryLine/RelatedStoryLinesStyle'
import images from '../../Themes/Images'
import moment from 'moment'


// type Props = NavigationContainerProps & {
//   storyLineData: Array<{
//     reach: number,
//     heading: string,
//     storyTitle: string,
//     friendsFollowing: number,
//     updatedTime: number,
//     following: boolean,
//     trending: boolean
//   }>
// }

const relatedStoryLine = (props) => {
  var [datarelatedStoryLine,setFeed]=useState([]);
  var [url,seturl]=useState([]);

  const client=props.client;
  if (!client){
    console.log("CLient not working")
  }
  const { navigation, storyLineData } = props
  const { backIcon } = images
  const storyline_id="1a802963-70f3-4971-bf7c-7b2cb411bde1";


  const timeDiffCal = async (startTime, endTime) => {
    const date_then = moment(startTime).format('YYYY-MM-DD hh:mm:ss')
    const date_now = moment(endTime).format('YYYY-MM-DD hh:mm:ss')
    const diff = moment.duration(moment(date_now).diff(moment(date_then)))
    const days = parseInt(diff.asDays(), 10)
    let hours = parseInt(diff.asHours(), 10)
    hours -= days * 24
    let minutes = parseInt(diff.asMinutes(), 10)
    minutes -= days * 24 * 60 + hours * 60
    let updatedTime
    if (days === 0) {
      if (hours === 0) {
        updatedTime = `${minutes.toString()} m`
        return updatedTime
      }
      updatedTime = `${hours.toString()} h`
      return updatedTime
    }
    if (days > 31) {
      const months = Math.floor(days / 31)
      updatedTime = `${months.toString()} month`
      return updatedTime
    }
    updatedTime = `${days.toString()} days`
    return updatedTime
  }
  const displayrelatedStoryline = async (client,storyline_id) =>{
    const user_id="5081a186-6c47-48fa-aaff-dbd5f45ee242";

    try{
      let source=[];
      const {data: dataStoryline, loading: loadingStoryline} = await client.query({query: getRelatedStorylines, variables: {storyline_id1:storyline_id}});
      // console.log(dataStoryline.getStorylineStoryline)
      // let story_id=[]
      // for (var i=0;i<dataStoryline.getStorylineStoryline.length;i++){
      //   story_id[i]=dataStoryline.getStorylineStoryline[i].storyline_id2
      // }
      let story_id=['629e108e-672c-426a-9731-7039e72de685','d6fa63d6-0cc1-434f-9800-83098a54baa1','238a90bf-5db2-4072-8af7-8b101d4873d5','1a802963-70f3-4971-bf7c-7b2cb411bde1',
    'fa9ebbad-84be-4d61-b861-d30393267fcd','9972bbda-7de3-4cfb-b329-4034c5be6439','913ded1c-89f3-4892-a559-0eba6e0d0eb8','e0b6b10c-255a-49b3-b75c-c35c5066d721','e33be0f3-f837-466d-b95c-63211aa69cb0','939780ee-2351-471f-a2dc-8b4469e4c86e']

      // console.log(story_id)

      // const {storyline_id2,rank}=dataStoryline.getStorylineStoryline[0];
      for (var i=0;i<story_id.length;i++){
        let item={}
        
        const {data: dataRelatedStoryline, loading: loadingRelatedStoryline} = await client.query({query: getStorylineDetails, variables: {storyline_id:story_id[i]}});
        // console.log(dataRelatedStoryline)
        const {data: dataRelatedStory, loading: loadingRelatedStory} = await client.query({query: getrelatedStorylineEvents, variables: {storyline_id:story_id[i]}});
        const event_i=dataRelatedStory.GetStorylineEvents[0].event
        const {data: dataevents, loading: loadingevents} = await client.query({query: getEventDetails, variables: {event_id:event_i}});
        const multi_id=dataevents.GetEvent.image
        const {data:datamulti,loading:loadingmulti}= await client.query({query:getMultimediaDetails,variables:{multimedia_id:multi_id}});
        const {url}=datamulti.GetMultimedia;
        // console.log(url)
        const { topic, category,  last_updated,followers, is_trending } = dataRelatedStoryline.GetStoryline
        const {data:datafollow,loading:loadingfollow}= await client.query({query:getuserfollow,variables:{user:user_id}});
        // console.log(datafollow.GetUserStorylines)
        var is_following=false
        for (var j=0;j<datafollow.GetUserStorylines.length;j++){
          if (datafollow.GetUserStorylines[j].storyline==story_id[i]){
            is_following=true
          }
        }
        item['reach']=45
        item["topic"]=topic
        item["category"]=category
        item["last_updated"]=await timeDiffCal(last_updated,new Date().toISOString())
        // console.log(item['last_updated'])
        item["followers"]=followers
        item['is_trending']=is_trending
        item['following']=is_following
        item['friendsFollowing']=followers
        item['storyline_id']=story_id[i]
        item['image']=url
        item['video']=true
        source[i]=item
      }      
      setFeed(source);
      // seturl(url);
      }
    catch(e){
      console.log(e)
      }
    }
  useEffect(() => {displayrelatedStoryline(client,storyline_id);}, []);

  
  const storyLineDataElements = datarelatedStoryLine.map((item, index) => {
    const { topic, category,  last_updated, followers,image, is_trending,reach,following,friendsFollowing,storyline_id,video } = item
    // console.log(video)
    return (
      <View key={index} style={styles.previewContainer}>
        <StoryLineShortCard
          reach={reach}
          heading={category}
          storyTitle={topic}
          friendsFollowing={friendsFollowing}
          updatedTime={last_updated}
          following={following}
          trending={is_trending}
          storyImage={image}
          storyline_id={storyline_id}
          followers={followers}
          video={video}
          // is_following={is_following}
        />
      </View>
    )
  })
  return (
    <View style={styles.container}>
      <View style={styles.topCover} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.relatedText}>Related StoryLines</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContainer}>{storyLineDataElements}</View>
      </ScrollView>
    </View>
  )
}
// relatedStoryLine.defaultProps = {
//   storyLineData: [
//     {
//       reach: 45,
//       heading: 'World',
//       storyTitle: 'UK exit from the European Union',
//       friendsFollowing: '45 friends Following',
//       updatedTime: '2m',
//       following: true,
//       trending: true
//     },
//     {
//       reach: 45,
//       heading: 'World',
//       storyTitle: 'UK exit from the European Union',
//       friendsFollowing: '45 friends Following',
//       updatedTime: '2m',
//       following: true,
//       trending: true
//     },
//     {
//       reach: 45,
//       heading: 'World',
//       storyTitle: 'UK exit from the European Union',
//       friendsFollowing: '45 friends Following',
//       updatedTime: '2m',
//       following: true,
//       trending: true
//     }
//   ]
// }

export default withApollo(relatedStoryLine)
