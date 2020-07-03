import { useState } from 'react'

import { scaleHeight } from '../Styles/DropDownStyles/DropDown1Style'

export default function useHooks() {
  const [hidden, setHidden] = useState(true)
  const [heightStyle, setHeightStyle] = useState({ height: 30 * scaleHeight })
  const [headerText, setHeaderText] = useState('Gender')
  const [option1, setOption1] = useState('Female')
  const [option2, setOption2] = useState('Male')
  const [option3, setOption3] = useState('Other')
  const [option4, setOption4] = useState('Prefer not to say')

  const toggleListHandler = () => {
    if (hidden) {
      setHeightStyle({ height: 170 * scaleHeight })
    } else {
      setHeightStyle({ height: 30 * scaleHeight })
    }
    setHidden(!hidden)
    setOption1('Female')
    setOption2('Male')
    setOption3('Other')
    setOption4('Prefer not to say')
  }

  const listHandler1 = () => {
    setHeaderText(option1)
    if (!hidden) {
      setHeightStyle({ height: 30 * scaleHeight })
      setHidden(true)
    }
  }
  const listHandler2 = () => {
    setHeaderText(option2)
    if (!hidden) {
      setHeightStyle({ height: 30 * scaleHeight })
      setHidden(true)
    }
  }

  const listHandler3 = () => {
    setHeaderText(option3)
    if (!hidden) {
      setHeightStyle({ height: 30 * scaleHeight })
      setHidden(true)
    }
  }

  const listHandler4 = () => {
    setHeaderText(option4)
    if (!hidden) {
      setHeightStyle({ height: 30 * scaleHeight })
      setHidden(true)
    }
  }

  return {
    hidden,
    headerText,
    heightStyle,
    option1,
    option2,
    option3,
    option4,
    toggleListHandler,
    listHandler1,
    listHandler2,
    listHandler3,
    listHandler4
  }
}
