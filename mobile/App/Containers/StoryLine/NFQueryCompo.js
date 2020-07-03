// @flow
import React from 'react'
import { Query } from 'react-apollo'
import { Text } from 'react-native'
import {
  getuser,
  getUserAll,
  getStorylineDetails
} from './my_queries'
export const  UserDetails = ({ user_id }: { user_id: String }) => (
  <Query query={getuser} variables={{ user_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
         {data.GetUserDetails[0].name}
         {data.GetUserDetails[0].profile_picture}
        </Text>
      )
    }}
  </Query>
)
export const GET_STORYLINE_DETAILS = ({ storyline_id }: { storyline_id: String }) => (
  <Query query={getStorylineDetails} variables={{ storyline_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
          {data.GetStoryline.topic}
          {data.GetStoryline.category}
          {data.GetStoryline.is_live? 'true': 'false'}
          {data.GetStoryline.is_active? 'true': 'false'}
          {data.GetStoryline.is_trending? 'true': 'false'}
          {data.GetStoryline.is_single_event? 'true': 'false'}
          {data.GetStoryline.followers}
          {data.GetStoryline.last_updated}
        </Text>
      )
    }}
  </Query>
)
