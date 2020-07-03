/* eslint-disable */
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag'
export const getPoll = gql`
  query getPollDetails($poll_id: ID!) {
    GetPoll(poll_id: $poll_id) {
      question
      is_open
      expiring_time
      total_no_of_votes
      t_create
    }
    GetPollOptions(poll_question: $poll_id){
      option
      poll_option_id
      number_of_votes
    }
    GetComments(resource_id: $poll_id){
      commented_by
      parent_comment_id
      comment_id
      comment_text
      t_create
    }
    GetPollParticipant(poll_id: $poll_id){
    user_id
    option_voted
  }
  }
`;
export const getUserDetails = gql`
  query getVoterDetails($user_id: ID!) {
    GetUserDetails(user_id: $user_id) {
      profile_picture
    }
  }
`;
export const getName = gql`
  query getUserName($user_id: ID!){
    GetUserDetails(user_id: $user_id){
      name
    }
  }
`
export const getMultimedia = gql`
  query getVoterIcons($multimedia_id: ID!){
    GetMultimedia(multimedia_id: $multimedia_id){
      url
    }
  }
`
export const getBoosts = gql`
  query getBoostforComment($boostContent_id: ID!){
    GetBoostsbyContent(boostContent_id: $boostContent_id){
      boost_id
    }
  }
`
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;