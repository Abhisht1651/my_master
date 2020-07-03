// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, ImageProps } from 'react-native'
import images from '../../Themes/Images'
import Bubbles2 from '../../Components/Icons/Bubbles2'
import ThumbsLarge from '../../Components/Entities/ThumbsLarge'
import Profile from '../../Components/Entities/Profile'
import Storyline from '../../Components/StoryLineShortCardDefualt'
import FilterSVG from '../../Images/Icons/Icon-filter.svg'
import TimeFilter from '../../Components/TimeFilter/TimeFilter'
import StoryLineLongFormMultipleEvents from '../../Components/StoryLineLongFormMultipleEvents'

// Styles
import styles from './ScreenStyles/Entities2Styles'
import { X2SButton } from '../../Components/Buttons/X2SButton'

type Props = {
  title: string,
  about: string,
  count: number,
  details: string,
  profilePic: ImageProps
} & NavigationContainerProps

const Entities2 = (props: Props) => {
  const { navigation } = props
  const [TimeFilterPopUpVisible, setTimeFilterPopUpVisible] = useState(false)
  const openTimeFilterPopUp = () => {
    setTimeFilterPopUpVisible(true)
  }
  const closeTimeFilterPopUp = () => {
    setTimeFilterPopUpVisible(false)
  }
  const captureYears = (arr: Array<string>) => {
    console.log(arr)
  }
  const captureMonths = (arr: Array<string>) => {
    console.log(arr)
  }
  const pageNavigation = (navigate) => {
    navigation.navigate(navigate)
  }
  const Entities2Navigation = () => {
    navigation.navigate('Entities2')
  }
  const [pressStatus, setStatus] = useState(false)
  const changeStatus = () => {
    console.log('Hi')
    setStatus(!pressStatus)
  }
  return (
    <View style={styles.screen}>
      <View style={styles.topBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.arrow} />
        </TouchableOpacity>
        <Bubbles2 />
      </View>
      <ScrollView>
        <View style={styles.contentBox}>
          <View style={styles.smallContentBox}>
            <View style={styles.profilepicBox}>
              <Profile profileIcons={[props.profilePic]} />
            </View>
            <View style={styles.profileDetails}>
              <Text style={styles.profileTitleFont}>{props.title}</Text>
              <Text style={styles.profileAboutFont}>{props.about}</Text>
            </View>
            <View style={styles.followContentBox}>
              <TouchableOpacity onPress={changeStatus}>
                {!pressStatus ? (
                  <X2SButton outline title="Follow" onPress={changeStatus} />
                ) : (
                  <X2SButton disabled title="Following" onPress={changeStatus} />
                )}
              </TouchableOpacity>
              <Text style={styles.followDetails}>{`${props.count}K Following`}</Text>
            </View>
            <View style={styles.profileDetailsBox}>
              <Text style={styles.detailTitleFont}>Details</Text>
              <Text style={styles.detailsFont}>{props.details}</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerBox}>
          <View style={styles.footerBox1}>
            <View style={styles.textBox}>
              <Text style={styles.textFont1}>Similar Entities</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RelatedEntities')}>
                <Text style={styles.textFont2}>View All</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footerBox2}>
            <ScrollView horizontal>
              <View style={styles.box2}>
                <ThumbsLarge title="India" profileIcons={[images.EntitiesImage0]} />
              </View>
              <View style={styles.box}>
                <ThumbsLarge title="USA" profileIcons={[images.EntitiesImage3]} />
              </View>
              <View style={styles.box} profileIcons={[images.EntitiesImage4]}>
                <ThumbsLarge title="UNICEF" profileIcons={[images.EntitiesImage4]} />
              </View>
              <View style={styles.box}>
                <ThumbsLarge title="European" profileIcons={[images.EntitiesImage6]} />
              </View>
              <View style={styles.box}>
                <ThumbsLarge title="Europe" profileIcons={[images.EntitiesImage5]} />
              </View>
              <View style={styles.box}>
                <ThumbsLarge />
              </View>
              <View style={styles.box}>
                <ThumbsLarge />
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.footerBox3}>
          <View style={styles.footerBox1}>
            <View style={styles.textBox}>
              <Text style={styles.textFont1}>Trending Storylines</Text>
              <TouchableOpacity onPress={() => navigation.navigate('TrendingStoryline')}>
                <Text style={styles.textFont2}>View All</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footerBox4}>
            <ScrollView horizontal>
              <View style={styles.postWidthtop}>
                <Storyline />
              </View>
              <View style={styles.postWidth}>
                <Storyline />
              </View>
              <View style={styles.postWidth}>
                <Storyline />
              </View>
              <View style={styles.postWidth}>
                <Storyline />
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.footerBox5}>
          <View style={styles.footerBox1}>
            <View style={styles.textBox}>
              <Text style={styles.textFont1}>All Storylines</Text>
              <View>
                <TouchableOpacity style={styles.filter} onPress={openTimeFilterPopUp}>
                  <FilterSVG />
                  <Text style={styles.filterFont}>Time Filter</Text>
                </TouchableOpacity>
                <TimeFilter
                  headerTitle="Time Filter"
                  isModalVisible={TimeFilterPopUpVisible}
                  getSelectedYears={captureYears}
                  getSelectedMonths={captureMonths}
                  onClose={closeTimeFilterPopUp}
                  onBtnPress={closeTimeFilterPopUp}
                />
              </View>
            </View>
          </View>
          <View style={styles.multipleEvents}>
            <StoryLineLongFormMultipleEvents
              carouselItems={[
                {
                  storyImage: images.storyImage,
                  previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
                  commentText: '34K comments',
                  read: false,
                  onPressCard: () => {
                    pageNavigation('FullPost')
                  },
                  entityItems: [
                    {
                      image: images.iconStoryLineRelatedEntity1,
                      onPressEntity: () => {
                        console.log('Tap')
                        Entities2Navigation()
                      }
                    },
                    {
                      image: images.iconStoryLineRelatedEntity2,
                      onPressEntity: () => {
                        console.log('Tap2')
                        Entities2Navigation()
                      }
                    },
                    {
                      image: images.iconStoryLineRelatedEntity3,
                      onPressEntity: () => {
                        console.log('Tap3')
                        Entities2Navigation()
                      }
                    },
                    {
                      image: images.iconStoryLineRelatedEntity4,
                      onPressEntity: () => {
                        console.log('Tap4')
                        Entities2Navigation()
                      }
                    }
                  ]
                }
              ]}
            />
            <View style={styles.verticalgap} />
            <StoryLineLongFormMultipleEvents />
            <View style={styles.verticalgap} />
            <StoryLineLongFormMultipleEvents />
            <View style={styles.verticalgap} />
            <StoryLineLongFormMultipleEvents />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

Entities2.defaultProps = {
  title: 'Donald Trump',
  about: 'President of the USA',
  count: 54,
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  profilePic: images.EntitiesImage11
}

export default Entities2
