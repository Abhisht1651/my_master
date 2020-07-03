// import React, { useState, useEffect, useRef } from 'react'
// import PropTypes from 'prop-types'
// // import { View, Text, Image, TouchableOpacity } from 'react-native'
// import { View, ScrollView, Image, Text, TouchableOpacity, Platform } from 'react-native'

// import styles from './Styles/RelatedPollStyle'
// import images from '../Themes/Images'
// import {getRelatedPolls,getPollDetails,getpolloption,getMultimediaDetails} from '../Containers/StoryLine/my_queries'
// import {add_PollParticipant,update_PollOption,update_totalVotes,add_comment} from '../Containers/StoryLine/my_queries'

// import {withApollo} from 'react-apollo';
// import { MediumThinnerButton } from './Buttons/MediumThinnerButton'
// import moment from 'moment'

// // type Props = {
// //   border: boolean,
// //   question: string,
// //   votes: number,
// //   timeLeft: number,
// //   isPollActive: boolean,
// //   voterIcons: Array<string>,
// //   option: Array<string>,
// //   onPressVote: PropTypes.func
// // }
// const relatedPoll = (props) => {
  
//   var [relatedPoll,setFeed]=useState([]);
//   var [option,setoption]=useState([]);
//   var [url,seturl]=useState([]);
//   var [poll_id,setpoll_id]=useState([]);
//   var [number_of_votes_arr,setnumber_of_votes_arr]=useState([])
//   var [poll_option_id_arr,setpoll_option_id_arr]=useState([])
//   const client=props.client;
//   if (!client){
//     console.log("CLient not working")
//   }
//   const displayrelatedentity = async (client) =>{
//     try{
//       let source=[];
//       let item={};
//       const multi_id="9287fdfa-9f1b-11ea-bb37-0242ac130002";
//       const {data:datamulti,loading:loadingmulti}= await client.query({query:getMultimediaDetails,variables:{multimedia_id:multi_id}});
//       const {url}=datamulti.GetMultimedia;
//       seturl(url);
//       }
//     catch(e){
//       console.log(e)
//       }
//     }
//   useEffect(() => {displayrelatedentity(client);}, []);

//   const storyline_id="629e108e-672c-426a-9731-7039e72de685";
//   const displayPolls = async (client,storyline_id) =>{
//     try{
//       var source=[];
//       let item={};
//       const {data: dataRelatedPoll, loading: loadingRelatedPoll} = await client.query({query: getRelatedPolls, variables: {storyline_id}});
//       const {x,poll_id}=dataRelatedPoll.GetRelatedPollstoStoryline[0];
//       setpoll_id(poll_id);
//       const {data: dataPoll, loading: loadingPoll} = await client.query({query: getPollDetails, variables: {poll_id}});
//       const {heading,is_open, created_on, expiring_time,question}=dataPoll.GetPoll;
//       const {data: dataPolloption, loading: loadingPolloption} = await client.query({query: getpolloption, variables: {poll_question:poll_id}});
//       // console.log(dataPolloption)
//       var number_of_votes_arr=[]
//       var options=[]
//       var poll_option_id_arr=[]
//       for (var j = 0; j < dataPolloption.GetPollOptions.length; j++) {
//         const {number_of_votes,option,poll_option_id}=dataPolloption.GetPollOptions[j];
//         options[j]=option
//         number_of_votes_arr[j]=number_of_votes
//         poll_option_id_arr[j]=poll_option_id
//       }
//       item['border']=true;
//       item['question']=question;
//       item['votes']=number_of_votes_arr.reduce((a, b) => a + b, 0);
//       item['timeLeft']=expiring_time;
//       item['isPollActive']=is_open;
//       // item['voterIcons']=[images.voterIcon1, images.voterIcon2, images.voterIcon3]
//       item['onPressVote']=async (optionSelected) => { await relatedpollvoting(client,poll_id,number_of_votes_arr,poll_option_id_arr,optionSelected)}; 
//       // item['onPressVote']=()=>{}     
//       // console.log(optionSelected)
//       source[0]=item;
//       setFeed(item);
//       setoption(options)
//       setnumber_of_votes_arr(number_of_votes_arr);
//       setpoll_option_id_arr(poll_option_id_arr)
//       }
//     catch(e){
//       console.log(e)
//       }
//     }
//   useEffect(async() => {await displayPolls(client,storyline_id);}, []);
//   const { pollActiveIcon, pollInactiveIcon } = images
//   var { border, question, votes, timeLeft, isPollActive, onPressVote} = relatedPoll
//   const voterIcons=[url,url, url];
//   // const voterIcons=[images.voterIcon1, images.voterIcon2, images.voterIcon3]
//   // console.log(voterIcons)
//   const pollIcon = isPollActive ? pollActiveIcon : pollInactiveIcon
//   const pollText = isPollActive ? `${timeLeft}` : 'Poll ended'

//   const [optionSelected, setOptionSelected] = useState(0);

//   const optionSelectFunction = async (currentOption) => {
//     if (currentOption === optionSelected) { 
//       setOptionSelected(0)
//       return
//     }
//     setOptionSelected(currentOption)
//   }

//   // console.log(optionSelected,"hi")
//   // setOptionSelected(optionSelected)

  // const relatedpollvoting = async (client,poll_id,number_of_votes_arr,poll_option_id_arr,optionSelected) => {
  //   const option_voted_id = poll_option_id_arr[1]
  //   const  changedoptionVotes = number_of_votes_arr[1] + 1
  //   const  total_no_of_votes =number_of_votes_arr.reduce((a, b) => a + b, 0)+1
  //   const  user_id = "1219"
  //   // console.log("Hi")
  //   console.log(optionSelected,"hello") 
  //   try {
  //     const { data: dataapollpaticipant, error: errorpollparicipant } = await client.mutate({
        
  //       mutation: add_PollParticipant,
  //       variables: { user_id: user_id, poll_id: poll_id, option_voted: option_voted_id }
  //     })
  //   } 
  //   catch(e){
  //     console.log(e)
  //   }
    
  //   try {
  //     const { data: datapolloption, error: errorpolloption } = await client.mutate({
  //       mutation: update_PollOption,
  //       variables: {
  //         poll_question: poll_id,
  //         poll_option_id: option_voted_id,
  //         number_of_votes: changedoptionVotes
  //       }
  //     })
  //   } catch (errorpolloption) {
  //     throw errorpolloption
  //   }
  //   console.log( total_no_of_votes)
  //   try {
  //     const { data: dataVotes, error: errorVotes } = await client.mutate({
  //       mutation: update_totalVotes,
  //       variables: { poll_id: poll_id, total_no_of_votes: total_no_of_votes }
  //     })
  //   } catch (errorVotes) {
  //     throw errorVotes
  //   }
  // }
//   const voterIconsElement = voterIcons.map((voterIcon, index) => (
//     <Image source={{uri:voterIcon.toString()}} key={index} style={styles.voterIcon} />
//   ))

//   return (
//     <View style={border ? styles.container : styles.containerWithoutBorder}>
//       <View style={styles.questionContainer}>
//         <Text style={styles.questionText}>{question}</Text>
//       </View>
//       <View style={styles.voterAndVotesContainer}>
//         <View style={styles.voterContainer}>
//           <View style={styles.voterIconContainer}>{voterIconsElement}</View>
//           <View style={styles.votesContainer}>
//             <Text style={styles.votes}>{votes} votes</Text>
//           </View>
//         </View>
//         <View style={styles.timeContainer}>
//           <View style={styles.timeIconContainer}>
//             <Image source={pollIcon} style={styles.pollIcon} />
//           </View>
//           <View style={styles.timeTextContainer}>
//             <Text style={styles.timeText}>{pollText}</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.optionsContainer}>
//         <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(1)}>
//           <View style={styles.option}>
//             {optionSelected === 1 ? <View style={styles.optionFill} /> : null}
//           </View>
//           <View style={styles.optionTextContainer}>
//   <Text style={styles.optionText}>{option[0]}</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(2)}>
//           <View style={styles.option}>
//             {optionSelected === 2 ? <View style={styles.optionFill} /> : null}
//           </View>
//           <View style={styles.optionTextContainer}>
//             <Text style={styles.optionText}>{option[1]}</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.optionsContainer}>
//         <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(3)}>
//           <View style={styles.option}>
//             {optionSelected === 3 ? <View style={styles.optionFill} /> : null}
//           </View>
//           <View style={styles.optionTextContainer}>
//             <Text style={styles.optionText}>{option[2]}</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(4)}>
//           <View style={styles.option}>
//             {optionSelected === 4 ? <View style={styles.optionFill} /> : null}
//           </View>
//           <View style={styles.optionTextContainer}>
//             <Text style={styles.optionText}>{option[2]}</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.buttonContainer}>
//         <MediumThinnerButton title="Vote" outline onPress={onPressVote} />
//       </View>
//     </View>
//   )
// }


// // relatedPoll.defaultProps = {
// //   border: true,
// //   question: 'Who are your favorites for the World Cup 2020?',
// //   votes: 54,
// //   timeLeft: 2,
// //   isPollActive: true,
// //   voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
// //   option: ['Bharat', 'West ', 'Australia'],
// //   onPressVote: () => {}
// // }
// export default withApollo(relatedPoll)
// @flow
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/RelatedPollStyle'
import images from '../Themes/Images'

// Components
import { MediumThinnerButton } from './Buttons/MediumThinnerButton'

type Props = {
  border: boolean,
  question: string,
  votes: number,
  timeLeft: number,
  isPollActive: boolean,
  voterIcons: Array<string>,
  option: Array<string>,
  onPressVote: PropTypes.func
}

const relatedPoll = (props: Props) => {
  const { pollActiveIcon, pollInactiveIcon } = images
  const { border, question, votes, timeLeft, isPollActive, voterIcons, option,onPressVote } = props
  const pollIcon = isPollActive ? pollActiveIcon : pollInactiveIcon
  const pollText = isPollActive ? `${timeLeft}` : 'Poll ended'

  const [optionSelected, setOptionSelected] = useState(0)

  const optionSelectFunction = (currentOption) => {
    if (currentOption === optionSelected) {
      setOptionSelected(0)
      return
    }
    setOptionSelected(currentOption)
  }
  const voterIconsElement = voterIcons.map((voterIcon, index) => (
    <Image source={{uri:voterIcon.toString()}} key={index} style={styles.voterIcon} />
  ))
  return (
    <View style={border ? styles.container : styles.containerWithoutBorder}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <View style={styles.voterAndVotesContainer}>
        <View style={styles.voterContainer}>
          <View style={styles.voterIconContainer}>{voterIconsElement}</View>
          <View style={styles.votesContainer}>
            <Text style={styles.votes}>{votes}K votes</Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View style={styles.timeIconContainer}>
            <Image source={pollIcon} style={styles.pollIcon} />
          </View>
          <View style={styles.timeTextContainer}>
            <Text style={styles.timeText}>{pollText}</Text>
          </View>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(1)}>
          <View style={styles.option}>
            {optionSelected === 1 ? <View style={styles.optionFill} /> : null}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{option[0]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(2)}>
          <View style={styles.option}>
            {optionSelected === 2 ? <View style={styles.optionFill} /> : null}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{option[1]}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(3)}>
          <View style={styles.option}>
            {optionSelected === 3 ? <View style={styles.optionFill} /> : null}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{option[2]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(4)}>
          <View style={styles.option}>
            {optionSelected === 4 ? <View style={styles.optionFill} /> : null}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{option[3]}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <MediumThinnerButton
          title="Vote"
          outline
          onPress={optionSelected !== 0 ? ()=>{onPressVote(optionSelected)} : () => {}}
        />
      </View>
    </View>
  )
}
relatedPoll.defaultProps = {
  border: true,
  question: 'Who are your favorites for the World Cup 2020?',
  votes: 54,
  timeLeft: 2,
  isPollActive: true,
  voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
  option: ['India', 'West Indies', 'Australia', 'England'],
  onPressVote: (x) => {console.log(x)}
}

export default relatedPoll
