// @flow
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Modal, Image, FlatList } from 'react-native'
import Images from '../../Themes/Images'
import useHooks from './DeleteMessageHooks'
import { MediumThinButton } from '../../Components/Buttons/MediumThinButton'

// Styles
import styles from './ScreenStyles/DeleteMessageStyles'

type Props = {
  isModalVisible: boolean,
  onBtnPress: () => void,
  onClose: () => void
}

const DeleteMessage = (props: Props) => {
  const { isModalVisible, onBtnPress, onClose } = props
  const { check1, check2, clickHandler1 } = useHooks()
  const options = [
    { id: 'Delete for me', stateProp: check1 },
    { id: 'Delete for both', stateProp: check2 }
  ]
  const selectedOption = []
  useEffect(() => {
    if (check1) selectedOption.push('1')
    if (check2) selectedOption.push('2')
  }, [check1, check2])

  return (
    <Modal visible={isModalVisible} transparent>
      <View style={styles.screen}>
        <View style={styles.innerScreen}>
          <View style={styles.view1}>
            <Text style={styles.headerText}>Delete</Text>
            <TouchableOpacity style={styles.closeIconContainer} activeOpacity={1} onPress={onClose}>
              <Image source={Images.closeIcon} style={styles.closeIcon} />
            </TouchableOpacity>
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
            <TouchableOpacity activeOpacity={1} onPress={onBtnPress}>
              <MediumThinButton title="Submit" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
DeleteMessage.defaultProps = {
  isModalVisible: true
}

export default DeleteMessage
