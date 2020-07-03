// @flow

import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, Modal } from 'react-native'
import styles from '../Styles/TimeFilterStyles/TimeFilterStyle'
import Images from '../../Themes/Images'
import useHooks from './TimeFilterHooks'

type Props = {
  getSelectedYears: (arg: Array<string>) => void,
  getSelectedMonths: (arg: Array<string>) => void,
  onBtnPress: () => void,
  onClose: () => void,
  isModalVisible: boolean,
  headerTitle: string
}

const TimeFilter = (props: Props) => {
  const {
    getSelectedYears,
    getSelectedMonths,
    onBtnPress,
    onClose,
    isModalVisible,
    headerTitle
  } = props
  const {
    checked2020,
    checked2019,
    checked2018,
    checked2017,
    checked2016,
    checked2015,
    checkedJan,
    checkedFeb,
    checkedMar,
    checkedApr,
    checkedMay,
    checkedJun,
    checkedJul,
    checkedAug,
    checkedSept,
    checkedOct,
    checkedNov,
    checkedDec,
    clickHandler1,
    clickHandler2
  } = useHooks()
  const years = [
    { id: 2020, stateProp: checked2020 },
    { id: 2019, stateProp: checked2019 },
    { id: 2018, stateProp: checked2018 },
    { id: 2017, stateProp: checked2017 },
    { id: 2016, stateProp: checked2016 },
    { id: 2015, stateProp: checked2015 }
  ]

  const months1 = [
    { id: 'Jan', stateProp: checkedJan },
    { id: 'Feb', stateProp: checkedFeb },
    { id: 'Mar', stateProp: checkedMar },
    { id: 'Apr', stateProp: checkedApr },
    { id: 'May', stateProp: checkedMay },
    { id: 'Jun', stateProp: checkedJun }
  ]

  const months2 = [
    { id: 'Jul', stateProp: checkedJul },
    { id: 'Aug', stateProp: checkedAug },
    { id: 'Sept', stateProp: checkedSept },
    { id: 'Oct', stateProp: checkedOct },
    { id: 'Nov', stateProp: checkedNov },
    { id: 'Dec', stateProp: checkedDec }
  ]

  const selectedYears = []
  const selectedMonths = []
  useEffect(() => {
    if (checked2020) selectedYears.push('2020')
    if (checked2019) selectedYears.push('2019')
    if (checked2018) selectedYears.push('2018')
    if (checked2017) selectedYears.push('2017')
    if (checked2016) selectedYears.push('2016')
    if (checked2015) selectedYears.push('2015')
    getSelectedYears(selectedYears)
  }, [checked2020, checked2019, checked2018, checked2017, checked2016, checked2015])

  useEffect(() => {
    if (checkedJan) selectedMonths.push('Jan')
    if (checkedFeb) selectedMonths.push('Feb')
    if (checkedMar) selectedMonths.push('Mar')
    if (checkedApr) selectedMonths.push('Apr')
    if (checkedMay) selectedMonths.push('May')
    if (checkedJun) selectedMonths.push('Jun')
    if (checkedJul) selectedMonths.push('Jul')
    if (checkedAug) selectedMonths.push('Aug')
    if (checkedSept) selectedMonths.push('Sept')
    if (checkedOct) selectedMonths.push('Oct')
    if (checkedNov) selectedMonths.push('Nov')
    if (checkedDec) selectedMonths.push('Dec')
    getSelectedMonths(selectedMonths)
  }, [
    checkedJan,
    checkedFeb,
    checkedMar,
    checkedApr,
    checkedMay,
    checkedJun,
    checkedJul,
    checkedAug,
    checkedSept,
    checkedOct,
    checkedNov,
    checkedDec
  ])

  return (
    <Modal visible={isModalVisible} transparent>
      <View style={styles.modalStyle}>
        <View style={styles.container}>
          <View style={styles.view1}>
            <Text style={styles.headerText}>{headerTitle}</Text>
            <TouchableOpacity style={styles.closeIconContainer} activeOpacity={1} onPress={onClose}>
              <Image source={Images.iconClose} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.view2}>
            <View style={styles.year}>
              <Text style={styles.view2HeaderText}>Year</Text>
              <FlatList
                contentContainerStyle={styles.flatList}
                data={years}
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

            <View style={styles.month}>
              <Text style={styles.view2HeaderText}>Month</Text>
              <View style={styles.monthContainer}>
                <View>
                  <FlatList
                    contentContainerStyle={styles.flatList}
                    data={months1}
                    renderItem={({ item }) => (
                      <View style={styles.listItem}>
                        <TouchableOpacity
                          style={styles.circle}
                          onPress={() => clickHandler2(item.id)}>
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

                <View>
                  <FlatList
                    contentContainerStyle={styles.flatList}
                    data={months2}
                    renderItem={({ item }) => (
                      <View style={styles.listItem}>
                        <TouchableOpacity
                          style={styles.circle}
                          onPress={() => clickHandler2(item.id)}>
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
              </View>
            </View>
          </View>
          <View style={styles.view3}>
            <TouchableOpacity style={styles.button} activeOpacity={1} onPress={onBtnPress}>
              <Text style={styles.btnText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
TimeFilter.defaultProps = {
  isModalVisible: true,
  headerTitle: 'Activity history'
}
export default TimeFilter
