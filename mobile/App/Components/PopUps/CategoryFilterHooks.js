import { useState } from 'react'

export default function useHooks() {
  const [numberOfItemsSelected, setNumberOfItemsSelected] = useState(0)
  const [checkedWorld, setCheckedWorld] = useState(false)
  const [checkedNational, setCheckedNational] = useState(false)
  const [checkedSports, setCheckedSports] = useState(false)
  const [checkedScience, setCheckedScience] = useState(false)
  const [checkedEntertainment, setCheckedEntertainment] = useState(false)
  const [checkedTechnology, setCheckedTechnology] = useState(false)
  const [checkedOthers, setCheckedOthers] = useState(false)
  const [optionProps, setOptionProps] = useState({})

  const clickHandler1 = () => {
    if (checkedWorld === true) {
      setNumberOfItemsSelected(numberOfItemsSelected - 1)
      setCheckedWorld(false)
    } else {
      setNumberOfItemsSelected(numberOfItemsSelected + 1)
      setCheckedWorld(true)
    }
  }

  const clickHandler2 = () => {
    if (checkedNational === true) {
      setNumberOfItemsSelected(numberOfItemsSelected - 1)
      setCheckedNational(false)
    } else {
      setNumberOfItemsSelected(numberOfItemsSelected + 1)
      setCheckedNational(true)
    }
  }

  const clickHandler3 = () => {
    if (checkedSports === true) {
      setNumberOfItemsSelected(numberOfItemsSelected - 1)
      setCheckedSports(false)
    } else {
      setNumberOfItemsSelected(numberOfItemsSelected + 1)
      setCheckedSports(true)
    }
  }

  const clickHandler4 = () => {
    if (checkedScience === true) {
      setNumberOfItemsSelected(numberOfItemsSelected - 1)
      setCheckedScience(false)
    } else {
      setNumberOfItemsSelected(numberOfItemsSelected + 1)
      setCheckedScience(true)
    }
  }

  const clickHandler5 = () => {
    if (checkedEntertainment === true) {
      setNumberOfItemsSelected(numberOfItemsSelected - 1)
      setCheckedEntertainment(false)
    } else {
      setNumberOfItemsSelected(numberOfItemsSelected + 1)
      setCheckedEntertainment(true)
    }
  }

  const clickHandler6 = () => {
    if (checkedTechnology === true) {
      setNumberOfItemsSelected(numberOfItemsSelected - 1)
      setCheckedTechnology(false)
    } else {
      setNumberOfItemsSelected(numberOfItemsSelected + 1)
      setCheckedTechnology(true)
    }
  }

  const clickHandler7 = () => {
    if (checkedOthers === true) {
      setNumberOfItemsSelected(numberOfItemsSelected - 1)
      setCheckedOthers(false)
    } else {
      setNumberOfItemsSelected(numberOfItemsSelected + 1)
      setCheckedOthers(true)
    }
  }

  const clearAll = () => {
    setNumberOfItemsSelected(0)
    setCheckedWorld(false)
    setCheckedNational(false)
    setCheckedScience(false)
    setCheckedSports(false)
    setCheckedTechnology(false)
    setCheckedEntertainment(false)
    setCheckedOthers(false)
  }

  const addPropertyHandler = () => {
    setOptionProps({ borderTopWidth: 1 })
  }

  const removePropertyHandler = () => {
    setOptionProps({ borderTopWidth: 0 })
  }

  return {
    numberOfItemsSelected,
    checkedWorld,
    checkedNational,
    checkedScience,
    checkedSports,
    checkedTechnology,
    checkedEntertainment,
    checkedOthers,
    optionProps,
    clickHandler1,
    clickHandler2,
    clickHandler3,
    clickHandler4,
    clickHandler5,
    clickHandler6,
    clickHandler7,
    addPropertyHandler,
    removePropertyHandler,
    clearAll
  }
}
