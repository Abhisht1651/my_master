// // @flow

// // import React, { useState } from 'react'
// import React, { useState, useEffect, useRef } from 'react'
// import { View, ScrollView, Image, Text, TouchableOpacity, Platform } from 'react-native'
// import { NavigationContainerProps } from '@react-navigation/native'
// import PropTypes from 'prop-types'
// import RelatedPoll from '../../Components/RelatedPoll'
// import PopularPoll from '../../Components/PopularPoll'

// import {withApollo} from 'react-apollo';
// import moment from 'moment'


// // Styles
// import styles from '../Styles/StoryLine/RelatedPollsStyle'
// import images from '../../Themes/Images'

// type Props = NavigationContainerProps & {
//   pollsData: Array<{
//     question: string,
//     votes: number,
//     timeLeft: number,
//     isPollActive: boolean,
//     voterIcons: Array<string>,
//     option: Array<string>,
//     onPressVote: PropTypes.func
//   }>
// }

// const relatedPolls = (props) => {

//   var [relatedPoll,setFeed]=useState([]);
//   const { navigation, pollsData } = props
//   const { backIcon } = images

//   const [result, setResult] = useState(Array(pollsData.length).fill(false))

//   const setPollResult = (index) => {
//     const updatedRelatedPollDataResults = [...result]
//     updatedRelatedPollDataResults[index] = true
//     setResult(updatedRelatedPollDataResults)
//   }

//   const relatedPollsDisplay = pollsData.map((item, index) => {
//     return (
//       <View key={index} style={styles.previewContainer}>
//         {result[index] ? (
//           <PopularPoll />
//         ) : (
//           <RelatedPoll
//             question={item.question}
//             votes={item.votes}
//             timeLeft={item.timeLeft}
//             isPollActive={item.isPollActive}
//             voterIcons={item.voterIcons}
//             option={item.option}
//             onPressVote={() => setPollResult(index)}
//           />
//         )}
//       </View>
//     )
//   })
//   return (
//     <View style={styles.container}>
//       {Platform.OS === 'ios' ? <View style={styles.topCover} /> : null}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image source={backIcon} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.relatedText}>Related Polls</Text>
//       </View>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.scrollContainer}>{relatedPollsDisplay}</View>
//       </ScrollView>
//     </View>
//   )
// }

// relatedPolls.defaultProps = {
//   pollsData: [
//     {
//       question: 'Who are your favorites for the World Cup 2020?',
//       votes: 54,
//       timeLeft: 2,
//       isPollActive: true,
//       voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
//       option: ['India', 'West Indies', 'Australia', 'England'],
//       onPressVote: () => {}
//     },
//     {
//       question: 'Who are your favorites for the World Cup 2020?',
//       votes: 54,
//       timeLeft: 2,
//       isPollActive: true,
//       voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
//       option: ['India', 'West Indies', 'Australia', 'England'],
//       onPressVote: () => {}
//     },
//     {
//       question: 'Who are your favorites for the World Cup 2020?',
//       votes: 54,
//       timeLeft: 2,
//       isPollActive: true,
//       voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
//       option: ['India', 'West Indies', 'Australia', 'England'],
//       onPressVote: () => {}
//     }
//   ]
// }

// export default withApollo(relatedPolls)
import React, { useState, useEffect } from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity, Platform } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import { withApollo } from 'react-apollo'
import moment from 'moment'
import PropTypes from 'prop-types'
import RelatedPoll from '../../Components/RelatedPoll'
import PopularPoll from '../../Components/PopularPoll'
// Styles
// import styles from '../Styles/Storyline/RelatedPollsStyle'
import styles from '../Styles/StoryLine/RelatedPollsStyle'

import images from '../../Themes/Images'
import {
  POLL_DETAIL,
  GET_MULTIMEDIA,
  USER_DETAILS,
  USER_POLL,
  add_PollParticipant,
  update_PollOption,
  update_totalVotes
} from './my_queries'
type Props = NavigationContainerProps & {
  pollsData: Array<{
    question: string,
    votes: number,
    timeLeft: number,
    isPollActive: boolean,
    voterIcons: Array<string>,
    option: Array<string>,
    onPressVote: PropTypes.func
  }>
}
const relatedPolls = (props: Props) => {
  const client = props.client
  var [RPArr, setRP] = useState([])
  var [PPArr, setPP] = useState([])
  var [dataUser, setDU] = useState([])
  const user_id = '5081a186-6c47-48fa-aaff-dbd5f45ee242'
  let isVideo = false
  const fetchImgUrl = async (MMId) => {
    const imgUrl = []
    for (let i = 0; i < MMId.length; i += 1) {
      const { data } = await client.query({
        query: GET_MULTIMEDIA,
        variables: { multimedia_id: MMId[i] },
        fetchPolicy: 'cache-first'
      })
      imgUrl.push(data.GetMultimedia.url)
      if (data.GetMultimedia.multimedia_type === 'VIDEO') isVideo = true
      else isVideo = false
    }
    return imgUrl
  }
  const fetchImgUrlForCommentor = async (allUserWhoCommented) => {
    const allUserMultimediaIds = []
    for (let i = 0; i < allUserWhoCommented.length; i += 1) {
      const { data } = await client.query({
        query: USER_DETAILS,
        variables: { user_id: allUserWhoCommented[i] },
        fetchPolicy: 'cache-first'
      })
      if (data.GetUserDetails[0].profile_picture != null)
        allUserMultimediaIds.push(data.GetUserDetails[0].profile_picture)
      // console.log(allUserWhoCommented[i],data.GetUserDetails[0].profile_picture)
    }
    const x = await fetchImgUrl(allUserMultimediaIds)
    return x
  }
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
  const onPressVoteUtil = async ({optionSelected,index,poll_id,votesArray,pollOptionId}) =>{
    const option_voted_id = pollOptionId[optionSelected-1]
    const  changedoptionVotes = votesArray[optionSelected-1] + 1
    const  total_no_of_votes =votesArray.reduce((a, b) => a + b, 0)+1
    try {
      const { data: dataapollpaticipant, error: errorpollparicipant } = await client.mutate({
        mutation: add_PollParticipant,
        variables: { user_id: user_id, poll_id: poll_id, option_voted: option_voted_id }
      })
    } 
    catch(e){
      console.log(e)
    }
    try {
      const { data: datapolloption, error: errorpolloption } = await client.mutate({
        mutation: update_PollOption,
        variables: {
          poll_question: poll_id,
          poll_option_id: option_voted_id,
          number_of_votes: changedoptionVotes
        }
      })
    } catch (errorpolloption) {
      throw errorpolloption
    }
    try {
      const { data: dataVotes, error: errorVotes } = await client.mutate({
        mutation: update_totalVotes,
        variables: { poll_id: poll_id, total_no_of_votes: total_no_of_votes }
      })
    } catch (errorVotes) {
      throw errorVotes
    }
    setPollResult({optionSelected,index})
  } 
  const displayPP = async (Arr) => {
    const tempPollDataRP = []
    const tempPollDataPP = []
    for (let i = 0; i < Arr.length; i += 1) {
      const poll_id = Arr[i]
      const { data, loading, error } = await client.query({
        query: POLL_DETAIL,
        variables: { poll_id }
      })
      const pollDetail = data.GetPoll
      const pollOptionDetail = data.GetPollOptions
      const userParticipatedPoll = dataUser.GetPollParticipantUser.filter((x) => {
        return x.poll_id === poll_id
      })
      const pollParticipant = data.GetPollParticipant.map((x) => x.user_id)
      const pollOptionId=pollOptionDetail.map((x) => x.poll_option_id)
      const pollParticipantImgUrl = await fetchImgUrlForCommentor(pollParticipant)
      const { question, expiring_time, is_open } = pollDetail
      const optionArray = pollOptionDetail.map((x) => x.option)
      const votesArray = pollOptionDetail.map((x) => x.number_of_votes)
      const totalVotes = votesArray.reduce((a, b) => a + b)
      const currentTime = new Date().toISOString()
      const timeLeft = await timeDiffCal(expiring_time, currentTime)
      while (optionArray.length < 4) {
        optionArray.push('None')
        votesArray.push(0)
      }
      pollParticipantImgUrl = pollParticipantImgUrl.slice(
        1,
        Math.min(pollParticipantImgUrl.length + 1, 4)
      )
      // For the poll
      tempPollDataRP.push({
        question,
        votes: totalVotes,
        timeLeft: `${timeLeft} left`,
        isPollActive: is_open,
        voterIcons: pollParticipantImgUrl,
        option: optionArray,
        onPressVote: async (optionSelected,index) => {
          await onPressVoteUtil({optionSelected,index,poll_id,votesArray,pollOptionId})
        }
      })
      // For the poll results
      const progressBar = []
      for (let i = 0; i < optionArray.length; i += 1) {
        const percentage = Math.round((100 * votesArray[i]) / totalVotes)
        progressBar[i] = { name: optionArray[i], percentage }
      }
      tempPollDataPP.push({
        border: true,
        question,
        votes: totalVotes,
        timeLeft: `${timeLeft} left`,
        isPollActive: is_open,
        voterIcons: pollParticipantImgUrl,
        progressBar,
        activeProgressBar: userParticipatedPoll.length > 0 ? userParticipatedPoll[1] : -1
      })
    }
    setRP(tempPollDataRP)
    setPP(tempPollDataPP)
  }
  const display = async () => {
    const PollArr = [
      // 'c17f60c9-cea2-411e-9af3-4298c7b18ca8',
      '5c1af7f0-971d-480e-b146-26d4179bef2d',
      '2970fa5e-5ca4-4b89-b16f-d1a899f2dd2e',
      // '92a338e7-74c8-4688-b386-6302a1edd4e9',
      'd72395b4-765a-4113-a43b-eab44e579136',
      'a7749d5c-173a-4598-8f5f-0b69f3f6c891',
      '5ddac403-dc5e-46ed-86e1-55cbeaece716',
      '39ff0b9a-3cfc-4af5-be47-5345f8f4e755',
      '2e90f303-a6cf-4a68-b8db-1ecf0d900d15',
      '9c8e2ff2-cb7b-4500-80bb-f7d54382cba8'
    ]
    const { data } = await client.query({
      query: USER_POLL,
      variables: { user_id },
      fetchPolicy: 'cache-first'
    })
    dataUser = data
    await displayPP(PollArr)
  }
  useEffect(() => {
    display()
  }, [])
  const { navigation, pollsData } = props
  const { backIcon } = images

  const [result, setResult] = useState(Array(pollsData.length).fill(false))

  const setPollResult = ({optionSelected,index}) => {
    const updatedRelatedPollDataResults = [...result]
    updatedRelatedPollDataResults[index] = true
    setResult(updatedRelatedPollDataResults)
  }

  const relatedPollsDisplay = RPArr.map((item, index) => {
    return (
      <View key={index} style={styles.previewContainer}>
        {result[index] ? (
          <PopularPoll
            border={PPArr[index].border}
            question={PPArr[index].question}
            votes={PPArr[index].votes}
            timeLeft={PPArr[index].timeLeft}
            isPollActive={PPArr[index].isPollActive}
            voterIcons={PPArr[index].voterIcons}
            progressBar={PPArr[index].progressBar}
            activeProgressBar={PPArr[index].activeProgressBar}
          />
        ) : (
          <RelatedPoll
            question={item.question}
            votes={item.votes}
            timeLeft={item.timeLeft}
            isPollActive={item.isPollActive}
            voterIcons={item.voterIcons}
            option={item.option}
            onPressVote={(optionSelected)=>{item.onPressVote(optionSelected,index)}}
          />
        )}
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
        <Text style={styles.relatedText}>Related Polls</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContainer}>{relatedPollsDisplay}</View>
      </ScrollView>
    </View>
  )
}

relatedPolls.defaultProps = {
  pollsData: [
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England'],
      onPressVote: () => {}
    },
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England'],
      onPressVote: () => {}
    },
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England'],
      onPressVote: () => {}
    }
  ]
}

export default withApollo(relatedPolls)
