import { MockedProvider } from '@apollo/react-testing'
import React from 'react'
import renderer from 'react-test-renderer'
import { TouchableOpacity } from 'react-native'
import {
  // UPDATE_STORYLINE_FOLLOWERS,
  updateStorylineFollowers,
  // ADD_STORYLINE_FOLLOWERS,
  addStorylineFollower,
  // DELETE_STORYLINE_FOLLOWER,
  deleteStorylineFollower,
  // ADD_POLL_PARTICIPANT,
  add_PollParticipant,
  // UPDATE_POLL_OPTION,
  update_PollOption,
  // UPDATE_TOTAL_VOTES,
  update_totalVotes,
  AddEntityFollower,
  deleteEntityFollower,
  updateEntityFollowers,
  addFriend,
  unfriendUser
} from './my_queries'
import {
  UpdateStorylineFollowers,
  AddStorylineFollowers,
  DeleteStorylineFollower,
  AddPollParticipant,
  UpdatePollOption,
  UpdateTotalVotes,
  EntityFollower,
  DeleteEntityFollower,
  UpdateEntityFollowers,
  AddFriend,
  UnfriendUser
} from './MutationTestComponent'
const wait = require('waait')
const mocks = [
  {
    request: {
      query:  updateStorylineFollowers,
      variables: {
        storyline_id: '629e108e-672c-426a-9731-7039e72de685',
        followers: 1111,
        reach: 12000
      }
    },
    result: {
      data: {
        UpdateStoryline: {
          followers: 1111
        }
      }
    }
  },
  {
    request: {
      query:  updateStorylineFollowers,
      variables: {
        storyline_id: '0',
        followers: 0,
        reach: 0
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query:addStorylineFollower,
      variables: {
        storyline: '629e108e-672c-426a-9731-7039e72de685',
        user: 'ddc626d5-eece-41e0-9550-cb98a8b8b421'
      }
    },
    result: {
      data: {
        AddStorylineFollower: [
          {
            user: 'ddc626d5-eece-41e0-9550-cb98a8b8b421'
          }
        ]
      }
    }
  },
  {
    request: {
      query:addStorylineFollower,
      variables: {
        storyline_id: '0',
        user: '0'
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query: deleteStorylineFollower,
      variables: {
        storyline: '629e108e-672c-426a-9731-7039e72de685',
        user: 'ddc626d5-eece-41e0-9550-cb98a8b8b421'
      }
    },
    result: {
      data: {
        DeleteStorylineFollower: [
          {
            user: 'f7103ba8-c1e8-4563-8a9c-681480effaf1'
          }
        ]
      }
    }
  },
  {
    request: {
      query: deleteStorylineFollower,
      variables: {
        storyline_id: '0',
        user: '0'
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query:add_PollParticipant,
      variables: {
        user_id: 'ddc626d5-eece-41e0-9550-cb98a8b8b421',
        poll_id: 'c17f60c9-cea2-411e-9af3-4298c7b18ca8',
        option_voted: '46101b42-c1eb-405c-9d40-a3371a7ae'
      }
    },
    result: {
      data: {
        AddPollParticipant: [
          {
            option_voted: '46101b42-c1eb-405c-9d40-a3371a7aef'
          }
        ]
      }
    }
  },
  {
    request: {
      query: add_PollParticipant,
      variables: {
        user_id: '0',
        poll_id: '0',
        option_voted: '0'
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query:update_PollOption,
      variables: {
        poll_question: 'c17f60c9-cea2-411e-9af3-4298c7b18ca8',
        poll_option_id: '46101b42-c1eb-405c-9d40-a3371a7ae',
        number_of_votes: 0
      }
    },
    result: {
      data: {
        UpdatePollOption: [
          {
            number_of_votes: 555
          }
        ]
      }
    }
  },
  {
    request: {
      query: update_PollOption,
      variables: {
        poll_question: '0',
        poll_option_id: '0',
        number_of_votes: 0
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query:update_totalVotes,
      variables: {
        poll_id: 'c17f60c9-cea2-411e-9af3-4298c7b18ca8',
        total_no_of_votes: 545
      }
    },
    result: {
      data: {
        UpdateVotes: {
          total_no_of_votes: 545
        }
      }
    }
  },
  {
    request: {
      query:update_totalVotes,
      variables: {
        poll_id: '0',
        total_no_of_votes: 545
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query: AddEntityFollower,
      variables: {
        user_id: 'ddc626d5-eece-41e0-9550-cb98a8b8b421',
        entity_id: 'ff3b2a22-8858-428e-8270-98f31ae4acdc'
      }
    },
    result: {
      data: {
        AddEntityFollower: [
          {
            user_id: 'ddc626d5-eece-41e0-9550-cb98a8b8b421'
          }
        ]
      }
    }
  },
  {
    request: {
      query: AddEntityFollower,
      variables: {
        user_id: 'ddc626d5-eece-41e0-9550-cb98a8b8b421',
        entity_id: 'ff3b2a22-8858-428e-8270-98f31ae4acdc'
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query: deleteEntityFollower,
      variables: {
        user_id: 'ddc626d5-eece-41e0-9550-cb98a8b8b421',
        entity_id: 'ff3b2a22-8858-428e-8270-98f31ae4acdc'
      }
    },
    result: {
      data: {
        DeleteEntityFollower: 'Deleted'
      }
    }
  },
  {
    request: {
      query: deleteEntityFollower,
      variables: {
        user_id: '0',
        entity_id: '0'
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query: updateEntityFollowers,
      variables: {
        followers: 545,
        entity_id: 'ff3b2a22-8858-428e-8270-98f31ae4acdc'
      }
    },
    result: {
      data: {
        UpdateEntity: 'NULL'
      }
    }
  },
  {
    request: {
      query: updateEntityFollowers,
      variables: {
        followers: 0,
        entity_id: '0'
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query: deleteEntityFollower,
      variables: {
        user_id: '0',
        entity_id: '0'
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query: addFriend,
      variables: {
        user_id1: 'ddc626d5-eece-41e0-9550-cb98a8b8b421',
        user_id2: '30e45647-b5e9-49d1-9343-606f4a77d2a1'
      }
    },
    result: {
      data: {
        addFriend: {
          user_id1: 'ddc626d5-eece-41e0-9550-cb98a8b8b421',
          user_id2: '30e45647-b5e9-49d1-9343-606f4a77d2a1'
        }
      }
    }
  },
  {
    request: {
      query: addFriend,
      variables: {
        user_id1: '0',
        user_id2: '0'
      }
    },
    error: new Error('Wrong ID!')
  },
  {
    request: {
      query: unfriendUser,
      variables: {
        user_id1: 'ddc626d5-eece-41e0-9550-cb98a8b8b421',
        user_id2: '30e45647-b5e9-49d1-9343-606f4a77d2a1'
      }
    },
    result: {
      data: {
        unfriendUser: 'NULL'
      }
    }
  },
  {
    request: {
      query: unfriendUser,
      variables: {
        user_id1: '0',
        user_id2: '0'
      }
    },
    error: new Error('Wrong ID!')
  }
]

// UpdateStorylineFollowers
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateStorylineFollowers
        storyline_id="629e108e-672c-426a-9731-7039e72de685"
        followers={1111}
        reach={12000}
      />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateStorylineFollowers
        storyline_id="629e108e-672c-426a-9731-7039e72de685"
        followers={1111}
        reach={12000}
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render user details', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateStorylineFollowers
        storyline_id="629e108e-672c-426a-9731-7039e72de685"
        followers={1111}
        reach={12000}
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject(['1111'])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateStorylineFollowers storyline_id="0" followers="0" reach="0" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// AddStorylineFollowers
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddStorylineFollowers
        storyline="629e108e-672c-426a-9731-7039e72de685"
        user="ddc626d5-eece-41e0-9550-cb98a8b8b421"
      />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddStorylineFollowers
        storyline="629e108e-672c-426a-9731-7039e72de685"
        user="ddc626d5-eece-41e0-9550-cb98a8b8b421"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render user details', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddStorylineFollowers
        storyline="629e108e-672c-426a-9731-7039e72de685"
        user="ddc626d5-eece-41e0-9550-cb98a8b8b421"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject(['ddc626d5-eece-41e0-9550-cb98a8b8b421'])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddStorylineFollowers storyline="0" user="0" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// DeleteStorylineFollower
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteStorylineFollower
        storyline="629e108e-672c-426a-9731-7039e72de685"
        user="ddc626d5-eece-41e0-9550-cb98a8b8b421"
      />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteStorylineFollower
        storyline="629e108e-672c-426a-9731-7039e72de685"
        user="ddc626d5-eece-41e0-9550-cb98a8b8b421"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render user details', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteStorylineFollower
        storyline="629e108e-672c-426a-9731-7039e72de685"
        user="ddc626d5-eece-41e0-9550-cb98a8b8b421"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject(['f7103ba8-c1e8-4563-8a9c-681480effaf1'])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteStorylineFollower storyline="0" user="0" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// AddPollParticipant
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddPollParticipant
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        poll_id="c17f60c9-cea2-411e-9af3-4298c7b18ca8"
        option_voted="46101b42-c1eb-405c-9d40-a3371a7ae"
      />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddPollParticipant
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        poll_id="c17f60c9-cea2-411e-9af3-4298c7b18ca8"
        option_voted="46101b42-c1eb-405c-9d40-a3371a7ae"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render user details', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddPollParticipant
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        poll_id="c17f60c9-cea2-411e-9af3-4298c7b18ca8"
        option_voted="46101b42-c1eb-405c-9d40-a3371a7ae"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject(['46101b42-c1eb-405c-9d40-a3371a7aef'])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddPollParticipant user_id="0" poll_id="0" option_voted="0" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// UpdatePollOption
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdatePollOption
        poll_question="c17f60c9-cea2-411e-9af3-4298c7b18ca8"
        poll_option_id="46101b42-c1eb-405c-9d40-a3371a7ae"
        number_of_votes={0}
      />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdatePollOption
        poll_question="c17f60c9-cea2-411e-9af3-4298c7b18ca8"
        poll_option_id="46101b42-c1eb-405c-9d40-a3371a7ae"
        number_of_votes={0}
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render user details', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdatePollOption
        poll_question="c17f60c9-cea2-411e-9af3-4298c7b18ca8"
        poll_option_id="46101b42-c1eb-405c-9d40-a3371a7ae"
        number_of_votes={0}
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject(['555'])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdatePollOption poll_question="0" poll_option_id="0" number_of_votes={0} />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// UpdateTotalVotes
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateTotalVotes poll_id="c17f60c9-cea2-411e-9af3-4298c7b18ca8" total_no_of_votes={545} />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateTotalVotes poll_id="c17f60c9-cea2-411e-9af3-4298c7b18ca8" total_no_of_votes={545} />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render user details', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateTotalVotes poll_id="c17f60c9-cea2-411e-9af3-4298c7b18ca8" total_no_of_votes={545} />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject(['545'])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateTotalVotes poll_id="0" total_no_of_votes={0} />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// Entity Follower
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <EntityFollower
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc"
      />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <EntityFollower
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render EntityFollower', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <EntityFollower
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject(['ddc626d5-eece-41e0-9550-cb98a8b8b421'])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <EntityFollower user_id="0" entity_id="0" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// DeleteEntityFollower
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteEntityFollower
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc"
      />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteEntityFollower
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render DeleteEntityFollower', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteEntityFollower
        user_id="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject(['Deleted'])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteEntityFollower user_id="0" entity_id="0" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// UpdateEntityFollowers
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateEntityFollowers followers={545} entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc" />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateEntityFollowers followers={545} entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render UpdateEntityFollowers', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateEntityFollowers followers={545} entity_id="ff3b2a22-8858-428e-8270-98f31ae4acdc" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject(['NULL'])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UpdateEntityFollowers followers={0} entity_id="0" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// AddFriend
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddFriend
        user_id1="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        user_id2="30e45647-b5e9-49d1-9343-606f4a77d2a1"
      />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddFriend
        user_id1="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        user_id2="30e45647-b5e9-49d1-9343-606f4a77d2a1"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render AddFriend', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddFriend
        user_id1="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        user_id2="30e45647-b5e9-49d1-9343-606f4a77d2a1"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject([
    'ddc626d5-eece-41e0-9550-cb98a8b8b421',
    '30e45647-b5e9-49d1-9343-606f4a77d2a1'
  ])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddFriend user_id1="0" user_id2="0" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})

// UnfriendUser
it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UnfriendUser
        user_id1="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        user_id2="30e45647-b5e9-49d1-9343-606f4a77d2a1"
      />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UnfriendUser
        user_id1="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        user_id2="30e45647-b5e9-49d1-9343-606f4a77d2a1"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  const tree = component.toJSON()
  expect(tree.children).toContain('Loading...')
})

it('should render UnfriendUser', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UnfriendUser
        user_id1="ddc626d5-eece-41e0-9550-cb98a8b8b421"
        user_id2="30e45647-b5e9-49d1-9343-606f4a77d2a1"
      />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation

  await wait(0) // wait for response

  const p = component.root.findByType('Text')

  expect(p.children).toMatchObject(['NULL'])
})
it('should show error UI', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UnfriendUser user_id1="0" user_id2="0" />
    </MockedProvider>
  )

  const button = component.root.findByType(TouchableOpacity)
  button.props.onPress() // fires the mutation
  await wait(0) // wait for response

  const tree = component.toJSON()
  expect(tree.children).toContain('Error!')
})
