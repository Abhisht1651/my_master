// @flow

import React, { useState } from 'react'
import { Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'

import { Images } from '../../Themes'

import styles from './Styles/ReplyCommentStyle'
import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

type Props = {
  seen: boolean,
  name: string,
  story: string,
  time: string,
  img: string,
  index: number
}

export default function BoostPost(props: Props) {
  const [hidden, setHidden] = useState(true)
  const { seen, name, story, time, img, index } = props

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
              <TouchableOpacity style={common.headerItem}>
                <Text style={common.headerText} />
              </TouchableOpacity>
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
              <ImageBackground source={img} style={styles.icon} imageStyle={styles.iconRound}>
                <Image source={Images.boost} style={styles.icons} />
              </ImageBackground>
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
                <Text style={styles.text1}>
                  <Text style={styles.semiboldFont}>{name}</Text> boosted your post in{' '}
                  <Text style={common.color1}>{story}</Text> goes here
                </Text>
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

BoostPost.defaultProps = {
  seen: false,
  name: 'Frank Mur',
  story: 'Name of the storyline',
  time: '1 day',
  img: Images.trump,
  index: 10
}
