// @flow
import React from 'react'
import { Query } from 'react-apollo'
import { Text } from 'react-native'
import {
  getuser,
  getStorylineDetails,
  getuserfollow,
  USER_POLL,
  GET_MULTIMEDIA,
  USER_DETAILS,
  getEventComments,
  getrelatedStorylineEvents,
  getCommentBoosts,
  getStorylineEvents,
  getRelatedStorylines,
  getRelatedEntities,
  getEntityDetails,
  getEventDetails,
  getEventSources,
  getnews,
  GetEntityFollower,
  POLL_DETAIL
} from './my_queries'

export const ENTITY_FOLLOWER = ({user_id,entity_id}:{user_id:String,entity_id:String}) =>(
  <Query query={GetEntityFollower} variables={{ user_id,entity_id }}>
  {({ loading, error, data }) => {
    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error!</Text>
    return (
      <Text>
        {data.GetEntityFollower[0].user_id}
      </Text>
    )
  }}
</Query>
)


export const POLL_DETAIL_COMPO = ({poll_id}:{poll_id:String}) =>(
  <Query query={POLL_DETAIL} variables={{ poll_id }}>
  {({ loading, error, data }) => {
    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error!</Text>
    return (
      <Text>
        {data.GetPoll.heading}
        {data.GetPoll.is_open ? 'TRUE' : 'FALSE'}
        {data.GetPoll.expiring_time}
        {data.GetPoll.question}
        {data.GetPollOptions[0].poll_option_id}
        {data.GetPollOptions[0].option}
        {data.GetPollOptions[0].number_of_votes}
        {data.GetPollParticipant[0].user_id}
      </Text>
    )
  }}
</Query>
)


export const  Getnew = ({article_id}: { article_id: String }) => (
  <Query query={getnews} variables={{article_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
         {data.GetNewsArticle[0].headline}
         {data.GetNewsArticle[0].publisher}
         {data.GetNewsArticle[0].t_update}

        </Text>
      )
    }}
  </Query>
)



export const  GetEventsources = ({event_id}: { event_id: String }) => (
  <Query query={getEventSources} variables={{event_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
         {data.GetEventArticle[0].article_id}

        </Text>
      )
    }}
  </Query>
)

export const  GetEventDetails = ({event_id}: { event_id: String }) => (
  <Query query={getEventDetails} variables={{event_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
         {data.GetEvent.headline}
         {data.GetEvent.event_time}
         {data.GetEvent.image}
         {data.GetEvent.description}
         {data.GetEvent.no_of_comments}
         {data.GetEvent.t_update}
         {data.GetEvent.t_create}

        </Text>
      )
    }}
  </Query>
)
export const  GetEntityDetails = ({entity_id}: { entity_id: String }) => (
  <Query query={getEntityDetails} variables={{entity_id}}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
         {data.GetEntity.name}
         {data.GetEntity.image}
         {data.GetEntity.followers}

        </Text>
      )
    }}
  </Query>
)


export const  GetRelatedEntities = ({entity_id }: { entity_id: String }) => (
  <Query query={getRelatedEntities} variables={{entity_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
         {data.GetRelatedStorylinesToEntity[0].entity_id}

        </Text>
      )
    }}
  </Query>
)



export const  GetRelatedStorylines = ({ storyline_id1 }: { storyline_id1: String }) => (
  <Query query={getRelatedStorylines} variables={{ storyline_id1 }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
         {data.getStorylineStoryline[0].storyline_id2}
         {data.getStorylineStoryline[0].rank}

        </Text>
      )
    }}
  </Query>
)


export const  GetStorylineEvents = ({ event_id }: { event_id: String }) => (
  <Query query={getStorylineEvents} variables={{ event_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
         {data.GetEvent.event_id}
         {data.GetEvent.headline}
         {data.GetEvent.event_time}
         {data.GetEvent.t_create}
         {data.GetEvent.image}


        </Text>
      )
    }}
  </Query>
)

export const  GetCommentBoosts = ({ boostContent_id }: { boostContent_id: String }) => (
  <Query query={getCommentBoosts} variables={{ boostContent_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
         {data.GetBoostsbyContent[0].boostBy}
         {data.GetBoostsbyContent[0].boost_id}

        </Text>
      )
    }}
  </Query>
)

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
export const GetrelatedStorylineEvents = ({ storyline_id }: { storyline_id: String }) => (
  <Query query={getrelatedStorylineEvents} variables={{ storyline_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
          {data.GetStorylineEvents[0].event}
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
export const  Getuserfollow = ({ user }: { user: String }) => (
  <Query query={getuserfollow} variables={{ user }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
          {data.GetUserStorylines[0].storyline}
        </Text>
      )
    }}
  </Query>
)
export const  Getuserpoll = ({ user_id }: { user_id: String }) => (
  <Query query={USER_POLL} variables={{ user_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
          {data.GetPollParticipantUser[0].poll_id}
          {data.GetPollParticipantUser[0].option_voted}
        </Text>
      )
    }}
  </Query>
)
export const  Getmultimedia = ({ multimedia_id }: { multimedia_id: String }) => (
  <Query query={GET_MULTIMEDIA} variables={{ multimedia_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
          {data.GetMultimedia.url}
          {data.GetMultimedia.multimedia_type}
        </Text>
      )
    }}
  </Query>
)
export const  UserDetails2 = ({ user_id }: { user_id: String }) => (
  <Query query={USER_DETAILS} variables={{ user_id }}>
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
export const  Getcomment = ({ resource_id }: { resource_id: String }) => (
  <Query query={getEventComments} variables={{ resource_id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error!</Text>
      return (
        <Text>
         {data.GetComments[0].comment_id}
         {data.GetComments[0].commented_by}
         {data.GetComments[0].comment_text}
         {data.GetComments[0].parent_comment_id}
         {data.GetComments[0].t_create}

        </Text>
      )
    }}
  </Query>
)