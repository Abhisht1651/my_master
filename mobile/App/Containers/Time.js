import React, { useRef } from 'react'
import { Animated, View, Text, FlatList } from 'react-native'
import styles from './Styles/TimeStyles'

const Data = [
  {
    id: '1',
    txt: 'S'
  },
  {
    id: '2',
    txt: 'qwd k kx j cjk kjb cjks kj xkj jkec jk cjk cj ckc '
  },
  {
    id: '3',
    txt: 'Shishir made this'
  },
  {
    id: '4',
    txt: 'Shishir made this'
  },
  {
    id: '5',
    txt: 'Shishir made this'
  },
  {
    id: '6',
    txt: 'Shishir made this'
  },
  {
    id: '7',
    txt: 'Shishir made this'
  }
]

export default function App() {
  const pan = useRef(new Animated.ValueXY()).current
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateX: pan.x.interpolate({
                inputRange: [-100, 0],
                outputRange: [-100, 0],
                extrapolate: 'clamp'
              })
            }
          ]
        }
      ]}>
      <View style={styles.container1}>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.bubbles}>
                <Text style={styles.text}>{item.txt}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </Animated.View>
  )
}
