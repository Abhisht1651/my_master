// @flow

// import React from 'react'
import React, { useState, useEffect, useRef } from 'react'
import {withApollo} from 'react-apollo';
import {getEntityDetails,getRelatedEntities,getMultimediaDetails,AddEntityFollower,deleteEntityFollower,updateEntityFollowers,GetEntityFollower} from './my_queries';

import { View, ScrollView, Image, Text, TouchableOpacity, Platform, ImageProps } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

// Styles

import styles from '../Styles/StoryLine/RelatedEntitiesStyle'
import images from '../../Themes/Images'

// Components
import Entities from '../../Components/Entities/CardType1'

// type Props = NavigationContainerProps & {
//   Data: Array<{
//     title: string,
//     count: number,
//     profileIcons: ImageProps
//   }>
// }

const relatedEntities = (props) => {
  const user_id="5081a186-6c47-48fa-aaff-dbd5f45ee242";
  var [relatedEntitiesData1,setFeed]=useState([]);
  // var [url,seturl]=useState([]);
  const client=props.client;
  if (!client){
    console.log("CLient not working")
  }
  const onPressFollowUtil = async ({ followstate, entity_id, followers }) => {
    if (followstate) {
      followers +=1
      const { data: data1 } = await client.mutate({
        mutation: AddEntityFollower,
        variables: { entity_id, user_id }
      })
      const { data: data2 } = await client.mutate({
        mutation: updateEntityFollowers,
        variables: { entity_id: `'${entity_id}'`, followers }
      })
    } else {
      followers -= 1
      const { data: data1 } = await client.mutate({
        mutation: deleteEntityFollower,
        variables: { entity_id, user_id }
      })
      const { data: data2 } = await client.mutate({
        mutation: updateEntityFollowers,
        variables: { entity_id: `'${entity_id}'`, followers }
      })
    }
  }
  
  // const { navigation, storyLineData } = props
  const { backIcon } = images
  
  const displayrelatedentity = async (client) =>{
    try{
      let source=[];
      const entity_id_arr = [
        'ff3b2a22-8858-428e-8270-98f31ae4acdc',
        '96a4ae77-753c-4cce-9a24-37050a0cf77f',
        'e75d2349-7ff4-4a8f-aa54-1fa16a5a5082',
        'ec0dfbbd-466d-411e-8923-8fcd5c6824cd',
        '4caed58a-0fe6-4d75-90b4-dffe6bc395a7'
      ]
      for(var i=0;i<entity_id_arr.length;i++)
      {
          let item={}
          const entity_id=entity_id_arr[i];
          // const {data: datarelatedentity, loading: loadingrelatedentity} = await client.query({query: getRelatedEntities, variables: {entity_id:entity_id1}});
          // const {entity_id}=datarelatedentity.GetRelatedStorylinesToEntity[0];
          // console.log(entity_id)
          const {data: dataentity, loading: loadingentity} = await client.query({query: getEntityDetails, variables: {entity_id:entity_id}});
          const {followers,image,name}=dataentity.GetEntity;
          const multi_id=image
          const {data:datamulti,loading:loadingmulti}= await client.query({query:getMultimediaDetails,variables:{multimedia_id:multi_id}});
          const {url}=datamulti.GetMultimedia;
          const { data: dataEntityFollower, loading:lF, error:eF } = await client.query({
            query: GetEntityFollower,
            variables: { entity_id,user_id }
          })
          const is_following=dataEntityFollower.GetEntityFollower.length>0
          item["title"]=name;
          item['count']=followers;
          item['profileIcons']=[url];
          item['onPressFollow']= async (followstate) => { await onPressFollowUtil({ followstate, entity_id, followers }) }
          item['is_following']=is_following
          source[i]=item
      }
      setFeed(source);
      }
    catch(e){
      console.log(e)
      }
    }
  useEffect(() => {displayrelatedentity(client);}, []);

  const { navigation, Data } = props
  // const { backIcon } = images

  const EntitiesDataElements = relatedEntitiesData1.map((item, index) => {
    const { title, count, profileIcons,onPressFollow,is_following } = item
    return (
      <View key={index} style={styles.previewContainer}>
        <Entities title={title} count={count} profileIcons={profileIcons} onPressFollow={onPressFollow} is_following={is_following} />
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
        <Text style={styles.relatedText}>Related Entities</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContainer}>{EntitiesDataElements}</View>
      </ScrollView>
    </View>
  )
}

// relatedEntities.defaultProps = {
//   Data: [
//     {
//       title: 'India',
//       count: 52,
//       profileIcons: [images.EntitiesImage0]
//     },
//     {
//       title: 'United States of America',
//       count: 52,
//       profileIcons: [images.EntitiesImage1]
//     },
//     {
//       title: 'India',
//       count: 52,
//       profileIcons: [images.EntitiesImage0]
//     },
//     {
//       title: 'United States of America',
//       count: 52,
//       profileIcons: [images.EntitiesImage1]
//     },
//     {
//       title: 'India',
//       count: 52,
//       profileIcons: [images.EntitiesImage0]
//     },
//     {
//       title: 'United States of America',
//       count: 52,
//       profileIcons: [images.EntitiesImage1]
//     },
//     {
//       title: 'India',
//       count: 52,
//       profileIcons: [images.EntitiesImage0]
//     },
//     {
//       title: 'United States of America',
//       count: 52,
//       profileIcons: [images.EntitiesImage1]
//     }
//   ]
// }

export default withApollo(relatedEntities)
