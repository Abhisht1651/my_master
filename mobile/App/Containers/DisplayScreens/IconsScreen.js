import React from 'react'
import { View, ScrollView } from 'react-native'

// Styles
import WorldSVG from '../../Images/Icons/icon-world.svg'
import WorldSmallSVG from '../../Images/Icons/icon-world-small.svg'
import NationalSVG from '../../Images/Icons/icon-national.svg'
import NationalSmallSVG from '../../Images/Icons/icon-national-small.svg'
import EntertainmentSVG from '../../Images/Icons/icon-entretainment.svg'
import EntertainmentSmallSVG from '../../Images/Icons/icon-entretainment-small.svg'
import TechnologySVG from '../../Images/Icons/icon-technology.svg'
import TechnologySmallSVG from '../../Images/Icons/icon-technology-small.svg'

import SportsSVG from '../../Images/Icons/icon-sports.svg'
import SportsSmallSVG from '../../Images/Icons/icon-sports-small.svg'
import ScienceSVG from '../../Images/Icons/icon-small.svg'
import ScienceSmallSVG from '../../Images/Icons/icon-science-small.svg'
import OtherSVG from '../../Images/Icons/Icon-other.svg'
import OtherSmallSVG from '../../Images/Icons/icon-other-small.svg'

import InactiveDark from '../../Images/Icons/icon-inactive-dark.svg'
import ActiveDark from '../../Images/Icons/icon-active-dark.svg'
import MajorEventsSelected from '../../Images/Icons/icon-major-events-selected.svg'
import AllEvents from '../../Images/Icons/icon-all-events-selected.svg'
import MajorEventsNotSelected from '../../Images/Icons/icon-major-events-not-selected.svg'
import AllEventsNotSelected from '../../Images/Icons/icon-all-events-not-selected.svg'
import Typing from '../../Images/Icons/icon-typing.svg'
import Elipsis from '../../Images/Icons/icon-elipsis.svg'
import Elipsis1 from '../../Images/Icons/icon-elipsis-1.svg'

import CloseSVG from '../../Images/Icons/icon-close.svg'
import CloseDarkSVG from '../../Images/Icons/icon-close-dark.svg'
import CloseSearchSVG from '../../Images/Icons/icon-close-search.svg'
import CloseSmallSVG from '../../Images/Icons/icon-close-small.svg'
import SourceSVG from '../../Images/Icons/icon-source.svg'
import CameraOutlineSVG from '../../Images/Icons/icon-camera-outline.svg'
import CameraOutlinePurpleSVG from '../../Images/Icons/icon-camera-outline-purple.svg'
import CameraSVG from '../../Images/Icons/icon-camera-dark.svg'

import LocationOutlineSVG from '../../Images/Icons/icon-location-outline.svg'
import AttachSVG from '../../Images/Icons/icon-attach.svg'
import StickerOutlineSVG from '../../Images/Icons/icon-sticker-outline.svg'
import StickerDisableSVG from '../../Images/Icons/icon-stickers-diable.svg'
import StickerFilledSVG from '../../Images/Icons/icon-sticker-filled.svg'
import SearchSVG from '../../Images/Icons/icon-search.svg'
import NewMessageSVG from '../../Images/Icons/icon-new-message.svg'
import FilterSVG from '../../Images/Icons/Icon-filter.svg'

import BoxedCommentSVG from '../../Images/Icons/icon-boxed-comment.svg'
import BoxedReactSVG from '../../Images/Icons/icon-boxed-react.svg'
import BoxedBoostSVG from '../../Images/Icons/icon-boxed-boost.svg'
import BoxedRavenSVG from '../../Images/Icons/icon-boxed-raven.svg'

import StorylineBig from '../../Images/Icons/icon-storyline-big.svg'
import TrendingSVG from '../../Images/Icons/icon-trending-big.svg'
import PollBigSVG from '../../Images/Icons/icon-poll-big.svg'

import PollSmallSVG from '../../Images/Icons/icon-poll-small.svg'
import TrendingSmallSVG from '../../Images/Icons/icon-trending-smal.svg'
import ActiveSVG from '../../Images/Icons/icon-active.svg'
import ReplySVG from '../../Images/Icons/icon-reply.svg'
import BoostSVG from '../../Images/Icons/icon-boost.svg'
import StoryReactSVG from '../../Images/Icons/icon-story-react-2.svg'
import ShareBlueSVG from '../../Images/Icons/icon-story-shareblue.svg'

import ReachSVG from '../../Images/Icons/icon-reach.svg'
import InactiveSVG from '../../Images/Icons/icon-inactive.svg'
import StoryCommentsSVG from '../../Images/Icons/icon-story-comments.svg'
import FollowersSVG from '../../Images/Icons/icon-followers.svg'

import SettingSVG from '../../Images/Icons/icon-setting.svg'
import ModeLightSVG from '../../Images/Icons/icon-mode-light.svg'
import ModeDarkSVG from '../../Images/Icons/icon-mode-dark.svg'
import NotificationSVG from '../../Images/Icons/icon-notifications.svg'
import MenuNotificationSVG from '../../Images/Icons/icon-menu-notifiction.svg'
import MenuSVG from '../../Images/Icons/icon-menu.svg'
import FStorylines from '../../Components/Icons/FStorylines'
import FEntities from '../../Components/Icons/FEntities'
import Friends from '../../Components/Icons/Friends'
import Polls from '../../Components/Icons/Polls'
import Requests from '../../Components/Icons/Requests'
import InviteFriends from '../../Components/Icons/InviteFriends'
import List from '../../Components/Icons/List'
import List2 from '../../Components/Icons/List2'
import List3 from '../../Components/Icons/List3'
import Bubbles from '../../Components/Icons/Bubbles'
import Bubbles2 from '../../Components/Icons/Bubbles2'

import CurrentLocationSmallSVG from '../../Images/Icons/icon-currentlocation-small.svg'
import CurrentLocationSVG from '../../Images/Icons/icon-currentlocation.svg'
import BlockSVG from '../../Images/Icons/icon-block.svg'
import ImportContactSVG from '../../Images/Icons/Icon-importcontact.svg'
import PrivateSVG from '../../Images/Icons/Icon private.svg'
import SponsoredSVG from '../../Images/Icons/icon-sponsored.svg'

// Styles
import styles from '../Styles/TestScreenIconsStyles'

const TestScreenIcons = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.box1}>
          <View style={styles.box}>
            <WorldSVG />
          </View>
          <View style={styles.box}>
            <NationalSVG />
          </View>
          <View style={styles.box}>
            <EntertainmentSVG />
          </View>
          <View style={styles.box}>
            <TechnologySVG />
          </View>
          <View style={styles.box}>
            <SportsSVG />
          </View>
          <View style={styles.box}>
            <ScienceSVG />
          </View>
          <View style={styles.box}>
            <OtherSVG />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box2}>
            <WorldSmallSVG />
          </View>
          <View style={styles.box2}>
            <NationalSmallSVG />
          </View>
          <View style={styles.box2}>
            <EntertainmentSmallSVG />
          </View>
          <View style={styles.box2}>
            <TechnologySmallSVG />
          </View>
          <View style={styles.box2}>
            <SportsSmallSVG />
          </View>
          <View style={styles.box2}>
            <ScienceSmallSVG />
          </View>
          <View style={styles.box2}>
            <OtherSmallSVG />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <InactiveDark />
          </View>
          <View style={styles.box}>
            <ActiveDark />
          </View>
          <View style={styles.box}>
            <MajorEventsSelected />
          </View>
          <View style={styles.box}>
            <AllEvents />
          </View>
          <View style={styles.box}>
            <MajorEventsNotSelected />
          </View>
          <View style={styles.box}>
            <AllEventsNotSelected />
          </View>
          <View style={styles.box}>
            <Typing />
          </View>
          <View style={styles.box}>
            <Elipsis />
          </View>
          <View style={styles.box}>
            <Elipsis1 />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <CloseSVG />
          </View>
          <View style={styles.box}>
            <CloseDarkSVG />
          </View>
          <View style={styles.box}>
            <CloseSearchSVG />
          </View>
          <View style={styles.box}>
            <CloseSmallSVG />
          </View>
          <View style={styles.box}>
            <SourceSVG />
          </View>
          <View style={styles.box}>
            <CameraSVG />
          </View>
          <View style={styles.box}>
            <CameraOutlineSVG />
          </View>
          <View style={styles.box}>
            <CameraOutlinePurpleSVG />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <LocationOutlineSVG />
          </View>
          <View style={styles.box}>
            <AttachSVG />
          </View>
          <View style={styles.box}>
            <StickerOutlineSVG />
          </View>
          <View style={styles.box}>
            <StickerDisableSVG />
          </View>
          <View style={styles.box}>
            <StickerFilledSVG />
          </View>
          <View style={styles.box}>
            <SearchSVG />
          </View>
          <View style={styles.box}>
            <NewMessageSVG />
          </View>
          <View style={styles.box}>
            <FilterSVG />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <BoxedCommentSVG />
          </View>
          <View style={styles.box}>
            <BoxedReactSVG />
          </View>
          <View style={styles.box}>
            <BoxedBoostSVG />
          </View>
          <View style={styles.box}>
            <BoxedRavenSVG />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <StorylineBig />
          </View>
          <View style={styles.box}>
            <TrendingSVG />
          </View>
          <View style={styles.box}>
            <PollBigSVG />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <PollSmallSVG />
          </View>
          <View style={styles.box}>
            <TrendingSmallSVG />
          </View>
          <View style={styles.box}>
            <ActiveSVG />
          </View>
          <View style={styles.box}>
            <ReplySVG />
          </View>
          <View style={styles.box}>
            <BoostSVG />
          </View>
          <View style={styles.box}>
            <StoryReactSVG />
          </View>
          <View style={styles.box}>
            <ShareBlueSVG />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <ReachSVG />
          </View>
          <View style={styles.box}>
            <InactiveSVG />
          </View>
          <View style={styles.box}>
            <StoryCommentsSVG />
          </View>
          <View style={styles.box}>
            <FollowersSVG />
          </View>
        </View>

        <View>
          <View style={styles.box}>
            <FStorylines />
          </View>
          <View style={styles.box}>
            <FEntities />
          </View>
          <View style={styles.box}>
            <Friends />
          </View>
          <View style={styles.box}>
            <Polls />
          </View>
          <View style={styles.box}>
            <Requests />
          </View>
          <View style={styles.box}>
            <InviteFriends />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <SettingSVG />
          </View>
          <View style={styles.box}>
            <ModeLightSVG />
          </View>
          <View style={styles.box}>
            <ModeDarkSVG />
          </View>
          <View style={styles.box}>
            <NotificationSVG />
          </View>
          <View style={styles.box}>
            <MenuNotificationSVG />
          </View>
          <View style={styles.box}>
            <MenuSVG />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <CurrentLocationSmallSVG />
          </View>
          <View style={styles.box}>
            <CurrentLocationSVG />
          </View>
          <View style={styles.box}>
            <BlockSVG />
          </View>
          <View style={styles.box}>
            <ImportContactSVG />
          </View>
        </View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <PrivateSVG />
          </View>
          <View style={styles.box}>
            <SponsoredSVG />
          </View>
        </View>

        <View>
          <View style={styles.box}>
            <Bubbles />
          </View>
          <View style={styles.box}>
            <Bubbles2 />
          </View>
          <View style={styles.box}>
            <List />
          </View>
          <View style={styles.box}>
            <List2 />
          </View>
          <View style={styles.box}>
            <List3 />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default TestScreenIcons
