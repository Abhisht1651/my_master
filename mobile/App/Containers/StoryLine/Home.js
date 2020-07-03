// @flow

// import React, { useState } from 'react'
import React, { useState, useEffect, useRef } from 'react'
import {getStorylineDetails,
        getEventSources,
        getEventComments,
        getuser,getnews,
        getEventDetails,
        getrelatedStorylineEvents,
        getMultimediaDetails,
        getEntityDetails,
        getuserfollow,
        getRelatedStorylines} from './my_queries';
import {withApollo} from 'react-apollo';


import { View, Text, Image, ScrollView, TouchableOpacity, ImageProps, Platform } from 'react-native'
import Timeline from 'react-native-timeline-flatlist'
import { NavigationContainerProps } from '@react-navigation/native'
import PropTypes from 'prop-types'
import Carousel from 'react-native-snap-carousel'

// Styles
import Video from 'react-native-video'
import styles from '../Styles/StoryLine/HomeStyle'
import images from '../../Themes/Images'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

// Components
import StoryLineShortCard from '../../Components/StoryLineShortCardDefualt'
import StoryLineShortestCard from '../../Components/StoryLineShortesCard'
import StoryLineMajorEventCard from '../../Components/StoryLineMajorEventCard'
import RelatedPoll from '../../Components/RelatedPoll'
import PopularPoll from '../../Components/PopularPoll'
import Bubbles from '../../Components/Icons/Bubbles'
import Entities from '../../Components/Entities/ThumbsLarge'
import { X4SButton } from '../../Components/Buttons/X4SButton'
import { DefaultButton } from '../../Components/Buttons/DefaultButton'
import DropDown from '../../Components/Dropdowns/DropDown2'
import moment from 'moment'


// type Props = NavigationContainerProps & {
//   reach: number,
//   heading: string,
//   storyTitle: string,
//   description: string,
//   updatedTime: string,
//   onPressFollow: PropTypes.func,
//   followDisplay: boolean,
//   following: boolean,
//   fullTimelineData: Array<{
//     time: string,
//     storyDescription: string,
//     source: string,
//     storyImage: ImageProps
//   }>,
//   majorTimelineData: Array<{
//     previewText: string,
//     comments: number,
//     onPressComments: PropTypes.func,
//     storyImage: ImageProps,
//     topComment: {
//       name: string,
//       commentText: string,
//       replyCount: number,
//       isReply: boolean,
//       boostCount: number,
//       selectionHandler: (arg: number) => void
//     }
//   }>,
//   galleryData: Array<{ name: string, file: ImageProps, video: boolean }>,
//   relatedEntitiesData: Array<{
//     title: string,
//     profileIcons: ImageProps
//   }>,
//   relatedPollData: Array<{
//     question: string,
//     votes: number,
//     timeLeft: number,
//     isPollActive: boolean,
//     voterIcons: Array<string>,
//     option: Array<string>
//   }>,
//   relatedStoryLineData: Array<{
//     reach: number,
//     heading: string,
//     storyTitle: string,
//     friendsFollowing: string,
//     updatedTime: string,
//     following: boolean,
//     trending: boolean,
//     storyImage: ImageProps
//   }>
// }

const Home = (props) => {
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

  const user_id="5081a186-6c47-48fa-aaff-dbd5f45ee242";
  const client=props.client;
  if (!client){
    console.log("Client not working")
  }
  const storyline_id="238a90bf-5db2-4072-8af7-8b101d4873d5";

  var [datastory,setstory]=useState([]);
  var [datarow,setrow]=useState([]);
  var [datalong,setlong]=useState([]);
  var [galleryData1,setgallery]=useState([]);

  const displayStoryline = async (client,storyline_id) =>{
    try{
      const {data: dataStoryline, loading: loadingRelatedStoryline} = await client.query({query: getStorylineDetails, variables: {storyline_id:storyline_id}});
      const {category,followers,is_active,is_live,is_trending,topic}=dataStoryline.GetStoryline

      const {data: dataret, loading: loadingRel} = await client.query({query: getrelatedStorylineEvents, variables: {storyline_id:storyline_id}});
      const{event}=dataret.GetStorylineEvents[0];

      const {data: dataevent, loading: loadingevent} = await client.query({query: getEventDetails, variables: {event_id:event}});
      var{headline,event_time,t_update,image, description }=dataevent.GetEvent

      let item={};
      item['heading']=category
      item['storyTitle']=headline
      item['updatedTime']=await timeDiffCal(t_update,new Date().toISOString())
      item['date']=event_time.slice(0,10)
      item['description']=description
      setstory(item);
      let event_arr=[
        '1c7a4e9c-bf37-4827-95f0-73878814b571',
        'c4923283-4f2d-4d7d-b79e-7401e54d0add',
        'abb90002-a2a3-46a4-9cac-eb487a092016',
        '4fbbaeec-3399-47c7-9d35-340004b8509e',
        'fe501b18-2133-4d33-923e-a00125907504'
        ]
      let source1=[]
      let source2=[]
      let source3=[]
      for (var i=0;i<event_arr.length;i++){
          
          const {data: dataevent, loading: loadingevent} = await client.query({query: getEventDetails, variables: {event_id:event_arr[i]}});
          var{headline,event_time,t_update,image, description }=dataevent.GetEvent
          // var multi_id=image;
          var multi_id="9287fdfa-9f1b-11ea-bb37-0242ac130002";
          const {data:datamulti,loading:loadingmulti}= await client.query({query:getMultimediaDetails,variables:{multimedia_id:multi_id}});
          var {url}=datamulti.GetMultimedia;
          


          const {data:dataevent1, loading:loadingevent1}= await client.query({query:getEventSources,variables:{event_id:event_arr[i]}});
          const {article_id}=dataevent1.GetEventArticle[0];
          const {data:datanews, loading:loadingnews}= await client.query({query:getnews,variables:{article_id:article_id}});
          let item1={};
          var {publisher,headline}=datanews.GetNewsArticle[0];

          item1['time']= await timeDiffCal(t_update,new Date().toISOString());
          item1['source']=publisher
          item1['storyDescription']=headline
          item1['storyImage']=url
          item1['dotColor']='47C3F4'
          item1['reach']=200
          source1.push(item1)

          var multi_id=image;
          const {data:datamulti1,loading:loadingmulti1}= await client.query({query:getMultimediaDetails,variables:{multimedia_id:multi_id}});
          var {url,multimedia_type}=datamulti1.GetMultimedia;

          let item3={}
          item3["video"]=multimedia_type=="VIDEO"
          item3['file']=url
          item3['name']=headline
          source3.push(item3)
          
      }
      let event_arr_all=[ 
        "abb90002-a2a3-46a4-9cac-eb487a092016",
        "4fbbaeec-3399-47c7-9d35-340004b8509e"
      ]
      for (var i=0;i<event_arr_all.length;i++){
        const {data: dataevent, loading: loadingevent} = await client.query({query: getEventDetails, variables: {event_id:event_arr_all[i]}});
        var{headline,event_time,t_update,image, description }=dataevent.GetEvent

        // console.log(headline)
        const {data:datamulti,loading:loadingmulti}= await client.query({query:getMultimediaDetails,variables:{multimedia_id:multi_id}});
        var {url,multimedia_type}=datamulti.GetMultimedia;
        const {data:dataevent1, loading:loadingevent1}= await client.query({query:getEventSources,variables:{event_id:event_arr_all[i]}});
        const {article_id}=dataevent1.GetEventArticle[0];
        const {data:datanews, loading:loadingnews}= await client.query({query:getnews,variables:{article_id:article_id}});
        var {publisher,headline}=datanews.GetNewsArticle[0];
        // console.log(headline)
        let item2={}
        item2['time']=await timeDiffCal(t_update,new Date().toISOString())
        // console.log(t_update)
        item2['previewText']=headline
        item2['comments']=50
        item2['onPressComments']= () => {}
        item2['dotColor']='47C3F4'
        item2['storyImage']=url
        item2['video']=multimedia_type=="VIDEO"
        source2.push(item2)
    }
      setrow(source1);
      setlong(source2)
      setgallery(source3)      
      }
    catch(e){
      console.log(e)
      }
    }
  useEffect(() => {displayStoryline(client,storyline_id);}, []);

  var [com,setcomments]=useState([]);
  // const resource_id="93101fc6-9bb1-497f-9b3c-5f3986352632";
  const resource_id=[
      "93101fc6-9bb1-497f-9b3c-5f3986352632",
      "93101fc6-9bb1-497f-9b3c-5f3986352632"
    ]
  const displaycomments = async (client,resource_id) =>{
    try{
      let source=[];
      for (var i=0;i<resource_id.length;i++){
        let item={};
        const {data: datacomment, loading: loadingcomment} = await client.query({query: getEventComments, variables: {resource_id:resource_id[i]}});
        const {comment_id,comment_text,parent_comment_id,commented_by }=datacomment.GetComments[0];
        const {data: datauser, loading: loadinguser} = await client.query({query: getuser, variables: {user_id:commented_by}});
        const {name}=datauser.GetUserDetails[0];
        item["name"]=name;
        item['boosts']=2
        item['commentText']=comment_text
        item['isReply']=true
        item['replyCount']=1
        item['selectionHandler']=() => {}
        source.push(item)
      }
      
      setcomments(source);
      }
    catch(e){
      console.log(e)
      }
    }
  useEffect(() => {displaycomments(client,resource_id);}, []);
  // console.log(com)
  for (var i=0;i<com.length;i++){
    datalong[i] = { ...datalong[i], topComment:com[i] }
  }

  // console.log(datalong)

  const {navigation,onPressFollow,reach,following,followDisplay}=props;
  // const {galleryData}=props
  // console.log(galleryData1)
  const fullTimelineData=datarow
  var majorTimelineData=datalong

  var { heading, storyTitle, description,updatedTime} = datastory



  const {
    // navigation,
    // reach,
    // heading,
    // storyTitle,
    // description,
    // updatedTime,
    // following,
    // followDisplay,
    // onPressFollow,
    // fullTimelineData,
    // majorTimelineData,
    // galleryData,
    // relatedEntitiesData,
    relatedPollData,
    // relatedStoryLineData
  } = props
  const {
    backIcon,
    iconStoryLineTrending,
    iconPeople,
    iconStoryLineReach,
    majorEventsNotSelected,
    majorEventsSelected,
    allEventsNotSelected,
    allEventsSelected,
    player
  } = images
  // const {backIcon,iconStoryLineTrending, iconPeople,iconStoryLineReach,majorEventsNotSelected,
  //   majorEventsSelected, allEventsNotSelected, allEventsSelected} = images


  const [event, setEvent] = useState(1)
  const [sortTimeline, setSortTimeline] = useState('Latest')
  const [result, setResult] = useState(Array(relatedPollData.length).fill(false))
  const [followButtonDisplay, setFollowButtonDisplay] = useState(following)
  const [paused, setPaused] = useState(true)

  const setPollResult = (index) => {
    const updatedRelatedPollDataResults = [...result]
    updatedRelatedPollDataResults[index] = true
    setResult(updatedRelatedPollDataResults)
  }
  
  const pollResultNavigation = () => {
    navigation.navigate('PollResultsScreen')
  }

  for (var i=0;i<majorTimelineData.length;i++){
      majorTimelineData[i] = { ...majorTimelineData[i], dotColor: '47C3F4' }
  }
  for (var i=0;i<fullTimelineData.length;i++){
    fullTimelineData[i] = { ...fullTimelineData[i], dotColor: '47C3F4' }
  }


  const setEventFuncation = (current) => {
    setEvent(current)
  }
  function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  const setSortTimeLineFunction = (current,arr) => {
    if (current === 2) {
      setSortTimeline('Oldest')
      // majorTimelineData=sortByKey(majorTimelineData,majorTimelineData.time)
    } else {
      setSortTimeline('Latest')
      // majorTimelineData=sortByKey(majorTimelineData,majorTimelineData.time)
      // majorTimelineData.reverse()
    }
  }

  const onPressFollowFunction = () => {
    setFollowButtonDisplay(!followButtonDisplay)
    onPressFollow()
  }

  const storyLineNavigation = () => {
    navigation.navigate('FullPost')
  }

  const renderDetailFullEvent = (rowData, sectionID) => {
    const { time, source, storyDescription, storyImage } = rowData
    return (
      <View key={sectionID} style={styles.itemContainer}>
        <View style={styles.timeTextContainer}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <TouchableOpacity style={styles.eventContainer} onPress={() => storyLineNavigation()}>
          <StoryLineShortestCard
            description={storyDescription}
            source={source}
            storyImage={{uri:storyImage}}
            type={2}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderDetailMajorEvent = (rowData, sectionID) => {
    const { time, storyImage, previewText, comments, onPressComments, topComment ,video} = rowData
    return (
      <View key={sectionID} style={styles.itemContainer}>
        <View style={styles.timeTextContainer}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <TouchableOpacity style={styles.eventContainer} onPress={() => storyLineNavigation()}>
          <StoryLineMajorEventCard
            previewText={previewText}
            comments={comments}
            onPressComments={onPressComments}
            topComment={topComment}
            storyImage={storyImage}
            video={video}
          />
        </TouchableOpacity>
      </View>
    )
  }
  const [relatedEntitiesData1, setREntity] = useState([]) 

  let isVideo = false
  const fetchImgUrl = async (MMId) => {
    const imgUrl = []
    for (let i = 0; i < MMId.length; i += 1) {
      const { data } = await client.query({
        query: getMultimediaDetails,
        variables: { multimedia_id: MMId[i] },
        fetchPolicy: 'cache-first'
      })
      imgUrl.push(data.GetMultimedia.url)
      if (data.GetMultimedia.multimedia_type === 'VIDEO') isVideo = true
      else isVideo = false
    }
    return imgUrl
  }

  const displayRelatedEntity = async (Arr) => {
    const tempRelatedEntity = []
    for (let i = 0; i < Arr.length; i += 1) {
      entity_id = Arr[i]
      const { data: dataRelatedEntity, loading, error } = await client.query({
        query: getEntityDetails,
        variables: {entity_id: entity_id }
      })
      const { name, image, followers } = dataRelatedEntity.GetEntity
      const [url] = await fetchImgUrl([image])
      tempRelatedEntity.push({
        title: name,
        profileIcons: [url],
        count: followers
      })
    }
    setREntity(tempRelatedEntity)
  }
  const displayHome = async () => {
    try {
      const entityIdArr = [
        'ff3b2a22-8858-428e-8270-98f31ae4acdc',
        '96a4ae77-753c-4cce-9a24-37050a0cf77f',
        'e75d2349-7ff4-4a8f-aa54-1fa16a5a5082',
        'ec0dfbbd-466d-411e-8923-8fcd5c6824cd',
        '4caed58a-0fe6-4d75-90b4-dffe6bc395a7'
      ]
      await displayRelatedEntity(entityIdArr)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {displayHome()}, [])
  // console.log(relatedEntitiesData1)


  const [relatedStoryLineData1, setRstory] = useState([])
  const displayrelatedStoryline = async (client,storyline_id) =>{

    try{
      let source=[];
      const {data: dataStoryline, loading: loadingStoryline} = await client.query({query: getRelatedStorylines, variables: {storyline_id1:storyline_id}});
      // console.log(dataStoryline.getStorylineStoryline)
      // let story_id=[]
      // for (var i=0;i<dataStoryline.getStorylineStoryline.length;i++){
      //   story_id[i]=dataStoryline.getStorylineStoryline[i].storyline_id2
      // }
      let story_id=['629e108e-672c-426a-9731-7039e72de685',
      'd6fa63d6-0cc1-434f-9800-83098a54baa1',
      '238a90bf-5db2-4072-8af7-8b101d4873d5',
      '1a802963-70f3-4971-bf7c-7b2cb411bde1',
      'fa9ebbad-84be-4d61-b861-d30393267fcd',
      '9972bbda-7de3-4cfb-b329-4034c5be6439',
      '913ded1c-89f3-4892-a559-0eba6e0d0eb8',
      'e0b6b10c-255a-49b3-b75c-c35c5066d721',
      'e33be0f3-f837-466d-b95c-63211aa69cb0',
      '939780ee-2351-471f-a2dc-8b4469e4c86e']
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


        const { topic, category,  last_updated, followers, is_trending } = dataRelatedStoryline.GetStoryline

        const {data:datafollow,loading:loadingfollow}= await client.query({query:getuserfollow,variables:{user:user_id}});

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
        item["followers"]=followers
        item['is_trending']=is_trending
        item['following']=is_following
        item['friendsFollowing']=followers
        item['image']=url
        // console.log(url)
        item['video']=true
        item['storyline_id']=story_id[i]
        source[i]=item
      }      
      setRstory(source);
      }
    catch(e){
      console.log(e)
      }
    }
  useEffect(() => {displayrelatedStoryline(client,storyline_id);}, []);
  // console.log(relatedStoryLineData1)






  const timeline1 = (
    <View style={event === 2 ? styles.timeLineContainer : styles.noDisplay}>
      <Timeline
        style={styles.list}
        innerCircle="dot"
        data={fullTimelineData}
        circleSize={wp('2.67%')}
        dotSize={wp('1.86%')}
        circleColor="#47C3F4"
        lineColor="#47C3F4"
        renderDetail={renderDetailFullEvent}
        showTime={false}
      />
    </View>
  )

  const timeline2 = (
    <View style={event === 1 ? styles.timeLineContainer : styles.noDisplay}>
      <Timeline
        style={styles.list}
        innerCircle="dot"
        data={majorTimelineData}
        circleSize={wp('2.67%')}
        dotSize={wp('1.86%')}
        circleColor="#47C3F4"
        lineColor="#47C3F4"
        renderDetail={renderDetailMajorEvent}
        showTime={false}
      />
    </View>
  )

  const relatedEntitiesDisplay = ({
    item,
    index
  }: {
    item: { title: string, profileIcons: Array<ImageProps> },
    index: number
  }) => {
    const { title, profileIcons } = item
    return (
      <View key={index} style={styles.previewContainerEntities}>
        <Entities title={title} profileIcons={profileIcons} />
      </View>
    )
  }

  const relatedPollsDisplay = ({
    item,
    index
  }: {
    item: {
      question: string,
      votes: number,
      timeLeft: number,
      isPollActive: boolean,
      voterIcons: Array<string>,
      option: Array<string>
    },
    index: number
  }) => {
    return (
      <View key={index} style={styles.previewContainer}>
        {result[index] ? (
          <TouchableOpacity onPress={() => pollResultNavigation()}>
            <PopularPoll />
          </TouchableOpacity>
        ) : (
          <RelatedPoll
            question={item.question}
            votes={item.votes}
            timeLeft={item.timeLeft}
            isPollActive={item.isPollActive}
            voterIcons={item.voterIcons}
            option={item.option}
            onPressVote={() => setPollResult(index)}
          />
        )}
      </View>
    )
  }

  const relatedStoryLineDisplay = ({
    item,
    index
  }: {
    item: {
      reach: number,
      heading: string,
      storyTitle: string,
      friendsFollowing: string,
      updatedTime: string,
      following: boolean,
      trending: boolean,
      storyImage: ImageProps,
      video : boolean
    },
    index: number
  }) => {
    // console.log(item.friendsFollowing)
    return (
      <View key={index} style={styles.previewContainer}>
        <StoryLineShortCard
          reach={item.reach}
          heading={item.category}
          storyTitle={item.topic}
          friendsFollowing={item.friendsFollowing}
          updatedTime={item.last_updated}
          following={item.following}
          trending={item.is_trending}
          storyImage={item.image}
          storyline_id={item.storyline_id}
          followers={item.followers}
          video={item.video}
        />
      </View>
    )
  }

  const renderGalleryData = ({
    item,
    index
  }: {
    item: { name: string, file: ImageProps, video: boolean },
    index: number
  }) => {
    const { name, file, video } = item
    if (!video) {
      return (
        <View key={index} style={styles.previewContainerGallery}>
          <View style={styles.galleryImageContainer}>
            <Image source={{uri:file}} style={styles.galleryImage} />
          </View>

          <Text style={styles.galleryText}>{name}</Text>
        </View>
      )
    }
    return (
      <View key={index} style={styles.previewContainerGallery}>
        <TouchableOpacity style={styles.galleryImageContainer} onPress={() => setPaused(!paused)}>
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
    <View style={styles.container}>
      {Platform.OS === 'ios' ? <View style={styles.topCover} /> : null}
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backIcon} style={styles.backIcon} />
            </TouchableOpacity>
            <Bubbles />
          </View>
          <View style={styles.divider} />
          <View style={styles.storyContainer}>
            <View style={styles.storyHeadingContainer}>
              <View style={styles.storyHeading}>
                <Text style={styles.headingText}>{heading}</Text>
                <View style={styles.dot} />
                <Image source={iconStoryLineTrending} />
                <Text style={styles.headingText}> Trending</Text>
              </View>
              <TouchableOpacity>
                {followDisplay ? (
                  <TouchableOpacity onPress={() => onPressFollowFunction()}>
                    {followButtonDisplay ? (
                      <X4SButton disabled title="Following" onPress={onPressFollow} />
                    ) : (
                      <DefaultButton
                        outline
                        title="Follow"
                        onPress={() => onPressFollowFunction()}
                      />
                    )}
                  </TouchableOpacity>
                ) : null}
              </TouchableOpacity>
            </View>
            <View style={styles.storyHeading}>
              <Image source={iconStoryLineReach} />
              <Text style={styles.friendsText}>{200}K Reached</Text>
              <Image source={iconPeople} />
              <Text style={styles.friendsText}>241K Followers</Text>
            </View>
            <View style={styles.storyTitle}>
              <Text style={styles.storyTitleText}>{storyTitle}</Text>
              <Text style={styles.updateTimeText}>Updated {updatedTime} ago</Text>
            </View>
            <View style={styles.storyDescription}>
              <Text style={styles.storyDescriptionText}>{description}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.suggestionsContainerEntities}>
            <View style={styles.titleContainerEntities}>
              <Text style={styles.titleText}>Related Entities</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RelatedEntities')}>
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollViewContainer}>
              <Carousel
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                data={relatedEntitiesData1}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                sliderWidth={wp('100%')}
                itemWidth={wp('20%')}
                renderItem={relatedEntitiesDisplay}
              />
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.timeLineHeader}>
            <Text style={styles.timeLineText}>TimeLine</Text>
            <View style={styles.sortContainer}>
              <Text style={styles.sortByText}>Sort by </Text>
              <Text style={styles.sortText}>{sortTimeline}</Text>
              <DropDown
                headerTitle="Sort by"
                content={['Latest Events First', 'Oldest Events First']}
                type={2}
                getOption={(item) => setSortTimeLineFunction(item)}
              />
            </View>
          </View>
          <View style={styles.eventHeader}>
            <TouchableOpacity style={styles.eventHeaderItem} onPress={() => setEventFuncation(1)}>
              <Image
                source={event === 1 ? majorEventsSelected : majorEventsNotSelected}
                style={styles.eventIcon}
              />
              <Text style={event === 1 ? styles.eventActiveText : styles.eventLightText}>
                Major Events
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eventHeaderItem} onPress={() => setEventFuncation(2)}>
              <Image
                source={event === 1 ? allEventsNotSelected : allEventsSelected}
                style={styles.eventIcon}
              />
              <Text style={event === 2 ? styles.eventActiveText : styles.eventLightText}>
                All events
              </Text>
            </TouchableOpacity>
          </View>
          {timeline1}
          {timeline2}
          <View style={styles.suggestionsContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Related Poll</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RelatedPolls')}>
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollViewContainer}>
              <Carousel
                data={relatedPollData}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                sliderWidth={wp('100%')}
                itemWidth={wp('86.86%')}
                renderItem={relatedPollsDisplay}
              />
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.suggestionsContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Related StoryLines</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RelatedStoryLines')}>
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollViewContainer}>
              <Carousel
                data={relatedStoryLineData1}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                sliderWidth={wp('100%')}
                itemWidth={wp('86.86%')}
                renderItem={relatedStoryLineDisplay}
              />
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.suggestionsContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Gallery ({galleryData1.length} Items)</Text>
              <TouchableOpacity onPress={() => navigation.navigate('GalleryView')}>
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollViewContainer}>
              <Carousel
                data={galleryData1}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                sliderWidth={wp('100%')}
                itemWidth={wp('85%')}
                renderItem={renderGalleryData}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const videoFile = require('../../Images/broadchurch.mp4')

Home.defaultProps = {
//   reach: 45,
//   heading: 'World',
//   storyTitle: 'Brexit: UK exit from the European Union',
//   description:
//     'British sovereign bonds are rallying strongly after the EU warned over the weekend that Boris Johnson faces an uphill battle in striking a Brexit.',
//   updatedTime: '2m',
//   onPressFollow: () => {},
//   following: false,
//   followDisplay: true,
//   fullTimelineData: [
//     {
//       time: 'Sept 21, 2019, 5:00PM ET',
//       storyDescription: 'Ray Contreras talks about the different accents',
//       source: 'Forbes',
//       storyImage: images.storyImage
//     },
//     {
//       time: 'Sept 21, 2019, 5:00PM ET',
//       storyDescription: 'Ray Contreras talks about the different accents',
//       source: 'Forbes',
//       storyImage: images.storyImage
//     },
//     {
//       time: 'Sept 21, 2019, 5:00PM ET',
//       storyDescription: 'Ray Contreras talks about the different accents',
//       source: 'Forbes',
//       storyImage: images.storyImage
//     },
//     {
//       time: 'Sept 21, 2019, 5:00PM ET',
//       storyDescription: 'Ray Contreras talks about the different accents',
//       source: 'Forbes',
//       storyImage: images.storyImage
//     }
//   ],
//   majorTimelineData: [
//     {
//       time: 'Sept 21, 2019, 5:00PM ET',
//       previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
//       comments: 34,
//       onPressComments: () => {},
//       storyImage: images.storyImage,
//       topComment: {
//         name: 'Jammie Rice',
//         commentText:
//           'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
//         replyCount: 1,
//         isReply: false,
//         boostCount: 450,
//         selectionHandler: () => {}
//       }
//     },
//     {
//       time: 'Sept 21, 2019, 5:00PM ET',
//       previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
//       comments: 34,
//       onPressComments: () => {},
//       storyImage: images.storyImage,
//       topComment: {
//         name: 'Jammie Rice',
//         commentText:
//           'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
//         replyCount: 1,
//         isReply: false,
//         boostCount: 450,
//         selectionHandler: () => {}
//       }
//     },
//     {
//       time: 'Sept 21, 2019, 5:00PM ET',
//       previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
//       comments: 34,
//       onPressComments: () => {},
//       storyImage: images.storyImage,
//       topComment: {
//         name: 'Jammie Rice',
//         commentText:
//           'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
//         replyCount: 1,
//         isReply: false,
//         boostCount: 450,
//         selectionHandler: () => {}
//       }
//     }
//   ],
  // relatedEntitiesData: [
  //   { title: 'India', profileIcons: [images.EntitiesImage0] },
  //   { title: 'USA', profileIcons: [images.EntitiesImage1] },
  //   { title: 'India', profileIcons: [images.EntitiesImage0] },
  //   { title: 'USA', profileIcons: [images.EntitiesImage1] },
  //   { title: 'India', profileIcons: [images.EntitiesImage0] },
  //   { title: 'USA', profileIcons: [images.EntitiesImage1] },
  //   { title: 'India', profileIcons: [images.EntitiesImage0] },
  //   { title: 'USA', profileIcons: [images.EntitiesImage1] }
  // ],
  relatedPollData: [
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England']
    },
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England']
    }
  ],
  // relatedStoryLineData: [
  //   {
  //     reach: 45,
  //     heading: 'World',
  //     storyTitle: 'UK exit from the European Union',
  //     friendsFollowing: '45 friends Following',
  //     updatedTime: '2m',
  //     following: true,
  //     trending: true,
  //     storyImage: images.storyImage
  //   },
  //   {
  //     reach: 45,
  //     heading: 'World',
  //     storyTitle: 'UK exit from the European Union',
  //     friendsFollowing: '45 friends Following',
  //     updatedTime: '2m',
  //     following: true,
  //     trending: true,
  //     storyImage: images.storyImage
  //   },
  //   {
  //     reach: 45,
  //     heading: 'World',
  //     storyTitle: 'UK exit from the European Union',
  //     friendsFollowing: '45 friends Following',
  //     updatedTime: '2m',
  //     following: true,
  //     trending: true,
  //     storyImage: images.storyImage
  //   }
  // ],
  galleryData: [
    {
      name: 'Labor conference in London',
      file: videoFile,
      video: true
    },
    {
      name: 'Labor conference in London',
      file: images.storyImage,
      video: false
    },
    {
      name: 'Labor conference in London',
      file: images.storyImage,
      video: false
    }
  ]
}

export default withApollo(Home)
