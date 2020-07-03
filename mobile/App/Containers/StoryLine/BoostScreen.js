// @flow

// import React from 'react'
import React, { useState, useEffect, useRef } from 'react'

import { View, ScrollView, Image, Text, TouchableOpacity, ImageProps, Platform } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import {withApollo} from 'react-apollo';
import {getMultimediaDetails,getCommentBoosts,getuser,addFriend,unfriendUser} from './my_queries';

// Styles
import styles from '../Styles/StoryLine/BoostScreenStyle'
import images from '../../Themes/Images'

// Components
import ListOfUsers from '../../Components/ListOfUsers/ListOfUsers'

// type Props = NavigationContainerProps & {
//   boostsData: Array<{
//     name: string,
//     image: ImageProps,
//     buttonText: string,
//     buttonTextAfterPress: string
//   }>
// }

const relatedPolls = (props) => {
  const user_id="f7103ba8-c1e8-4563-8a9c-681480effaf1";
  var [databoost,setboost]=useState([]);
  const client=props.client;
  if (!client){
    console.log("CLient not working")
  }
  const onPressUtil = async ({ user_id1, user_id2 }) => {
    const { data: data1 } = await client.mutate({
      mutation: addFriend,
      variables: { user_id1, user_id2 }
    })
  }
  const onCancelPressUtil = async ({ user_id1, user_id2 }) => {
    const { data: data1 } = await client.mutate({
      mutation: unfriendUser,
      variables: { user_id1, user_id2 }
    })
  }
  

  const boostcontent_id="edfc62bf-3ca6-431f-b714-8dc3cf497f63";
  const displayboost = async (client,boostcontent_id) =>{
    try{
      let source=[];
      const {data: datab, loading: loadingb} = await client.query({query: getCommentBoosts, variables: { boostContent_id: boostcontent_id}});
      // console.log(datab.GetBoostsbyContent)
      // let users=[];
      // for (var i=0;i<datab.GetBoostsbyContent.length;i++){
      //   users[i]=datab.GetBoostsbyContent[i].boostBy
      // }
      let users=[
        'ddc626d5-eece-41e0-9550-cb98a8b8b421',
        '30e45647-b5e9-49d1-9343-606f4a77d2a1',
        '2ce61d17-e5a4-49ca-a367-0dcf7adcccd0',
        '988b9f78-d5b2-4211-b1a1-03c5fc420b55',
        '45bb5f2c-8aa7-42b9-9456-462fd986982f',
        '5663dc15-15bf-45e3-a03b-31ad10870dd1',
        '3bd14712-d7a4-4922-bdfc-7fe06173d05c',
        '8f876efe-a437-4537-913e-5428e84f574c',
        'f7103ba8-c1e8-4563-8a9c-681480effaf1'
      ]
      // console.log(users)
      for (var i=0;i<6;i++){
        let items={}
        const {data: datauser, loading: loadinguser} = await client.query({query: getuser, variables: { user_id: users[i]}});
        const {name,profile_picture}=datauser.GetUserDetails[0]
        const multi_id=profile_picture;
        const {data:datamulti,loading:loadingmulti}= await client.query({query:getMultimediaDetails,variables:{multimedia_id:multi_id}});
        const {url}=datamulti.GetMultimedia; 
        items['name']=name
        items['image']=url
        items['buttonText']= 'Add'
        items['buttonTextAfterPress']= 'Pending'
        items['onPress'] = async () => {
            await onPressUtil({
              user_id1: user_id,
              user_id2: users[i]
            })
          }
        items['onCancelPress']= async () => {
            await onCancelPressUtil({
              user_id1: user_id,
              user_id2: users[i]
            })
          }
        source.push(items)
      }
      // console.log(source)
      setboost(source)           
      }
    catch(e){
      console.log(e)
      }
    }
  useEffect(() => {displayboost(client,boostcontent_id);}, []);

  const { navigation} = props
  const { backIcon } = images
  // console.log(boostsData)


  const storyLineDataElements = databoost.map((item, index) => {
    const { name, image, buttonText, buttonTextAfterPress,onCancelPress,onPress } = item
    return (
      <View key={index} style={styles.previewContainer}>
        <ListOfUsers
          type={2}
          buttonText={buttonText}
          name={name}
          image={{uri:image}}
          buttonTextAfterPress={buttonTextAfterPress}
          onPress={onPress}
          onCancelPress={onCancelPress}
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

// relatedPolls.defaultProps = {
//   boostsData: [
//     {
//       name: 'Amelia Jones',
//       image: images.voterIcon2,
//       buttonText: 'Add',
//       buttonTextAfterPress: 'Added'
//     },
//     {
//       name: 'Amelia Jones',
//       image: images.voterIcon2,
//       buttonText: 'Add',
//       buttonTextAfterPress: 'Added'
//     }
//   ]
// }

export default withApollo(relatedPolls)
