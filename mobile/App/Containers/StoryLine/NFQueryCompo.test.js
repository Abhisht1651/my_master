import { MockedProvider } from '@apollo/react-testing'
import React from 'react'
import renderer from 'react-test-renderer'
const wait = require('waait')
import {
  getuser,
  getStorylineDetails
} from './my_queries'
import {UserAll,
        UserDetails,
        GET_STORYLINE_DETAILS
        } from './NFQueryCompo'
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
  }
]
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