// @flow

import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles, { scaleHeight } from '../Styles/CommentbarStyles/Commentbar2Style'
import Attach from '../../Images/Icons/icon-attach.svg'
import {add_comment} from '../../Containers/StoryLine/my_queries'
import {withApollo} from 'react-apollo';

// type Props = {
//   captureText: (arg: string) => void,
//   placeholderText: string,
//   onTouchStart: PropTypes.func,
//   onSubmit: PropTypes.func
// }

const Commentbar2 = (props) => {
  const [value, setValue] = useState('')
  const [newStyle, setNewStyle] = useState({ height: 39.87 * scaleHeight })
  const [containerStyle, setContainerStyle] = useState({ height: 90 * scaleHeight })
  const { captureText, placeholderText, onTouchStart } = props

  const client=props.client;
  if (!client){
    console.log("CLient not working")
  }
  const onSubmit=  () => {displaycomment(client)};

  useEffect(() => {
    captureText(value)
    // console.log(value,"hello")
  }, [value])


  const displaycomment = async (client) =>{
    console.log("Done")
      try {
        const { data: datacom, error: errorcom } = await client.mutate({
          mutation: add_comment,
          variables: {comment_id: "1234444444445", commented_by: "ddc626d5-eece-41e0-9550-cb98a8b8b421",
             comment_text: value, resource_id:"1c7a4e9c-bf37-4827-95f0-73878814b571", parent_comment_id: "1234444444445"}

        })
      } catch (errorcom) {
        throw errorcom
      }
    }


  const changeTextHandler = (text: string) => {
    setValue(text)
  }
  const updateSize = (newHeight) => {
    setNewStyle({
      height: newHeight + scaleHeight * 21.86
    })
    setContainerStyle({
      height: newHeight + scaleHeight * 50.14
    })
  }

  return (
    <View style={[styles.container, containerStyle]} elevation={-1}>
      <TouchableOpacity style={styles.attachIcon}>
        <Attach height="100%" />
      </TouchableOpacity>
      <View style={[styles.textInput, newStyle]}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor="rgba(27, 32, 98, 0.3)"
          selectionColor="#7B46E4"
          multiline
          maxLength={150}
          autoCorrect={false}
          spellCheck={false}
          style={styles.comment}
          onChangeText={changeTextHandler}
          onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}
          onTouchStart={onTouchStart}
        />
        <TouchableOpacity
          style={styles.post}
          activeOpacity={1}
          onPress={value !== '' ? onSubmit : null}>
          <Text style={value !== '' ? styles.visibleText : styles.blurredText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

Commentbar2.defaultProps = {
  placeholderText: 'Comment Something',
  onTouchStart: () => {},
}

export default withApollo(Commentbar2)
