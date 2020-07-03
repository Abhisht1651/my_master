// @flow

import React from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

// import { Router, Scene } from 'react-native-router-flux'

// import Navigate from './Navigate'
import { Images } from '../../Themes'

import styles from './Styles/SettingsStyle'
import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

type Props = NavigationContainerProps & {}
const Settings = (props: Props) => {
  const { navigation } = props
  return (
    <View>
      <View style={{ paddingTop: (56 / 812) * Height }}>
        <View style={common.flexRow}>
          <View style={{ paddingTop: (6 / 812) * Height }}>
            <TouchableOpacity onPress={() => navigation.navigate('NewsFeed')}>
              <Image source={Images.leftArrowback} style={styles.leftArrow} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: (104 / 375) * Width }}>
            <Text style={styles.heading}>Settings</Text>
          </View>
        </View>
        <View style={{ paddingTop: (31 / 812) * Height }}>
          <View>
            <View style={common.line} />
          </View>
        </View>
        <View>
          <View
            style={{
              paddingTop: (30 / 812) * Height,
              paddingLeft: (25 / 375) * Width
            }}>
            <View style={{ width: (326 / 375) * Width }}>
              <View style={common.flexRowBet}>
                <View>
                  <Text style={styles.content}>Account</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
                  <View style={{ paddingTop: (3.42 / 812) * Height }}>
                    <Image source={Images.rightSmallArrow} style={styles.rightSmallArrow} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ paddingTop: (26 / 812) * Height }}>
                <View>
                  <View style={common.line} />
                </View>
              </View>
            </View>
            <View style={{ paddingTop: (25 / 812) * Height }}>
              <View style={{ width: (326 / 375) * Width }}>
                <View style={common.flexRowBet}>
                  <View>
                    <Text style={styles.content}>Privacy</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('PrivacySettings')}>
                    <View style={{ paddingTop: (3.42 / 812) * Height }}>
                      <Image source={Images.rightSmallArrow} style={styles.rightSmallArrow} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingTop: (26 / 812) * Height }}>
                  <View>
                    <View style={common.line} />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ paddingTop: (25 / 812) * Height }}>
              <View style={{ width: (326 / 375) * Width }}>
                <View style={common.flexRowBet}>
                  <View>
                    <Text style={styles.content}>Newzera</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('NewzeraSettings')}>
                    <View style={{ paddingTop: (3.42 / 812) * Height }}>
                      <Image source={Images.rightSmallArrow} style={styles.rightSmallArrow} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingTop: (26 / 812) * Height }}>
                  <View>
                    <View style={common.line} />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ paddingTop: (25 / 812) * Height }}>
              <View style={{ width: (326 / 375) * Width }}>
                <View style={common.flexRowBet}>
                  <View>
                    <Text style={styles.content}>Help</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('HelpSettings')}>
                    <View style={{ paddingTop: (3.42 / 812) * Height }}>
                      <Image source={Images.rightSmallArrow} style={styles.rightSmallArrow} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingTop: (26 / 812) * Height }}>
                  <View>
                    <View style={common.line} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Settings
