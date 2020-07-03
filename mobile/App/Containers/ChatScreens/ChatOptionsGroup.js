/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import styles from './ScreenStyles/ChatOptionsGroupStyles'
import { Images } from '../../Themes'
import Elipsis from '../../Images/Icons/icon-elipsis.svg'
import { X2SButton } from '../../Components/Buttons/X2SButton'
import ListofUser from '../../Components/ListOfUsers/ListOfUsers'
import StorylineTab from '../../Components/ChatScreenComponents/StorylineTab'
import PollTab from '../../Components/ChatScreenComponents/PollTab'
import MediaTab from '../../Components/ChatScreenComponents/MediaTab'
import TabBar from '../../Components/ChatScreenComponents/TabBar'
import RenameGroup from './RenameGroup'

type Props = {
  item: {
    id: string,
    grpicon: Image,
    members: Array<{ id: string, name: string, image: Image, activeStatus: string }>,
    image: Image,
    name: string,
    activeStatus: string
  },
  route: {
    params: {
      title: string
    }
  }
} & NavigationContainerProps

const Tab = createMaterialTopTabNavigator()
const Data = [
  {
    id: '1'
  },
  {
    id: '2',
    members: [
      { id: '5', name: 'Tony', image: Images.voterIcon2, activeStatus: 'Active 45 minutes' },
      { id: '6', name: 'Steve', image: Images.voterIcon2, activeStatus: 'Active 45 minutes' },
      { id: '7', name: 'Banner', image: Images.voterIcon2, activeStatus: 'Active 45 minutes' },
      { id: '8', name: 'Natasha', image: Images.voterIcon2, activeStatus: 'Active 45 minutes' },
      { id: '9', name: 'HawkEye', image: Images.voterIcon2, activeStatus: 'Active 45 minutes' }
    ],
    groupname: '',
    grpicon: Images.profilePicture
  },
  {
    id: '3'
  }
]
const ChatOptionsHeader = (props: Props) => {
  const { title } = props.route.params
  const { navigation } = props

  // Rename Group
  const [RenamePopUpVisible, setRenamePopUpVisible] = useState(false)
  const openRenamePopUp = () => {
    setRenamePopUpVisible(true)
    console.log('Rename PopUp running')
  }
  const closeRenamePopUp = () => {
    setRenamePopUpVisible(false)
    console.log('Rename PopUp Close')
  }
  const [typedText, setTypedText] = useState('Rename group')
  const inputHandler = (text) => {
    setTypedText(text)
    console.log(typedText)
  }
  const changeGroupName = () => {
    setgrpname(typedText)
    console.log('Saved!')
    closeRenamePopUp()
  }
  const [grpname, setgrpname] = useState(title)
  const renderuser = ({ item }: Props) => {
    return (
      <View style={styles.listofuser}>
        <ListofUser
          name={item.name}
          image={item.image}
          optionalText={item.activeStatus}
          buttonText="Message"
        />
      </View>
    )
  }
  const renderitem = ({ item }: Props) => {
    if (item.id === '1') {
      return (
        <View style={styles.header}>
          <View style={styles.backbutton}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat2', { title: grpname })}>
              <Image source={Images.arrowleft} style={styles.arrowleft} />
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>Chat options</Text>
          <View style={styles.elipsis}>
            <TouchableOpacity>
              <Elipsis />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (item.id === '2') {
      return (
        <View style={styles.container1}>
          <Image source={item.grpicon} style={styles.grpicon} />
          <View style={styles.cameracont}>
            <TouchableOpacity>
              <Image source={Images.camera2x} style={styles.cameraimg} />
            </TouchableOpacity>
          </View>
          {grpname === '' ? (
            [
              item.members.length === 2 ? (
                <Text style={styles.grpnametext}>
                  {item.members[0].name}, {item.members[1].name}
                </Text>
              ) : (
                <Text style={styles.grpnametext}>
                  {item.members[0].name}, {item.members[1].name}, +{item.members.length - 2}
                </Text>
              )
            ]
          ) : (
            <Text style={styles.grpnametext}>{grpname}</Text>
          )}
          <View style={styles.button}>
            <TouchableOpacity>
              <X2SButton title="Rename group" outline onPress={openRenamePopUp} />
            </TouchableOpacity>
            <RenameGroup
              isModalVisible={RenamePopUpVisible}
              onClose={closeRenamePopUp}
              captureText={inputHandler}
              onBtnPress={changeGroupName}
            />
          </View>
          <View>
            <Text style={styles.membertxt}>Members</Text>
            <View style={styles.addcont}>
              <TouchableOpacity>
                <Text style={styles.addtext}>Add more</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.flatlist}>
            <FlatList
              data={item.members}
              keyExtractor={(post) => post.id}
              renderItem={renderuser}
            />
          </View>
        </View>
      )
    }
    return (
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Storyline" component={StorylineTab} />
        <Tab.Screen name="Polls" component={PollTab} />
        <Tab.Screen name="Media" component={MediaTab} />
      </Tab.Navigator>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={renderitem}
        stickyHeaderIndices={[0]}
        listKey={(item) => `${item.id}D`}
      />
    </View>
  )
}

export default ChatOptionsHeader
