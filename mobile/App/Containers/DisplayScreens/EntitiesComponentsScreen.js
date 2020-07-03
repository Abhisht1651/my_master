// @flow

import React from 'react'
import { View, ScrollView } from 'react-native'

// Styles
import styles from '../Styles/TestScreenEntitiesStyles'
import images from '../../Themes/Images'

import CardType1 from '../../Components/Entities/CardType1'
import CardType2 from '../../Components/Entities/CardType2'
import ThumbsLarge from '../../Components/Entities/ThumbsLarge'
import ThumbsSmall from '../../Components/Entities/ThumbsSmall'
import Profile from '../../Components/Entities/Profile'

const TestScreenEntities = () => {
  const {
    EntitiesImage0,
    EntitiesImage1,
    EntitiesImage2,
    EntitiesImage3,
    EntitiesImage4,
    EntitiesImage5,
    EntitiesImage6,
    EntitiesImage7,
    EntitiesImage8,
    EntitiesImage9,
    EntitiesImage10,
    EntitiesImage11
  } = images
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View>
            <View>
              <CardType1 title="India" count={45} text="Follow" profileIcons={EntitiesImage0} />
              <CardType1
                title="United States of America"
                count={55}
                text="Follow"
                profileIcons={EntitiesImage1}
              />
              <CardType1 title="India" count={46} text="Following" profileIcons={EntitiesImage0} />
              <CardType1
                title="United States of America"
                count={56}
                text="Following"
                profileIcons={EntitiesImage1}
              />
            </View>

            <View style={styles.box0}>
              <CardType2 title="India" count={4} profileIcons={[EntitiesImage0]} />
              <CardType2 title="Donald" count={45} profileIcons={[EntitiesImage2]} />
            </View>

            <View style={styles.box0}>
              <View>
                <ThumbsLarge title="India" profileIcons={[EntitiesImage0]} />
              </View>
              <View>
                <ThumbsLarge title="USA" profileIcons={[EntitiesImage3]} />
              </View>
              <ThumbsLarge title="UNICEF" profileIcons={[EntitiesImage4]} />
              <View>
                <ThumbsLarge title="European" profileIcons={[EntitiesImage5]} />
              </View>
              <View>
                <ThumbsLarge title="European" profileIcons={[EntitiesImage6]} />
              </View>
            </View>

            <View style={styles.box1}>
              <View style={styles.box}>
                <ThumbsSmall profileIcons={[EntitiesImage7]} />
              </View>
              <View style={styles.box}>
                <ThumbsSmall profileIcons={[EntitiesImage8]} />
              </View>
              <View style={styles.box}>
                <ThumbsSmall profileIcons={[EntitiesImage9]} />
              </View>
              <View style={styles.box}>
                <ThumbsSmall profileIcons={[EntitiesImage10]} />
              </View>
            </View>

            <View style={styles.box2}>
              <Profile profileIcons={[EntitiesImage11]} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default TestScreenEntities
