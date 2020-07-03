// @flow

// import React, { useState, useRef } from 'react'
import React, { useState, useEffect, useRef } from 'react'
import {withApollo} from 'react-apollo';
import {getEventComments,
        getEventDetails,
        getStorylineDetails,
        getuser,
        getMultimediaDetails,
        getEntityDetails,
        getrelatedStorylineEvents} from './my_queries';

import { View, Text, Image, ScrollView, TouchableOpacity, ImageProps, Platform } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Carousel from 'react-native-snap-carousel'
import Video from 'react-native-video'
import styles1 from '../Styles/StoryLine/HomeStyle'


// Styles
import styles from '../Styles/StoryLine/FullPostStyle'
import images from '../../Themes/Images'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

// Components
import CommentBox from '../../Components/CommentBox'
import Bubbles from '../../Components/Icons/Bubbles'
import CommentBar from '../../Components/Commentbars/Commentbar2'
import DropDown from '../../Components/Dropdowns/DropDown2'
import Source from '../../Components/Source'
import Entities from '../../Components/Entities/ThumbsLarge'
import moment from 'moment'

// type Props = NavigationContainerProps & {
//   storyHeading: string,
//   storyTitle: string,
//   description: string,
//   updatedTime: string,
//   date: string,
//   comments: Array<{
//     name: string,
//     commentText: string,
//     profilePic: ImageProps,
//     boosts: number,
//     replies: Array<{
//       name: string,
//       commentText: string,
//       profilePic: ImageProps,
//       boosts: number
//     }>
//   }>
// }

const FullPost = (props) => {
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


  const client=props.client;
  if (!client){
    console.log("CLient not working")
  }



  var [relatefull,setrelatefull]=useState([]);
  var [com,setcomments]=useState([]);
  var [url,seturl]=useState([]);
  const [paused, setPaused] = useState(true)

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
  const storyImage="https://cdn.kapwing.com/resources/2019/01/final_5c450f0b61a12900140130ed_179852.mp4";


  const storyline_id="629e108e-672c-426a-9731-7039e72de685";
  // const event_id="abb90002-a2a3-46a4-9cac-eb487a092016";
  const displayfull = async (client,storyline_id) =>{
    try{
      let source=[];
      const {data: dataStoryline, loading: loadingRelatedStoryline} = await client.query({query: getStorylineDetails, variables: {storyline_id:storyline_id}});
      const {topic,category}=dataStoryline.GetStoryline
      let item={};
      const {data: dataRelatedStorye, loading: loadingRelatedStory} = await client.query({query: getrelatedStorylineEvents, variables: {storyline_id:storyline_id}});
      const event_i=dataRelatedStorye.GetStorylineEvents[0].event
      const {data: dataevents, loading: loadingevents} = await client.query({query: getEventDetails, variables: {event_id:event_i}});
      const multi_id=dataevents.GetEvent.image
      const {data:datamulti,loading:loadingmulti}= await client.query({query:getMultimediaDetails,variables:{multimedia_id:multi_id}});
      const {url}=datamulti.GetMultimedia;

      const {headline,event_time,t_update,image, description }=dataevents.GetEvent
      item['storyHeading']=category
      item['storyTitle']=topic
      item['updatedTime']=await timeDiffCal(t_update,new Date().toISOString())
      item['date']=event_time.slice(0,10);
      item['description']=description
      item['video']=true
      // item['storyImage']=url
      let source1=[];
      const {data: datacomment, loading: loadingcomment} = await client.query({query: getEventComments, variables: {resource_id:event_i}});
      for (var k=0;k<datacomment.GetComments.length;k++){
        let item1={};
        const {comment_id,comment_text,parent_comment_id,commented_by,t_create }=datacomment.GetComments[k];
        const {data: datauser, loading: loadinguser} = await client.query({query: getuser, variables: {user_id:commented_by}});
        const {name,profile_picture}=datauser.GetUserDetails[0];
        item1["name"]=name;
        item1['boosts']=2
        item1['commentText']=comment_text
        item1['replies']= [
                  {
                    name: name,
                    commentText:comment_text,
                    profilePic: await fetchImgUrl([profile_picture]),
                    boosts: 123,
                    time:await timeDiffCal(t_create,new Date().toISOString())
                  }
                ]
        item1['profilePic']=await fetchImgUrl([profile_picture])
        item1['time']=await timeDiffCal(t_create,new Date().toISOString())
        source1.push(item1)
      }
      // console.log(event_i)
      setcomments(source1);
      setrelatefull(item);
      }
    catch(e){
      console.log(e)
      }
    }
  useEffect(() => {displayfull(client,storyline_id);}, []);

  const {storyHeading, storyTitle, updatedTime, date, description,video}=relatefull;
  // console.log(video)


  

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


  const comments=com;
  const {
    navigation,
    relatedEntitiesData
  } = props
  const { backIcon, commentIcon, voterIcon2, chevron,player } = images

  const [, setComment] = useState('')
  const [showReplies, setShowReplies] = useState(Array(comments.length).fill(0))
  const [sortComment, setSortComment] = useState('Most Popular')

  const inputHandler = (text) => {
    setComment(text)
  }

  const setSortCommentFunction = (current) => {
    if (current === 2) {
      setSortComment('Most Recent')
    } else {
      setSortComment('Most Popular')
    }
  }

  const toggleViewReplies = (index) => {
    if (showReplies[index] === 0) {
      const updatedShowReplies = [...showReplies]
      updatedShowReplies[index] = 1
      setShowReplies(updatedShowReplies)
    } else {
      const updatedShowReplies = [...showReplies]
      updatedShowReplies[index] = 0
      setShowReplies(updatedShowReplies)
    }
  }

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

  const repliesDisplay = (replies, type, commentIndex) => {
    const display1 = replies.map((reply, index) => {
      const { name, commentText, profilePic, boosts ,time} = reply
      // console.log(profilePic)
      return (
        <View key={index} style={styles.replyContainer}>
          <Image source={{uri :profilePic[0]}} style={styles.commentsIcon} />
          <View style={styles.replyBoxContainer}>
            <CommentBox
              isReply
              name={name}
              commentText={commentText}
              // profilePic={{uri :profilePic[0]}}
              onClickBoost={() => navigation.navigate('Boost Screen')}
              boosts={boosts}
              time={time}
            />
          </View>
        </View>
      )
    })
    const display2 =
      replies.length !== 0 ? (
        <TouchableOpacity
          style={styles.viewRepliesContainer}
          onPress={() => toggleViewReplies(commentIndex)}>
          <Text style={styles.viewRepliesText}>View {replies.length} Replies</Text>
          <Image source={chevron} style={styles.chevron} />
        </TouchableOpacity>
      ) : null

    if (type === 1) {
      return display1
    }
    return display2
  }

  const commentsElements = comments.map((item, index) => {
    const { name, commentText, profilePic, boosts, replies,time } = item
    return (
      <View key={index} style={styles.comments}>
        <View style={styles.commentIconContainer}>
          <Image source={{uri :profilePic[0]}} style={styles.commentsIcon} />
        </View>
        <View style={styles.commentBoxContainer}>
          <CommentBox
            name={name}
            commentText={commentText}
            boosts={boosts}
          
            onClickBoost={() => navigation.navigate('BoostScreen')}
            replyCount={replies.length}
            time={time}
          />
          {replies.length === 1 || showReplies[index] === 1
            ? repliesDisplay(replies, 1, index)
            : repliesDisplay(replies, 2, index)}
        </View>
      </View>
    )
  })

  const scrollRef = useRef<ScrollView>()

  const scrollToBottom = () => {
    scrollRef.current.scrollToEnd({ animation: true })
  }
  if (!video){
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.superContainer}>
        <View style={styles.superContainer}>
          {Platform.OS === 'ios' ? <View style={styles.topCover} /> : null}
          <View style={styles.container}>
            <ScrollView ref={scrollRef}>
              <View style={styles.mainDataContainer}>
                <View style={styles.header}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={backIcon} style={styles.backIcon} />
                  </TouchableOpacity>
                  <Bubbles />
                </View>
                <View style={styles.divider} />
                <View style={styles.storyImageContainer}>
                  <Image source={{uri:storyImage.toString()}} style={styles.storyImage} />
                </View>
                <View style={styles.storyContainer}>
                  <View style={styles.storyTitle}>
                    <Text style={styles.storyTitleTextLight}>{storyHeading}</Text>
                    <Text style={styles.storyTitleText}>{storyTitle}</Text>
                    <Text style={styles.dateText}>{date}</Text>
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
                <View style={styles.divider} />
                <View style={styles.sourceContainer}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Sources</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SourceScreen')}>
                      <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                  </View>
                  {/* <View style={styles.sourceItem}>
                    <Source />
                  </View>
                  <View style={styles.sourceItem}>
                    <Source />
                  </View> */}
                  <View style={styles.sourceItem}>
                    <Source />
                  </View>
                </View>
              </View>
              <View style={styles.commentsContainer}>
                <View style={styles.divider} />
                <View style={styles.commentsContainer}>
                  <View style={styles.commentsHeaderContainer}>
                    <View style={styles.commentButtonContainer}>
                      <Image source={commentIcon} style={styles.commentIcon} />
                      <Text style={styles.commentButtonText}>{com.length} Comments</Text>
                    </View>
                    <View style={styles.headerRight}>
                      <Text style={styles.mostPopularText}>{sortComment}</Text>
                      <DropDown
                        headerTitle="Sort by"
                        content={['Most popular', 'Most recent']}
                        getOption={(item) => setSortCommentFunction(item)}
                        type={2}
                      />
                    </View>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.allCommentsContainer}>{commentsElements}</View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.containerBottom}>
            <View style={styles.commentInputContainer}>
              <CommentBar captureText={inputHandler} onTouchStart={() => scrollToBottom()} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
  if (video){
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.superContainer}>
        <View style={styles.superContainer}>
          {Platform.OS === 'ios' ? <View style={styles.topCover} /> : null}
          <View style={styles.container}>
            <ScrollView ref={scrollRef}>
              <View style={styles.mainDataContainer}>
                <View style={styles.header}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={backIcon} style={styles.backIcon} />
                  </TouchableOpacity>
                  <Bubbles />
                </View>
                <View style={styles.divider} />
                <View style={styles.storyImageContainer}>

                <TouchableOpacity style={styles1.galleryImageContainer} onPress={() => setPaused(!paused)}>
                  <Video
                    source={{uri:storyImage}}
                    poster="https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loading-screen-featured-image.jpg"
                    style={styles1.galleryImage}
                    paused={paused}
                    resizeMode="cover"
                    posterResizeMode="cover"
                  />
                  {paused ? <Image source={player} style={styles1.player} /> : null}
                </TouchableOpacity>
                
                </View>
                <View style={styles.storyContainer}>
                  <View style={styles.storyTitle}>
                    <Text style={styles.storyTitleTextLight}>{storyHeading}</Text>
                    <Text style={styles.storyTitleText}>{storyTitle}</Text>
                    <Text style={styles.dateText}>{date}</Text>
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
                <View style={styles.divider} />
                <View style={styles.sourceContainer}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Sources</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SourceScreen')}>
                      <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                  </View>
                  {/* <View style={styles.sourceItem}>
                    <Source />
                  </View>
                  <View style={styles.sourceItem}>
                    <Source />
                  </View> */}
                  <View style={styles.sourceItem}>
                    <Source />
                  </View>
                </View>
              </View>
              <View style={styles.commentsContainer}>
                <View style={styles.divider} />
                <View style={styles.commentsContainer}>
                  <View style={styles.commentsHeaderContainer}>
                    <View style={styles.commentButtonContainer}>
                      <Image source={commentIcon} style={styles.commentIcon} />
                      <Text style={styles.commentButtonText}>{com.length} Comments</Text>
                    </View>
                    <View style={styles.headerRight}>
                      <Text style={styles.mostPopularText}>{sortComment}</Text>
                      <DropDown
                        headerTitle="Sort by"
                        content={['Most popular', 'Most recent']}
                        getOption={(item) => setSortCommentFunction(item)}
                        type={2}
                      />
                    </View>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.allCommentsContainer}>{commentsElements}</View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.containerBottom}>
            <View style={styles.commentInputContainer}>
              <CommentBar captureText={inputHandler} onTouchStart={() => scrollToBottom()} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
  
}

// FullPost.defaultProps = {
//   storyHeading: 'UK exit from the European Union',
//   storyTitle: 'Brexit: UK exit from the European Union',
//   description:
//     'British sovereign bonds are rallying strongly after the EU warned over the weekend that Boris Johnson faces an uphill battle in striking a Brexit.',
//   updatedTime: '2m',
//   date: 'Sept 21, 2019, 5:00PM ET',
//   comments: [
//     {
//       name: 'Jammie Rice',
//       commentText:
//         'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
//       profilePic: images.voterIcon1,
//       boosts: 450,
//       replies: [
//         {
//           name: 'Lorraine Kim',
//           commentText:
//             'After reports emerged suggesting the Obama administration would issue additional sanctions imminently.',
//           profilePic: images.voterIcon2,
//           boosts: 450
//         }
//       ]
//     },
//     {
//       name: 'Abraham P.',
//       commentText:
//         'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
//       profilePic: images.voterIcon3,
//       boosts: 450,
//       replies: [
//         {
//           name: 'Lorraine Kim',
//           commentText:
//             'After reports emerged suggesting the Obama administration would issue additional sanctions imminently.',
//           profilePic: images.voterIcon2,
//           boosts: 450
//         },
//         {
//           name: 'Lorraine Kim',
//           commentText:
//             'After reports emerged suggesting the Obama administration would issue additional sanctions imminently.',
//           profilePic: images.voterIcon2,
//           boosts: 450
//         },
//         {
//           name: 'Lorraine Kim',
//           commentText:
//             'After reports emerged suggesting the Obama administration would issue additional sanctions imminently.',
//           profilePic: images.voterIcon2,
//           boosts: 450
//         }
//       ]
//     },
//     {
//       name: 'Abraham P.',
//       commentText:
//         'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
//       profilePic: images.voterIcon3,
//       boosts: 450,
//       replies: []
//     },
//     {
//       name: 'Jammie Rice',
//       commentText:
//         'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
//       profilePic: images.voterIcon1,
//       boosts: 450,
//       replies: []
//     }
//   ],
//   relatedEntitiesData: [
//     { title: 'India', profileIcons: [images.EntitiesImage0] },
//     { title: 'USA', profileIcons: [images.EntitiesImage1] },
//     { title: 'India', profileIcons: [images.EntitiesImage0] },
//     { title: 'USA', profileIcons: [images.EntitiesImage1] },
//     { title: 'India', profileIcons: [images.EntitiesImage0] },
//     { title: 'USA', profileIcons: [images.EntitiesImage1] },
//     { title: 'India', profileIcons: [images.EntitiesImage0] },
//     { title: 'USA', profileIcons: [images.EntitiesImage1] }
//   ]
// }

export default withApollo(FullPost)
