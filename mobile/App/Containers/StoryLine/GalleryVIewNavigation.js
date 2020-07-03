// @flow

import React, { useState,useEffect } from 'react'
import { View, Text, ImageProps, Image, ScrollView, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Video from 'react-native-video'
import {getEventDetails,getMultimediaDetails} from './my_queries'

// Styles
import styles from '../Styles/StoryLine/GalleryViewNavigationStyle'
import images from '../../Themes/Images'
import {withApollo} from 'react-apollo'
const Tab = createMaterialTopTabNavigator()

type Props = {
  galleryData: Array<{ name: string, file: ImageProps, isVideo: boolean }>
}


const galleryViewNavigation = (props) => {
  const client=props.client;
  if (!client){
    console.log("Client not working")
  }
  var [galleryData1,setgallery]=useState([]);

  let event_arr=[
    '1c7a4e9c-bf37-4827-95f0-73878814b571',
    'c4923283-4f2d-4d7d-b79e-7401e54d0add',
    'abb90002-a2a3-46a4-9cac-eb487a092016',
    '4fbbaeec-3399-47c7-9d35-340004b8509e',
    'fe501b18-2133-4d33-923e-a00125907504'
    ]
    const displaygal = async (client) =>{
      let source3=[]
      for (var i=0;i<event_arr.length;i++){
        const {data: dataevent, loading: loadingevent} = await client.query({query: getEventDetails, variables: {event_id:event_arr[i]}});
        var{headline,event_time,t_update,image, description }=dataevent.GetEvent
        var multi_id=image;
        const {data:datamulti1,loading:loadingmulti1}= await client.query({query:getMultimediaDetails,variables:{multimedia_id:multi_id}});
        var {url,multimedia_type}=datamulti1.GetMultimedia;
        let item3={}
        item3["isVideo"]=multimedia_type=="VIDEO"
        item3['file']=url
        item3['name']=headline
        item3['paused']=true
        source3.push(item3)
      }
      setgallery(source3)
    }
  useEffect(() => {displaygal(client);}, []);
  // console.log(galleryData1)

      
    
  // const { galleryData } = props
  const { player } = images

  // var [paused, setPaused] = useState(true)

  const display = (type) => {
    const displayResult = galleryData1.map((item, index) => {
      const { name, file, isVideo,paused } = item
      if (type === 2 && !isVideo) {
        return null
      }
      if (type === 3 && isVideo) {
        return null
      }
      if (isVideo) {
        return (
          <View key={index} style={styles.previewContainerGallery}>
            <TouchableOpacity
              style={styles.galleryImageContainer}
              onPress={() => (!paused)}>
              <Video
                source={{uri:file}}
                poster="https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loading-screen-featured-image.jpg"
                style={styles.galleryImage}
                paused={paused}
                resizeMode="cover"
                posterResizeMode="cover"
              />
              {paused ? <Image source={player} style={styles.player} /> : null}
            </TouchableOpacity>

            <Text style={styles.galleryText}>{name}</Text>
          </View>
        )
      }
      return (
        <View key={index} style={styles.previewContainerGallery}>
          <View style={styles.galleryImageContainer}>
            <Image source={file} style={styles.galleryImage} />
          </View>

          <Text style={styles.galleryText}>{name}</Text>
        </View>
      )
    })

    return displayResult
  }
  const TabView = (type) => {
    return <ScrollView contentContainerStyle={styles.contentContainer}>{display(type)}</ScrollView>
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: styles.tab,
        style: styles.tabContainer,
        indicatorStyle: styles.indicator,
        labelStyle: styles.label,
        activeTintColor: '#1F1F60',
        inactiveTintColor: '#8F8FAF'
      }}>
      <Tab.Screen name="All" component={() => TabView(1)} />
      <Tab.Screen name="Videos" component={() => TabView(2)} />
      <Tab.Screen name="Images" component={() => TabView(3)} />
    </Tab.Navigator>
  )
}

const videoFile = require('../../Images/broadchurch.mp4')

galleryViewNavigation.defaultProps = {
  galleryData: [
    {
      name: 'Labor conference in London',
      file: videoFile,
      isVideo: true
    },
    {
      name: 'Labor conference in London',
      file: images.storyImage,
      isVideo: false
    },
    {
      name: 'Labor conference in London',
      file: images.storyImage,
      isVideo: false
    }
  ]
}

export default withApollo(galleryViewNavigation)
