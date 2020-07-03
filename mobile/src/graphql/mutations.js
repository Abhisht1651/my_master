/* eslint-disable */
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag'
export const add_PollParticipant = gql`
    mutation ($user_id: ID!, $poll_id: ID!, $option_voted: ID!){
      AddPollParticipant(user_id: $user_id, poll_id: $poll_id, option_voted: $option_voted){
        option_voted
      }
    }
  `
export const update_PollOption = gql`
  mutation ($poll_question: ID!, $poll_option_id: ID!, $number_of_votes: Int!){
    UpdatePollOption(poll_question: $poll_question, poll_option_id: $poll_option_id, number_of_votes: $number_of_votes){
      number_of_votes
    }
  }
`
export const add_comment = gql`
  mutation ($comment_id: ID!, $commented_by: ID!, $comment_text: String!, $resource_id: ID!, $parent_comment_id: ID!){
    AddComment(comment_id: $comment_id, commented_by: $commented_by, comment_text: $comment_text, resource_id: $resource_id, parent_comment_id: $parent_comment_id){
      comment_text
    }
  }
`
export const update_totalVotes = gql`
  mutation ($poll_id: ID!, $total_no_of_votes: Int!){
    UpdateVotes(poll_id: $poll_id, total_no_of_votes: $total_no_of_votes){
      total_no_of_votes
    }
  }
`
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
    }
  }
`;
