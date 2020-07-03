// @flow

import React, { useState } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'

import { Images } from '../../Themes'

import styles from './Styles/SharedStyle'
import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

type Props = {
  seen: boolean,
  name: string,
  people: number,
  time: string,
  img: string,
  index: number
}

export default function SentFriendRequest(props: Props) {
  const [hidden, setHidden] = useState(true)
  const { seen, name, people, time, img, index } = props

  const toggleHandler = () => {
    const val = hidden
    setHidden(!val)
  }

  const shadowStyle = {
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#1F1F6016',
    shadowOffSet: { width: 0, height: 0 }
  }

  const styleIndex = {
    zIndex: index
  }
  return (
    <View style={styleIndex}>
      <View style={seen ? {} : common.bColor}>
        {!hidden && (
          <View style={[common.dropDownBody, shadowStyle]} elevation={6}>
            <View style={common.dropDownHeader}>
              <TouchableOpacity
                onPress={toggleHandler}
                style={common.dropDownIcon}
                activeOpacity={1}>
                <Image source={Images.dots3} style={styles.dots3} />
              </TouchableOpacity>
            </View>
            <View style={{ paddingTop: (35 / 812) * Height }} />
            <TouchableOpacity style={common.dropDownWidth} activeOpacity={1}>
              <View style={common.listItem}>
                <Text style={common.itemText}>Disable related notifications</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={common.dropDownWidth} activeOpacity={1}>
              <View style={common.listItem}>
                <Text style={common.itemText}>Hide notifications</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <View style={common.flexRow}>
          <View style={{ width: (66 / 375) * Width }}>
            <View style={styles.iconPos}>
              <Image source={img} style={styles.icon} />
            </View>
          </View>
          <View style={{ width: (287 / 375) * Width }}>
            <View style={common.flexRowBet}>
              <View
                style={{
                  paddingTop: (23 / 812) * Height,
                  width: (232 / 375) * Width
                }}
              />
              <View style={styles.dots3Pos}>
                <TouchableOpacity onPress={toggleHandler} activeOpacity={1}>
                  <Image source={Images.dots3} style={styles.dots3} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={common.flexRowBet}>
              <View style={{ width: (232 / 375) * Width }}>
                <View>
                  <Text style={styles.text1}>
                    <Text style={styles.semiboldFont}>{name}</Text> sent you a friend request. You
                    have {people} friends in common.
                  </Text>
                </View>
                <View style={styles.buttonFlex}>
                  <View style={styles.acceptButton}>
                    <View style={common.centreText}>
                      <Text style={styles.acceptText}>Accept</Text>
                    </View>
                  </View>
                  <View style={common.borderButton}>
                    <View style={styles.ignoreButton}>
                      <View style={common.centreText}>
                        <Text style={styles.ignoreText}>Ignore</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.con4}>
                <Text style={styles.text2}>{time}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: (21 / 812) * Height }}>
          <View
            style={{
              paddingLeft: (27 / 375) * Width,
              paddingRight: (23 / 375) * Width
            }}>
            <View style={common.line} />
          </View>
        </View>
      </View>
    </View>
  )
}

SentFriendRequest.defaultProps = {
  seen: false,
  name: 'Donald Trump',
  people: 92,
  time: '2 days',
  img: Images.trump,
  index: 9
}
