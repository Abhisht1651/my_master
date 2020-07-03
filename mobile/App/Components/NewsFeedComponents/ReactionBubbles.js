// @flow
import React, { useState } from 'react'
import { View, FlatList, Image } from 'react-native'
import { Images } from '../../Themes'
import styles from '../Styles/ScrollableFeedComponentStyles/ReactionBubblesStyles'
import Storyfromfriends1 from '../StoriesFromFriends/StoriesFromFriends1'
import Storyfromfriends2 from '../StoriesFromFriends/StoriesFromFriends2'

type Props = {
  item: {
    id: string,
    seen: boolean,
    image1: Image,
    image2: Image,
    name: string,
    image: Image
  }
}

// user reaction
const user = [
  {
    id: '1',
    image: Images.profilePicture1
  }
]

// friend reaction
const bubbles = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    seen: false,
    image1: Images.flagPicture,
    image2: Images.profilePicture3,
    name: 'Amelia'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd9a97f63',
    seen: true,
    image1: Images.flagPicture,
    image2: Images.profilePicture3,
    name: 'Amelia'
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455e29d72',
    seen: true,
    image1: Images.flagPicture,
    image2: Images.profilePicture3,
    name: 'Amelia'
  },
  {
    id: '58694a0f-3da1-471f-bd9645571e29d72',
    seen: false,
    image1: Images.flagPicture,
    image2: Images.profilePicture3,
    name: 'Amelia'
  },
  {
    id: '58694a0f-3da1-471f-96-145571e29d72',
    seen: false,
    image1: Images.flagPicture,
    image2: Images.profilePicture3,
    name: 'Amelia'
  },
  {
    id: '58694a0f-a1-471f-bd96-145571e29d72',
    seen: false,
    image1: Images.flagPicture,
    image2: Images.profilePicture3,
    name: 'Amelia'
  },
  {
    id: '58694a0a1-471f-bd96-145571e29d72',
    seen: false,
    image1: Images.flagPicture,
    image2: Images.profilePicture3,
    name: 'Amelia'
  },
  {
    id: '58694a0f-3da1-471f-bd96571e29d72',
    seen: false,
    image1: Images.flagPicture,
    image2: Images.profilePicture3,
    name: 'Amelia'
  }
]

// Functionality for changing seen to true on opening reaction is not done yet. Data has an element named *seen*.

export const ReactionBubbles = () => {
  const [stories] = useState(user.concat(bubbles))
  const renderstories = ({ item }: Props) => {
    if (item.id === '1') {
      return (
        <View style={styles.margin1}>
          <Storyfromfriends1 image={item.image} />
        </View>
      )
    }
    return (
      <View style={styles.margin}>
        <Storyfromfriends2
          image1={item.image1}
          image2={item.image2}
          seen={item.seen}
          name={item.name}
        />
      </View>
    )
  }
  return (
    <View style={styles.bubbles}>
      <FlatList
        data={stories}
        renderItem={renderstories}
        keyExtractor={(image) => image.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.marginTop}
      />
    </View>
  )
}
