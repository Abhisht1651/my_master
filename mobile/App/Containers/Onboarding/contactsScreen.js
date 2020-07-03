// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, FlatList, Platform } from 'react-native'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
// Styles

import LinearGradient from 'react-native-linear-gradient'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'
import styles from '../Styles/Onboarding/contactScreenStyles'
import Header from '../../Components/Header'
import { LargeButton } from '../../Components/Buttons/LargeButton'
import { MediumButton } from '../../Components/Buttons/MediumButton'
import ClickableText from '../../Components/ClickableText'
import Users from '../../Components/ListOfFriends/ListOfFriends'

import { Images } from '../../Themes'

type Props = NavigationContainerProps & {}

const ContactsScreen = (props: Props) => {
  const [contactCount, setcontactCount] = useState(0)
  const [modalVisible, setmodalVisible] = useState(false)
  const [DATA, setDATA] = useState([])
  const [DATA1, setDATA1] = useState([])
  const [DATA2, setDATA2] = useState([])
  useEffect(() => {
    setcontactCount(96)
    setDATA([
      {
        id: '1',
        title: 'Indrajit Sinha',
        selected: false
      },
      {
        id: '2',
        title: 'Purnima Garg',
        selected: false
      },
      {
        id: '3',
        title: 'Ayushi Saxena',
        selected: false
      },
      {
        id: '4',
        title: 'Shrey Agarwal',
        selected: false
      },
      {
        id: '5',
        title: 'Nikita Govil',
        selected: false
      }
    ])
    setDATA1([
      {
        id: '1',
        title: 'Indrajit Sinha',
        selected: false
      },
      {
        id: '2',
        title: 'Purnima Garg',
        selected: false
      },
      {
        id: '3',
        title: 'Ayushi Saxena',
        selected: false
      },
      {
        id: '4',
        title: 'Shrey Agarwal',
        selected: false
      },
      {
        id: '5',
        title: 'Nikita Govil',
        selected: false
      }
    ])
    setDATA2([
      {
        id: '1',
        title: 'Indrajit Sinha',
        selected: false
      },
      {
        id: '2',
        title: 'Purnima Garg',
        selected: false
      },
      {
        id: '3',
        title: 'Ayushi Saxena',
        selected: false
      },
      {
        id: '4',
        title: 'Shrey Agarwal',
        selected: false
      },
      {
        id: '5',
        title: 'Nikita Govil',
        selected: false
      }
    ])
  }, [])

  // https://medium.com/better-programming/how-to-highlight-and-multi-select-items-in-a-flatlist-component-react-native-1ca416dec4bc
  const FlatListItemSeparator = () => <View style={styles.seperator} />

  const FlatListItemSeparatorEmail = () => <View style={styles.seperatorEmail} />

  const FlatListHeaderEmail = () => <View style={styles.flatlistheaderEmail} />

  const FlatListFooterEmail = () => <View style={styles.flatListFooterEmail} />

  const FlatListHeader = () => <View style={styles.flatlistheader} />

  const FlatListFooter = () => <View style={styles.flatlistfooter} />

  const selectItem = (dataa: PropTypes.object) => {
    const data = dataa
    data.item.selected = !data.item.selected
    const items = [...DATA]
    const index = items.findIndex((item) => data.item.id === item.id)

    items[index] = data.item
    setDATA(items)
  }

  const selectItemEmail = (dataa: PropTypes.object) => {
    const data = dataa
    data.item.selected = !data.item.selected
    const items = [...DATA1]
    const index = items.findIndex((item) => data.item.id === item.id)

    items[index] = data.item
    setDATA1(items)
  }

  const selectItemContact = (dataa: PropTypes.object) => {
    const data = dataa
    data.item.selected = !data.item.selected
    const items = [...DATA2]
    const index = items.findIndex((item) => data.item.id === item.id)

    items[index] = data.item
    setDATA2(items)
  }

  const renderItemContact = (
    data: PropTypes.object,
    unselectedText: string,
    selectedText: string
  ) => (
    <View style={styles.itemContainer}>
      <Users
        btnText1={unselectedText}
        btnText2={selectedText}
        image={Images.picture}
        name={data.item.title}
        onPress={() => selectItemContact(data)}
        onCancelPress={() => selectItemContact(data)}
      />
    </View>
  )

  const renderItemEmail = (
    data: PropTypes.object,
    unselectedText: string,
    selectedText: string
  ) => (
    <View style={styles.itemContainer}>
      <Users
        btnText1={unselectedText}
        btnText2={selectedText}
        image={Images.picture}
        name={data.item.title}
        onPress={() => selectItemEmail(data)}
        onCancelPress={() => selectItemEmail(data)}
      />
    </View>
  )

  const renderItem = (data: PropTypes.object, unselectedText: string, selectedText: string) => (
    <View style={styles.itemContainer}>
      <Users
        btnText1={unselectedText}
        btnText2={selectedText}
        image={Images.picture}
        name={data.item.title}
        onPress={() => selectItem(data)}
        onCancelPress={() => selectItem(data)}
      />
    </View>
  )

  return (
    <View style={styles.headerPosition}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <Modal
        isVisible={modalVisible}
        backdropColor="#222223"
        onBackdropPress={() => setmodalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <TouchableOpacity
              style={styles.modalCrossContainer}
              onPress={() => setmodalVisible(false)}>
              <Image source={Images.closeIconPurple} style={styles.modalCross} />
            </TouchableOpacity>

            <Text style={styles.modalHeadingText}>Add All</Text>
            <Text style={styles.modalDescriptionText}>
              Are you sure you want to add all friends?
            </Text>
            <View style={styles.alignViewCenter}>
              <MediumButton
                title="Continue"
                onPress={() => {
                  setmodalVisible(false)
                  props.navigation.navigate('WelcomeSignUp')
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Header
        container={{ backgroundColor: 'white' }}
        count={3}
        onPressBack={() => props.navigation.goBack()}
        rightText="Skip"
      />
      <ScrollView style={styles.scrollBackground}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>We’ve found {contactCount} connections</Text>
        </View>
        <View style={styles.flatlistHeadingContainer}>
          <Text style={styles.flatListHeadingText}>Friends in Newzera</Text>
          <ClickableText
            textStyle={styles.clickableText}
            onPress={() => setmodalVisible(true)}
            text="Add all"
          />
        </View>
        <View style={styles.contactsCardContainer1}>
          <View>
            <FlatList
              data={DATA}
              renderItem={(item) => renderItem(item, 'Add', 'Requested')}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={FlatListItemSeparator}
              extraData={DATA}
              ListHeaderComponent={FlatListHeader}
              ListFooterComponent={FlatListFooter}
            />
          </View>
          <View style={styles.emailContainer}>
            <View style={[styles.flatlistHeadingContainer, styles.emailcontainerHeading]}>
              <Text style={styles.flatListHeadingText}>Invite friends via email</Text>
              <ClickableText textStyle={styles.clickableText} text="Invite all" />
            </View>
            <View style={{ marginTop: responsiveScreenHeight(3.7) }}>
              <FlatList
                data={DATA1}
                renderItem={(item) => renderItemEmail(item, 'Invite', 'Invited')}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={FlatListItemSeparatorEmail}
                extraData={DATA1}
                ListHeaderComponent={FlatListHeaderEmail}
                ListFooterComponent={FlatListFooterEmail}
              />
            </View>
            <View style={[styles.flatlistHeadingContainer, styles.friendsContactContainer]}>
              <Text style={styles.flatListHeadingText}>Invite friends via contact</Text>
              <ClickableText textStyle={styles.clickableText} text="Invite all" />
            </View>
            <View
              style={{
                marginTop: responsiveScreenHeight(3.7),
                marginBottom: responsiveScreenHeight(18)
              }}>
              <FlatList
                data={DATA2}
                renderItem={(item) => renderItemContact(item, 'Invite', 'Invited')}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={FlatListItemSeparatorEmail}
                extraData={DATA2}
                ListHeaderComponent={FlatListHeaderEmail}
                ListFooterComponent={FlatListFooterEmail}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <LinearGradient colors={['#FFFFFF00', '#F7F7F7']} style={styles.gradient}>
        <LargeButton title="Continue" onPress={() => props.navigation.navigate('WelcomeSignUp')} />
        {/* <RoundedButton
          style={styles.loginButton}
          textStyle={styles.buttonText}
          onPress={() => props.navigation.navigate('WelcomeSignUp')}
          text="Continue"
        /> */}
      </LinearGradient>
    </View>
  )
}
export default ContactsScreen
