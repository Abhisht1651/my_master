import { MockedProvider } from '@apollo/react-testing'
import React from 'react'
import renderer from 'react-test-renderer'
const wait = require('waait')
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
  POLL_DETAIL,
  GetEntityFollower
} from './my_queries'

import {UserAll,
        UserDetails,
        GET_STORYLINE_DETAILS,
        Getuserfollow,
        Getuserpoll,
        Getmultimedia,
        UserDetails2,
        Getcomment,
        GetrelatedStorylineEvents,
        GetCommentBoosts,
        GetStorylineEvents,
        GetRelatedStorylines,
        GetRelatedEntities,
        GetEntityDetails,
        GetEventDetails,
        GetEventsources,
        Getnew,
        POLL_DETAIL_COMPO,
        ENTITY_FOLLOWER
        } from './Query_testing'
const mocks=[

  {
    request:{
      query:getuser,
      variables:{
        user_id:'ddc626d5-eece-41e0-9550-cb98a8b8b421'
      }
    },
    result:{
      data: {
        GetUserDetails: [
          {
            name: 'Rakesh',
            profile_picture: "9287fdfa-9f1b-11ea-bb37-0242ac130002"
          }
        ]
      }
    }
  },
  {
    request:{
      query:getStorylineDetails,
      variables:{
        storyline_id: "238a90bf-5db2-4072-8af7-8b101d4873d5"
      }
    },
    result:{
      data: {
        GetStoryline: {
          topic: "Godara Carnage",
          category: "NATIONAL",
          is_live: false,
          is_active: false,
          is_trending: false,
          is_single_event: true,
          followers: 316,
          last_updated: "2020-02-04T00:36:07.000Z"
        }
      }
    }
  },
  {
    request:{
      query:getuserfollow,
      variables:{
        user: "ddc626d5-eece-41e0-9550-cb98a8b8b421"
       }
    },
    result:{
      data: {
        GetUserStorylines: [
          {
            storyline: "629e108e-672c-426a-9731-7039e72de685"
          },
          {
            storyline: "d6fa63d6-0cc1-434f-9800-83098a54baa1"
          }
        ]
      }
    }
  },
  {
    request:{
      query:USER_POLL,
      variables:{
        user_id: "ddc626d5-eece-41e0-9550-cb98a8b8b421"
       }
    },
    result:{
      data: {
        GetPollParticipantUser: [
          {
            poll_id: "2970fa5e-5ca4-4b89-b16f-d1a899f2dd2e",
            option_voted: "f5e3807c-5c5a-453e-99a1-ab6c6fe830"
          },
          {
            poll_id: "39ff0b9a-3cfc-4af5-be47-5345f8f4e755",
            option_voted: "4e7080ff-cc08-468d-b720-4b8f36932"
          }
        ]
      }
    }
  },
  {
    request:{
      query:GET_MULTIMEDIA,
      variables:{
        multimedia_id: "9287fdfa-9f1b-11ea-bb37-0242ac130002"
        }
    },
    result:{
      data: {
        GetMultimedia: {
          url: "https://photos.angel.co/startups/i/7318957-93529612a7fba4e5f4561de6f815f96e-thumb_jpg.jpg?buster=1573879925",
          multimedia_type: "IMAGE"
        }
      }
    }
  },
  {
    request:{
      query:USER_DETAILS,
      variables:{
        user_id:'ddc626d5-eece-41e0-9550-cb98a8b8b421'
      }
    },
    result:{
      data: {
        GetUserDetails: [
          {
            name: 'Rakesh',
            profile_picture: "9287fdfa-9f1b-11ea-bb37-0242ac130002"
          }
        ]
      }
    }
  },
  {
    request:{
      query:getEventComments,
      variables:{
        resource_id:  "c4923283-4f2d-4d7d-b79e-7401e54d0add"
        }
    },
    result:{
      data: {
        GetComments: [
          {
            comment_id: "00692968-e4c9-40ad-a536-f4e0e466344e",
            commented_by: "30e45647-b5e9-49d1-9343-606f4a77d2a1",
            comment_text: "We hope India overcomes problems caused by demonetisation",
            parent_comment_id: "00692968-e4c9-40ad-a536-f4e0e466344e",
            t_create: "2020-02-16T19:14:00.000Z"
          }
        ]
      }
    }
  },
  {
    request:{
      query:getrelatedStorylineEvents,
      variables:{
        storyline_id:"238a90bf-5db2-4072-8af7-8b101d4873d5"
        }
    },
    result:{
      "data": {
        "GetStorylineEvents": [
          {
            "event": "abb90002-a2a3-46a4-9cac-eb487a092016"
          }
        ]
      }
    }
  },
  {
    request:{
      query:getCommentBoosts,
      variables:{
        "boostContent_id":   "edfc62bf-3ca6-431f-b714-8dc3cf497f63"
        }
    },
    result:{
      "data": {
        "GetBoostsbyContent": [
          {
            "boostBy": "ddc626d5-eece-41e0-9550-cb98a8b8b421",
            "boost_id": "28d78a3c-9f1c-11ea-bb37-0242ac130002"
          }
        ]
      }
    }
  },
  {
    request:{
      query:getStorylineEvents,
      variables:{
        "event_id":    "1c7a4e9c-bf37-4827-95f0-73878814b571"
        }
    },
    result:{
      "data": {
        "GetEvent": {
          "event_id": "1c7a4e9c-bf37-4827-95f0-73878814b571",
          "headline": "American Airlines flight 11 departs from Boston, bound for Los Angeles. Aboard are 11 crew members and 81 passengers, including 5 hijackers.",
          "event_time": "2001-11-09T00:00:00.000Z",
          "t_create": "2020-03-14T01:56:18.000Z",
          "image": "92880282-9f1b-11ea-bb37-0242ac130002"
        }
      }
    }
  },
  {
    request:{
      query:getRelatedStorylines,
      variables:{
        "storyline_id1":   "238a90bf-5db2-4072-8af7-8b101d4873d5"
        }
    },
    result:{
      "data": {
        "getStorylineStoryline": [
          {
            "storyline_id2": "1a802963-70f3-4971-bf7c-7b2cb411bde1",
            "rank": 3
          }
        ]
      }
    }
  },
  {
    request:{
      query:getRelatedEntities,
      variables:{
        "entity_id":  "4caed58a-0fe6-4d75-90b4-dffe6bc395a7"
        }
    },
    result: {
        "data": {
          "GetRelatedStorylinesToEntity": [
            {
              "entity_id": "4caed58a-0fe6-4d75-90b4-dffe6bc395a7"
            }
          ]
        
      }
    }
  },
  {
    request:{
      query:getEntityDetails,
      variables:{
        "entity_id":  "4caed58a-0fe6-4d75-90b4-dffe6bc395a7"
        }
    },
    result: {
      "data": {
        "GetEntity": {
          "name": "Irfan Khan",
          "image": "9287fdfa-9f1b-11ea-bb37-0242ac130002",
          "followers": 997
        }
      }
    }
  },
  {
    request:{
      query:getEventDetails,
      variables:{
        "event_id":   "abb90002-a2a3-46a4-9cac-eb487a092016"
        }
    },
    result: {
      "data": {
        "GetEvent": {
          "headline": "Death of Osama Bin Laden",
          "event_time": "2011-02-05T00:00:00.000Z",
          "image": "92880282-9f1b-11ea-bb37-0242ac130002",
          "description": "Osama bin Laden, the founder and first leader of the Islamist terrorist group, Al-Qaeda, was killed in Pakistan on May 2, 2011, shortly after 1:00 am PKT (20:00 UTC, May 1) by United States Navy SEALs of the U.S. Naval Special Warfare Development Group (also known as DEVGRU or SEAL Team Six).[3] The operation, code-named Operation Neptune Spear, was carried out in a CIA-led operation with Joint Special Operations Command, commonly known as JSOC, coordinating the Special Mission Units involved in the raid. ",
          "no_of_comments": 30,
          "t_update": "2020-02-04T00:36:07.000Z",
          "t_create": "2020-02-02T14:36:30.000Z"
        }
      }
    }
  },
  {
    request:{
      query:getEventSources,
      variables:{
        "event_id":   "abb90002-a2a3-46a4-9cac-eb487a092016"
        }
    },
    result: {
      "data": {
        "GetEventArticle": [
          {
            "article_id": "56be9bec-9f18-11ea-bb37-0242ac130002"
          }
        ]
      }
    }
  },
    {
      request:{
        query:getnews,
        variables:{
          "article_id":    "56be9bec-9f18-11ea-bb37-0242ac130002"
          }
      },
      result: {
        "data": {
          "GetNewsArticle": [
            {
              "headline": "China, S. Korea see new virus cases as world lockdowns ease",
              "publisher": "AP News",
              "t_update": "2020-05-25T15:30:48.000Z"
            }
          ]
        }
      }
    },
    {
      request: {
        query: POLL_DETAIL,
        variables: {
          poll_id: 'c17f60c9-cea2-411e-9af3-4298c7b18ca8'
        }
      },
      result: {
        data: {
          GetPoll: {
            heading: 'Sports',
            is_open: true,
            expiring_time: '2020-05-03T00:00:00.000Z',
            question: 'Which sports brand you adore the most?'
          },
          GetPollOptions: [
            {
              poll_option_id: '46101b42-c1eb-405c-9d40-a3371a7ae',
              option: 'Puma',
              number_of_votes: 55
            },
            {
              poll_option_id: '46101b42-c1eb-405c-9d40-a3371a7aef',
              option: 'Adidas',
              number_of_votes: 32
            },
            {
              poll_option_id: '46101b42-c1eb-405c-9d40-a3371a7aef41',
              option: 'Nike',
              number_of_votes: 25
            }
          ],
          GetPollParticipant: [
            {
              user_id: 'ddc626d5-eece-41e0-9550-cb98a8b8b421'
            },
            {
              user_id: 'f7103ba8-c1e8-4563-8a9c-681480effaf1'
            }
          ]
        }
      }
    },
    {
      request: {
        query: GetEntityFollower,
        variables: {
          entity_id: 'ff3b2a22-8858-428e-8270-98f31ae4acdc',
          user_id: 'ddc626d5-eece-41e0-9550-cb98a8b8b421'
        }
      },
      result: {
        data: {
          GetEntityFollower: [
            {
              user_id: 'ddc626d5-eece-41e0-9550-cb98a8b8b421'
            }
          ]
        }
      }
    }
]

// Entity follower
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ENTITY_FOLLOWER
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc"
      />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={[]}>
      <ENTITY_FOLLOWER
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc"
      />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render ENTITY_FOLLOWER', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ENTITY_FOLLOWER
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc"
      />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject(['ddc626d5-eece-41e0-9550-cb98a8b8b421'])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ENTITY_FOLLOWER user_id="0" entity_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// Poll details
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <POLL_DETAIL_COMPO poll_id="c17f60c9-cea2-411e-9af3-4298c7b18ca8" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={[]}>
      <POLL_DETAIL_COMPO poll_id="c17f60c9-cea2-411e-9af3-4298c7b18ca8" />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render POLL_DETAIL_COMPO', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <POLL_DETAIL_COMPO poll_id="c17f60c9-cea2-411e-9af3-4298c7b18ca8" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    'Sports',
    'TRUE',
    '2020-05-03T00:00:00.000Z',
    'Which sports brand you adore the most?',
    '46101b42-c1eb-405c-9d40-a3371a7ae',
    'Puma',
    '55',
    'ddc626d5-eece-41e0-9550-cb98a8b8b421'
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <POLL_DETAIL_COMPO poll_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})



// getnews
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <Getnew  article_id="56be9bec-9f18-11ea-bb37-0242ac130002" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <Getnew  article_id="56be9bec-9f18-11ea-bb37-0242ac130002" />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Getnew  article_id="56be9bec-9f18-11ea-bb37-0242ac130002" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "China, S. Korea see new virus cases as world lockdowns ease",
     "AP News",
     "2020-05-25T15:30:48.000Z"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Getnew  article_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// getEventSources
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <GetEventsources  event_id="abb90002-a2a3-46a4-9cac-eb487a092016" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <GetEventsources event_id="abb90002-a2a3-46a4-9cac-eb487a092016" />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetEventsources  event_id="abb90002-a2a3-46a4-9cac-eb487a092016" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "56be9bec-9f18-11ea-bb37-0242ac130002"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetEventsources  event_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// getEventDetails
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <GetEventDetails  event_id="abb90002-a2a3-46a4-9cac-eb487a092016" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <GetEventDetails  event_id="abb90002-a2a3-46a4-9cac-eb487a092016" />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetEventDetails  event_id="abb90002-a2a3-46a4-9cac-eb487a092016" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
   "Death of Osama Bin Laden",
   "2011-02-05T00:00:00.000Z",
     "92880282-9f1b-11ea-bb37-0242ac130002",
     "Osama bin Laden, the founder and first leader of the Islamist terrorist group, Al-Qaeda, was killed in Pakistan on May 2, 2011, shortly after 1:00 am PKT (20:00 UTC, May 1) by United States Navy SEALs of the U.S. Naval Special Warfare Development Group (also known as DEVGRU or SEAL Team Six).[3] The operation, code-named Operation Neptune Spear, was carried out in a CIA-led operation with Joint Special Operations Command, commonly known as JSOC, coordinating the Special Mission Units involved in the raid. ",
    '30',
   "2020-02-04T00:36:07.000Z",
     "2020-02-02T14:36:30.000Z"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetEventDetails  event_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// getEntityDetails
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <GetEntityDetails  entity_id="4caed58a-0fe6-4d75-90b4-dffe6bc395a7" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <GetEntityDetails  entity_id="4caed58a-0fe6-4d75-90b4-dffe6bc395a7"/>
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetEntityDetails  entity_id="4caed58a-0fe6-4d75-90b4-dffe6bc395a7"/>
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "Irfan Khan",
     "9287fdfa-9f1b-11ea-bb37-0242ac130002",
     '997'
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetEntityDetails  entity_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})


//getrelatedentities
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <GetRelatedEntities  entity_id="4caed58a-0fe6-4d75-90b4-dffe6bc395a7" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <GetRelatedEntities  entity_id="4caed58a-0fe6-4d75-90b4-dffe6bc395a7"/>
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetRelatedEntities  entity_id="4caed58a-0fe6-4d75-90b4-dffe6bc395a7"/>
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "4caed58a-0fe6-4d75-90b4-dffe6bc395a7"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetRelatedEntities  entity_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})


// getRelatedStorylines

it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <GetRelatedStorylines  storyline_id1="238a90bf-5db2-4072-8af7-8b101d4873d5" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <GetRelatedStorylines  storyline_id1="238a90bf-5db2-4072-8af7-8b101d4873d5"/>
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetRelatedStorylines  storyline_id1="238a90bf-5db2-4072-8af7-8b101d4873d5"/>
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
     "1a802963-70f3-4971-bf7c-7b2cb411bde1",
     '3'
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetRelatedStorylines  storyline_id1="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// getStorylineEvents
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <GetStorylineEvents  event_id="1c7a4e9c-bf37-4827-95f0-73878814b571" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <GetStorylineEvents  event_id="1c7a4e9c-bf37-4827-95f0-73878814b571"/>
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetStorylineEvents  event_id="1c7a4e9c-bf37-4827-95f0-73878814b571" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "1c7a4e9c-bf37-4827-95f0-73878814b571",
       "American Airlines flight 11 departs from Boston, bound for Los Angeles. Aboard are 11 crew members and 81 passengers, including 5 hijackers.",
      "2001-11-09T00:00:00.000Z",
    "2020-03-14T01:56:18.000Z",
     "92880282-9f1b-11ea-bb37-0242ac130002"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetStorylineEvents  event_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})


// getcommentsboost
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <GetCommentBoosts  boostContent_id="edfc62bf-3ca6-431f-b714-8dc3cf497f63" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <GetCommentBoosts  boostContent_id="edfc62bf-3ca6-431f-b714-8dc3cf497f63"/>
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetCommentBoosts  boostContent_id="edfc62bf-3ca6-431f-b714-8dc3cf497f63" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "ddc626d5-eece-41e0-9550-cb98a8b8b421",
    "28d78a3c-9f1c-11ea-bb37-0242ac130002"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetCommentBoosts  boostContent_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})
// GetrelatedStorylineEvents
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <GetrelatedStorylineEvents  storyline_id="238a90bf-5db2-4072-8af7-8b101d4873d5" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <GetrelatedStorylineEvents  storyline_id="238a90bf-5db2-4072-8af7-8b101d4873d5"/>
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetrelatedStorylineEvents  storyline_id="238a90bf-5db2-4072-8af7-8b101d4873d5" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "abb90002-a2a3-46a4-9cac-eb487a092016"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GetrelatedStorylineEvents  storyline_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})
//getcomments

it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <Getcomment  resource_id="c4923283-4f2d-4d7d-b79e-7401e54d0add" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <Getcomment  resource_id="c4923283-4f2d-4d7d-b79e-7401e54d0add"/>
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Getcomment  resource_id="c4923283-4f2d-4d7d-b79e-7401e54d0add" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "00692968-e4c9-40ad-a536-f4e0e466344e",
    "30e45647-b5e9-49d1-9343-606f4a77d2a1",
    "We hope India overcomes problems caused by demonetisation",
    "00692968-e4c9-40ad-a536-f4e0e466344e",
    "2020-02-16T19:14:00.000Z"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Getcomment  resource_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// userdetails
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <UserDetails user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
      <UserDetails user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserDetails user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
        "Rakesh",
        "9287fdfa-9f1b-11ea-bb37-0242ac130002"

  ])
})
it('should show error UI', async () => {
  const component = renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
    <UserDetails user_id="0" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})
//USERDETAILS2
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <UserDetails2 user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
      <UserDetails2 user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserDetails2 user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
        "Rakesh",
        "9287fdfa-9f1b-11ea-bb37-0242ac130002"

  ])
})
it('should show error UI', async () => {
  const component = renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
    <UserDetails2 user_id="0" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})


//get_storyline_details
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <GET_STORYLINE_DETAILS storyline_id="238a90bf-5db2-4072-8af7-8b101d4873d5" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
      <GET_STORYLINE_DETAILS storyline_id="238a90bf-5db2-4072-8af7-8b101d4873d5" />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GET_STORYLINE_DETAILS storyline_id="238a90bf-5db2-4072-8af7-8b101d4873d5" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "Godara Carnage",
    "NATIONAL",
    'false',
    'false',
    'false',
    'true',
    '316',
    "2020-02-04T00:36:07.000Z"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <GET_STORYLINE_DETAILS storyline_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

//userfollowers
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <Getuserfollow user="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
      <Getuserfollow user="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Getuserfollow user="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "629e108e-672c-426a-9731-7039e72de685"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Getuserfollow user="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

//getuserpoll
it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <Getuserpoll user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
      <Getuserpoll user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Getuserpoll user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "2970fa5e-5ca4-4b89-b16f-d1a899f2dd2e",
    "f5e3807c-5c5a-453e-99a1-ab6c6fe830"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Getuserpoll user_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

//getmultimedia

it('renders without error', () => {
  renderer.create(
  <MockedProvider mocks={mocks} addTypename={false}>
      <Getmultimedia  multimedia_id="9287fdfa-9f1b-11ea-bb37-0242ac130002" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
  <MockedProvider mocks={[]}>
    <Getmultimedia  multimedia_id="9287fdfa-9f1b-11ea-bb37-0242ac130002" />
    </MockedProvider>
  )
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render dog', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Getmultimedia  multimedia_id="9287fdfa-9f1b-11ea-bb37-0242ac130002" />
    </MockedProvider>
  )
  await wait(0) // wait for response
  const p = component.root.findByType('Text')
  expect(p.children).toMatchObject([
    "https://photos.angel.co/startups/i/7318957-93529612a7fba4e5f4561de6f815f96e-thumb_jpg.jpg?buster=1573879925",
    "IMAGE"
  ])
})

it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Getmultimedia  multimedia_id="0" />
    </MockedProvider>
  )

  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})
