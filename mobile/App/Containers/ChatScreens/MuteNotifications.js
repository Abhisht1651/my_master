/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Modal, Image, FlatList } from 'react-native'
import Images from '../../Themes/Images'
import useHooks from './MuteNotificationsHooks'
import { MediumThinButton } from '../../Components/Buttons/MediumThinButton'

// Styles
import styles from './ScreenStyles/MuteNotificationsStyle'

type Props = {
  isModalVisible: boolean,
  onBtnPress: () => void,
  onClose: () => void
}

const MuteNotifications = (props: Props) => {
  const { isModalVisible, onBtnPress, onClose } = props
  const { checkDay, checkWeek, checkMonth, checkPermanent, clickHandler1 } = useHooks()
  const options = [
    { id: '1 day', stateProp: checkDay },
    { id: '1 week', stateProp: checkWeek },
    { id: '1 month', stateProp: checkMonth },
    { id: 'Permanent', stateProp: checkPermanent }
  ]
  const selectedOption = []
  useEffect(() => {
    if (checkDay) selectedOption.push('1 day')
    if (checkWeek) selectedOption.push('1 week')
    if (checkMonth) selectedOption.push('1 month')
    if (checkPermanent) selectedOption.push('Permanent')
  }, [checkDay, checkWeek, checkMonth, checkPermanent])

  return (
    <Modal visible={isModalVisible} transparent>
      <View style={styles.screen}>
        <View style={styles.innerScreen}>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.closeIconContainer} activeOpacity={1} onPress={onClose}>
              <Image source={Images.closeIcon} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <Text style={styles.headerText}>Mute Notifications</Text>
            <View style={styles.verticalgap} />
            <Text style={styles.headerText2}>Choose the time:</Text>
          </View>
          <View style={styles.view3}>
            <FlatList
              contentContainerStyle={styles.flatList}
              data={options}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <TouchableOpacity style={styles.circle} onPress={() => clickHandler1(item.id)}>
                    {item.stateProp && (
                      <View style={styles.checkedCircle}>
                        <Image source={Images.checkmark} />
                      </View>
                    )}
                  </TouchableOpacity>
                  <Text style={styles.listText}>{item.id}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <View style={styles.view4}>
            <MediumThinButton title="Apply" onPress={onBtnPress} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
MuteNotifications.defaultProps = {
  isModalVisible: true
}

export default MuteNotifications
