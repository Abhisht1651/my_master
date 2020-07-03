// @flow
// import React from 'react'
import React, { useState, useEffect, useRef } from 'react'
import {withApollo} from 'react-apollo';

import { View, Text, Image, ImageProps } from 'react-native'
import {getStorylineDetails,getEventSources,getnews,getMultimediaDetails} from '../Containers/StoryLine/my_queries'

// Styles
import styles from './Styles/SourceStyle'
import images from '../Themes/Images'
import moment from 'moment'


// type Props = {
//   title: string,
//   date: string,
//   description: string,
//   storyImage: ImageProps
// }

const storyLineShortestCard = (props) => {
  var [datasources,setFeed]=useState([]);


  const client=props.client;
  if (!client){
    console.log("Client not working")
  }
  var [url,seturl]=useState([]);
  const displaymulti = async (client) =>{
    try{
      const multi_id="9287fdfa-9f1b-11ea-bb37-0242ac130002";
      const {data:datamulti,loading:loadingmulti}= await client.query({query:getMultimediaDetails,variables:{multimedia_id:multi_id}});
      const {url}=datamulti.GetMultimedia;
      seturl(url);
      }
    catch(e){
      console.log(e)
      }
    }
  useEffect(() => {displaymulti(client);}, []);
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
  const event="1c7a4e9c-bf37-4827-95f0-73878814b571";
  const displaysource = async (client,event) =>{
    try{
      const {data:dataevent, loading:loadingevent}= await client.query({query:getEventSources,variables:{event_id:event}});
      console.log(dataevent)
      const {article_id}=dataevent.GetEventArticle[0];
      const {data:datanews, loading:loadingnews}= await client.query({query:getnews,variables:{article_id:article_id}});
      let item={};
      const {publisher,headline,t_update}=datanews.GetNewsArticle[0];

      item['date']=await timeDiffCal(t_update,new Date().toISOString());
      item['title']=publisher
      item['description']=headline
      setFeed(item);
      }
    catch(e){
      console.log(e)
      }
    }
  useEffect(() => {displaysource(client,event);}, []);
  
  const { date,title,description} = datasources
  const { iconSource } = images
  const storyImage= url;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sourceText}>{title}</Text>
        <Image source={iconSource} style={styles.iconSource} />
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri:storyImage.toString()}} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

// storyLineShortestCard.defaultProps = {
//   title: 'Forbes',
//   description: 'AS Boris Delivers A Brexit Deal, EU Have Agreed…',
//   storyImage: images.storyImage,
//   date: '23 hours ago'
// }

export default withApollo(storyLineShortestCard)
