// @flow

import React from 'react'
import { Mutation } from 'react-apollo'
import { Text, View, TouchableOpacity } from 'react-native'
import {
  updateStorylineFollowers,
  addStorylineFollower,
  deleteStorylineFollower,
  add_PollParticipant,
  update_PollOption,
  update_totalVotes,
  AddEntityFollower,
  deleteEntityFollower,
  updateEntityFollowers,
  addFriend,
  unfriendUser
} from './my_queries'
export const UpdateStorylineFollowers = ({
  storyline_id,
  followers,
  reach
}: {
  storyline_id: string,
  followers: Number,
  reach: Number
}) => (
  <Mutation mutation={updateStorylineFollowers}>
    {(mutate, { loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      if (data) return <Text>{data.UpdateStoryline.followers}</Text>
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              mutate({
                variables: {
                  storyline_id,
                  followers,
                  reach
                }
              })
            }
          />
        </View>
      )
    }}
  </Mutation>
)

export const AddStorylineFollowers = ({
  storyline,
  user
}: {
  storyline_id: string,
  user: String
}) => (
  <Mutation mutation={addStorylineFollower}>
    {(mutate, { loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      if (data) return <Text>{data.AddStorylineFollower[0].user}</Text>
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              mutate({
                variables: {
                  storyline,
                  user
                }
              })
            }
          />
        </View>
      )
    }}
  </Mutation>
)

export const DeleteStorylineFollower = ({
  storyline,
  user
}: {
  storyline_id: string,
  user: String
}) => (
  <Mutation mutation={deleteStorylineFollower}>
    {(mutate, { loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      if (data) {
        return <Text>{data.DeleteStorylineFollower[0].user}</Text>
      }
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              mutate({
                variables: {
                  storyline,
                  user
                }
              })
            }
          />
        </View>
      )
    }}
  </Mutation>
)

export const AddPollParticipant = ({
  poll_id,
  user_id,
  option_voted
}: {
  poll_id: string,
  user_id: String,
  option_voted: String
}) => (
  <Mutation mutation={add_PollParticipant}>
    {(mutate, { loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      if (data) {
        return <Text>{data.AddPollParticipant[0].option_voted}</Text>
      }
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              mutate({
                variables: {
                  poll_id,
                  user_id,
                  option_voted
                }
              })
            }
          />
        </View>
      )
    }}
  </Mutation>
)

export const UpdatePollOption = ({
  poll_question,
  poll_option_id,
  number_of_votes
}: {
  poll_question: string,
  poll_option_id: String,
  number_of_votes: Number
}) => (
  <Mutation mutation={update_PollOption}>
    {(mutate, { loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      if (data) {
        return <Text>{data.UpdatePollOption[0].number_of_votes}</Text>
      }
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              mutate({
                variables: {
                  poll_question,
                  poll_option_id,
                  number_of_votes
                }
              })
            }
          />
        </View>
      )
    }}
  </Mutation>
)

export const UpdateTotalVotes = ({
  poll_id,
  total_no_of_votes
}: {
  poll_id: string,
  total_no_of_votes: Number
}) => (
  <Mutation mutation={update_totalVotes}>
    {(mutate, { loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      if (data) {
        return <Text>{data.UpdateVotes.total_no_of_votes}</Text>
      }
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              mutate({
                variables: {
                  poll_id,
                  total_no_of_votes
                }
              })
            }
          />
        </View>
      )
    }}
  </Mutation>
)

export const EntityFollower = ({ user_id, entity_id }: { user_id: string, entity_id: Number }) => (
  <Mutation mutation={AddEntityFollower}>
    {(mutate, { loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      if (data) {
        return <Text>{data.AddEntityFollower[0].user_id}</Text>
      }
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              mutate({
                variables: {
                  user_id,
                  entity_id
                }
              })
            }
          />
        </View>
      )
    }}
  </Mutation>
)

export const DeleteEntityFollower = ({
  user_id,
  entity_id
}: {
  user_id: string,
  entity_id: Number
}) => (
  <Mutation mutation={deleteEntityFollower}>
    {(mutate, { loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      if (data) {
        return <Text>{data.DeleteEntityFollower}</Text>
      }
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              mutate({
                variables: {
                  user_id,
                  entity_id
                }
              })
            }
          />
        </View>
      )
    }}
  </Mutation>
)

export const UpdateEntityFollowers = ({
  followers,
  entity_id
}: {
  followers: Number,
  entity_id: String
}) => (
  <Mutation mutation={updateEntityFollowers}>
    {(mutate, { loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      if (data) {
        return <Text>{data.UpdateEntity}</Text>
      }
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              mutate({
                variables: {
                  entity_id,
                  followers
                }
              })
            }
          />
        </View>
      )
    }}
  </Mutation>
)

export const AddFriend = ({ user_id1, user_id2 }: { user_id1: String, user_id2: String }) => (
  <Mutation mutation={addFriend}>
    {(mutate, { loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      if (data) {
        return (
          <Text>
            {data.addFriend.user_id1}
            {data.addFriend.user_id2}
          </Text>
        )
      }
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              mutate({
                variables: {
                  user_id1,
                  user_id2
                }
              })
            }
          />
        </View>
      )
    }}
  </Mutation>
)

export const UnfriendUser = ({ user_id1, user_id2 }: { user_id1: String, user_id2: String }) => (
    <Mutation mutation={unfriendUser}>
      {(mutate, { loading, error, data }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return <Text>Error!</Text>
        if (data) {
          return (
            <Text>
              {data.unfriendUser}
            </Text>
          )
        }
        return (
          <View>
            <TouchableOpacity
              onPress={() =>
                mutate({
                  variables: {
                    user_id1,
                    user_id2
                  }
                })
              }
            />
          </View>
        )
      }}
    </Mutation>
  )
  