import gql from 'graphql-tag'

export const getStorylineDetails =gql`
    query getStorylineDetails($storyline_id:ID!)  {
      GetStoryline(storyline_id:$storyline_id){
        topic
        category
        is_live
        is_active
        is_trending
        is_single_event
        followers
        last_updated
      }
    }
`;
export const getuser=gql`
      query  getuser($user_id:ID!) {
        GetUserDetails(user_id:$user_id){
          name
          profile_picture
        }
      }
`

export const updateStorylineFollowers=gql`
    mutation updateStorylineFollowers ($storyline_id:ID!,$followers:Int!,$reach:Int!){
      UpdateStoryline(storyline_id:$storyline_id,followers:$followers,reach:$reach){
        followers
      }
    }
`;
export const getuserfollow=gql`
      query getuserfollow($user:ID!){
        GetUserStorylines(user:$user){
          storyline
    
  }
}
`

export const addStorylineFollower=gql` 
    mutation  addStorylineFollower($storyline:ID!,$user:ID!) {
      AddStorylineFollower(storyline:$storyline,user:$user){
        user
      }
    }
`

export const deleteStorylineFollower=gql`
    mutation deleteStorylineFollower($storyline:ID!,$user:ID!) {
      DeleteStorylineFollower(storyline:$storyline,user:$user){
        user
      }
    }
    
`

// export const addUserToStoryline=gql`
//     mutation ($user:!ID,$storyline:ID!) {
//       AddStorylineFollower(user:$user,storyline:$storyline){
//         user
//       }
//       AddStorylineReach(user_id:$user,storyline_id:$storyline){
//         user_id
//       }
//     }
// `


export const add_PollParticipant = gql`
    mutation add_PollParticipant($user_id: ID!, $poll_id: ID!, $option_voted: ID!){
      AddPollParticipant(user_id: $user_id, poll_id: $poll_id, option_voted: $option_voted){
        option_voted
      }
    }
  `
  export const update_PollOption = gql`
  mutation update_PollOption($poll_question: ID!, $poll_option_id: ID!, $number_of_votes: Int!){
    UpdatePollOption(poll_question: $poll_question, poll_option_id: $poll_option_id, number_of_votes: $number_of_votes){
      number_of_votes
    }
  }
`
export const POLL_DETAIL = gql`
  query POLL_DETAIL($poll_id: ID!) {
    GetPoll(poll_id: $poll_id) {
      heading
      is_open
      expiring_time
      question
    }
    GetPollOptions(poll_question: $poll_id) {
      poll_option_id
      option
      number_of_votes
    }
    GetPollParticipant(poll_id: $poll_id) {
      user_id
    }
  }
`
export const USER_POLL = gql`
  query USER_POLL($user_id: ID!) {
    GetPollParticipantUser(user_id: $user_id) {
      poll_id
      option_voted
    }
  }
`
export const GET_MULTIMEDIA = gql`
  query GET_MULTIMEDIA($multimedia_id: ID!) {
    GetMultimedia(multimedia_id: $multimedia_id) {
      url
      multimedia_type
    }
  }
`
export const USER_DETAILS = gql`
  query USER_DETAILS($user_id: ID!) {
    GetUserDetails(user_id: $user_id) {
      profile_picture
      name
    }
  }
`


export const add_comment = gql`
  mutation add_comment($comment_id: ID!, $commented_by: ID!, $comment_text: String!, $resource_id: ID!, $parent_comment_id: ID!){
    AddComment(comment_id: $comment_id, commented_by: $commented_by, comment_text: $comment_text, resource_id: $resource_id, parent_comment_id: $parent_comment_id){
      comment_text
    }
  }
`
export const update_totalVotes = gql`
  mutation  update_totalVotes($poll_id: ID!, $total_no_of_votes: Int!){
    UpdateVotes(poll_id: $poll_id, total_no_of_votes: $total_no_of_votes){
      total_no_of_votes
    }
  }
`

export const getEventComments =gql`
    query getEventComments($resource_id :ID!)  {  
      GetComments(resource_id:$resource_id){
        comment_id
        commented_by
        comment_text
        parent_comment_id
        t_create
        
      }
    }
`;

// export const addEventComment=gql`
//     mutation ($comment_id: ID!, $commented_by: ID!, $comment_text: String!, $resource_id: ID!, $parent_comment_id: ID!){
//       AddComment(comment_id: $comment_id, commented_by: $commented_by, comment_text: $comment_text, resource_id: $resource_id, parent_comment_id: $parent_comment_id){
//         comment_text
//       }
//     }

// `
export const getCommentBoosts=gql`
    query getCommentBoosts($boostContent_id:ID!){
      GetBoostsbyContent(boostContent_id:$boostContent_id){
        boostBy
        boost_id
      }
    }
`

// export const getUserAll = gql`
//   query getUserAll($user_id: ID!) {
//     GetUserStorylines(user: $user_id) {
//       storyline
//     }
//     GetPollParticipantUser(user_id: $user_id) {
//       poll_id
//       option_voted
//     }
//   }
// `


// export const addBoostOnComment=gql`
//     mutation($boost_id:ID!,$boostBy:ID!,$boostContent_id:ID!){
//       AddBoost(boost_id:$boost_id,boostBy:$boostBy,boostContent_id:$boostContent_id){
//         boostContent_id
//       }
//     }
// `
// export const removeUnboostOnComment=gql`
//     mutation($boost_id:ID!) {
//       DeleteBoost(boost_id:$boost_id){
//         boostBy
//       }
//     }

// `

export const getrelatedStorylineEvents=gql`
    query  getrelatedStorylineEvents($storyline_id:ID!) {
      GetStorylineEvents(storyline_id:$storyline_id){
        event
      }
    }
`



export const getStorylineEvents=gql`
    query  getStorylineEvents($event_id:ID!){
      GetEvent(event_id:$event_id){
        event_id
        headline
        event_time
        t_create
        image
      }
    }

`

export const getRelatedStorylines=gql`
    query  getRelatedStorylines($storyline_id1:ID!) {
      getStorylineStoryline(storyline_id1:$storyline_id1){
        storyline_id2
        rank
      }
    }
`
// export const getDetailsOfRelatedStorylines=gql`
//     query getDetailsOfRelatedStorylines($storyline_id1:ID!) {
//       GetStoryline(storyline_id:$storyline_id1:ID!){
//         topic
//         category
//         is_trending
//         is_live
//         is_active
//         reach
//         followers
//         last_updated
//         is_single_event
//       }
//     }
// `

// export const getLatestEvent=gql`
//     query  getLatestEvent($storyline_id:ID!){
//       GetStorylineEvents(storyline_id:$storyline_id){
//         event
//         t_create
//       }
//     }
// `

// export const getMultimediaDetails =gql`
//     query getMultimediaDetails($multimedia_id:ID!) {
//       GetMultimedia(multimedia_id:$multimedia_id){
//         multimedia_type
//         t_create
//         url
//       }
//     }

// `
export const getRelatedEntities =gql`
    query getRelatedEntities($entity_id:ID!) {
      GetRelatedStorylinesToEntity(entity_id:$entity_id){
        entity_id
      }
    }
`

export const getEntityDetails =gql`
    query getEntityDetails($entity_id:ID!){
      GetEntity(entity_id:$entity_id){
        name
        image
        followers
      }
    }
`
// // export const getMultimediaDetails=gql`
// //     query getMultimediaDetails($multimedia_id:ID!){
// //       GetMultimedia(multimedia_id:$multimedia_id){
// //         multimedia_id
// //         t_create
// //         url
// //       }
// //     }

// // `

// export const getRelatedPolls =gql`
//     query   getRelatedPolls($storyline_id:ID!)  {
//       GetRelatedPollstoStoryline(storyline_id:$storyline_id){
//             poll_id
//           }
//   }
// `

// export const getPollDetails =gql`
//     query getPollDetails($poll_id:ID!) {
//       GetPoll(poll_id:$poll_id){
//         heading
//         is_open
//         created_on
//         expiring_time
//         question
        
//       }
//     }

//  `
// export const getpolloption=gql`
//     query getpolloption($poll_question:ID!){
//       GetPollOptions(poll_question:$poll_question){
//         poll_option_id
//         option
//         number_of_votes
//       }
//     }
// `

// export const getStorylineGallery =gql`
//     query getStorylineGallery($resource_id:ID!){
//       GetMultimediaResource(resource_id:$resource_id){
//         multimedia_id
//       }
//     }

// `
// // export const getMultimediaDetails=gql`
// //     query getMultimediaDetails($multimedia_id:ID!) {
// //       GetMultimedia(multimedia_id:$multimedia_id){
// //         multimedia_type
// //         t_create
// //         url
// //       }
// //     }

// // `
export const getEventDetails =gql`
    query getEventDetails($event_id:ID!)  {
      GetEvent(event_id:$event_id){
        headline
        event_time
        image
        description
        no_of_comments
        t_update
        t_create
      }
    }
`

export const getMultimediaDetails=gql`
    query getMultimediaDetails($multimedia_id:ID!) {
      GetMultimedia(multimedia_id:$multimedia_id){
        multimedia_type
        t_create
        url
      }
    }

`

export const  getEventSources=gql`
    query  getEventSources($event_id:ID!) {
      GetEventArticle(event_id:$event_id){
        article_id
      }
      
      }

`
export const getnews=gql`
    query getnews($article_id:ID!) {
      GetNewsArticle(article_id:$article_id){
          headline
          publisher
          t_update
      }
    }
`


export const addFriend=gql`
    mutation addFriend($user_id1:ID!,$user_id2:ID!) {
      addFriend(user_id1:$user_id1,user_id2:$user_id2,status:PENDING){
        user_id1
        user_id2
      }
    }
`
export const  unfriendUser=gql`
    mutation  unfriendUser($user_id1:ID!,$user_id2:ID!){
      unfriendUser(user_id1:$user_id1,user_id2:$user_id2){
        user_id1
        status
      }
    }
`
export const AddEntityFollower = gql`
  mutation AddEntityFollower($user_id: ID!, $entity_id: ID!) {
    AddEntityFollower(user_id: $user_id, entity_id: $entity_id) {
      user_id
    }
  }
`
export const deleteEntityFollower = gql`
  mutation deleteEntityFollower($entity_id: ID!, $user_id: ID!) {
    DeleteEntityFollower(user_id: $user_id, entity_id: $entity_id)
  }
`
export const updateEntityFollowers = gql`
  mutation updateEntityFollowers($entity_id: ID!, $followers: Int!) {
    UpdateEntity(entity_id: $entity_id, followers: $followers) {
      entity_id
      followers
    }
  }
`
export const GetEntityFollower = gql`
  query GetEntityFollower($entity_id: ID!, $user_id: ID!) {
    GetEntityFollower(entity_id: $entity_id, user_id: $user_id) {
      user_id
    }
  }
`