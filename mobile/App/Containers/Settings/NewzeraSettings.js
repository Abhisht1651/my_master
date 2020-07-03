// @flow

import React from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

import { Images } from '../../Themes'

import styles from './Styles/SettingsStyle'
import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

type Props = NavigationContainerProps & {}

// import Terms from './Newzera/Terms'

// export default function NewzeraSettings() {
//   return(
//     <View>
//       <Terms />
//     </View>
//   )
// }

export default function NewzeraSettings(props: Props) {
  const { navigation } = props
  return (
    <View>
      <View style={{ paddingTop: (56 / 812) * Height }}>
        <View style={common.flexRow}>
          <View style={{ paddingTop: (6 / 812) * Height }}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Image source={Images.leftArrowback} style={styles.leftArrow} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: (104 / 375) * Width }}>
            <Text style={styles.subHeading}>Newzera</Text>
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
                  <Text style={styles.content}>Invite friends</Text>
                </View>
                <View style={{ paddingTop: (3.42 / 812) * Height }}>
                  <TouchableOpacity onPress={() => navigation.navigate('InviteFriends2')}>
                    <Image source={Images.rightSmallArrow} style={styles.rightSmallArrow} />
                  </TouchableOpacity>
                </View>
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
                    <Text style={styles.content}>Terms and Conditions</Text>
                  </View>
                  <View style={{ paddingTop: (3.42 / 812) * Height }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
                      <Image source={Images.rightSmallArrow} style={styles.rightSmallArrow} />
                    </TouchableOpacity>
                  </View>
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
                    <Text style={styles.content}>Send feedback</Text>
                  </View>
                  <View style={{ paddingTop: (3.42 / 812) * Height }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SendFeedback')}>
                      <Image source={Images.rightSmallArrow} style={styles.rightSmallArrow} />
                    </TouchableOpacity>
                  </View>
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
                    <Text style={styles.content}>About us</Text>
                  </View>
                  <View style={{ paddingTop: (3.42 / 812) * Height }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
                      <Image source={Images.rightSmallArrow} style={styles.rightSmallArrow} />
                    </TouchableOpacity>
                  </View>
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
