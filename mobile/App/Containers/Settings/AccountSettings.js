// @flow

import React, { useState } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import Delete from './Account/Delete'
import Deactivate from './Account/Deactivate'
import SignOut from './Account/SignOut'

import { Images } from '../../Themes'

import styles from './Styles/SettingsStyle'
import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

type Props = NavigationContainerProps & {}
export default function AccountSettings(props: Props) {
  const { navigation } = props

  const [hiddenDelete, setHiddenDelete] = useState(true)
  const [hiddenDeactivate, setHiddenDeactivate] = useState(true)
  const [hiddenSignOut, setHiddenSignOut] = useState(true)

  const toggleHandlerDelete = () => {
    const val = hiddenDelete
    setHiddenDelete(!val)
  }

  const toggleHandlerDeactivate = () => {
    const val = hiddenDeactivate
    setHiddenDeactivate(!val)
  }

  const toggleHandlerSignOut = () => {
    const val = hiddenSignOut
    setHiddenSignOut(!val)
  }

  const backColor = {
    background: 'rgba(0, 0, 0, 0.3)'
  }

  return (
    <View>
      {!hiddenDelete && <Delete toggleHandlerDelete={toggleHandlerDelete} />}
      {!hiddenDeactivate && <Deactivate toggleHandlerDeactivate={toggleHandlerDeactivate} />}
      {!hiddenSignOut && <SignOut toggleHandlerSignOut={toggleHandlerSignOut} />}
      <View style={{ width: Width, height: Height }}>
        <View style={hiddenDeactivate && hiddenDelete && hiddenSignOut ? {} : backColor}>
          <View style={{ paddingTop: (56 / 812) * Height }}>
            <View style={common.flexRow}>
              <View style={{ paddingTop: (6 / 812) * Height }}>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                  <Image source={Images.leftArrowback} style={styles.leftArrow} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: (104 / 375) * Width }}>
                <Text style={styles.subHeading}>Accounts</Text>
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
                      <Text style={styles.content}>Change password</Text>
                    </View>
                    <View style={{ paddingTop: (3.42 / 812) * Height }}>
                      <Image source={Images.rightSmallArrow} style={styles.rightSmallArrow} />
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
                        <Text style={styles.content}>Change email address</Text>
                      </View>
                      <View style={{ paddingTop: (3.42 / 812) * Height }}>
                        <Image source={Images.rightSmallArrow} style={styles.rightSmallArrow} />
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
                        <Text style={styles.content}>Deactivate account</Text>
                      </View>
                      <View style={{ paddingTop: (3.42 / 812) * Height }}>
                        <TouchableOpacity onPress={toggleHandlerDeactivate}>
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
                        <Text style={styles.content}>Delete account</Text>
                      </View>
                      <View style={{ paddingTop: (3.42 / 812) * Height }}>
                        <TouchableOpacity onPress={toggleHandlerDelete}>
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
                        <Text style={styles.content}>Sign out</Text>
                      </View>
                      <View style={{ paddingTop: (3.42 / 812) * Height }}>
                        <TouchableOpacity onPress={toggleHandlerSignOut}>
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
                <View style={{ paddingBottom: (300 / 812) * Height }} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
