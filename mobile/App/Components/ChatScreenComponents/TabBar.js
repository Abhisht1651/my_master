// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity, Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import styles from '../Styles/ChatScreenComponentStyles/TabBarStyles'

type Props = {} & NavigationContainerProps

const Width = Dimensions.get('window').width
const border = (2 / 375) * Width
const noborder = 0
export default function MyTabBar({ state, descriptors, navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.contmargin}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : [options.title !== undefined ? options.title : route.name]

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: {
                type: String,
                default: 'tabPress'
              },
              target: route.key,
              canPreventDefault: true
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[styles.textcont, { borderBottomWidth: isFocused ? border : noborder }]}>
              <Animated.Text style={styles.text}>{label}</Animated.Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
