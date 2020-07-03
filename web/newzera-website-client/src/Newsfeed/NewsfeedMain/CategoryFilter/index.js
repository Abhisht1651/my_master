// @flow

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Images from '../../Themes'

import './CategoryFilterStyle.css'

type Props = {
  closeCat: PropTypes.func
}

export default function CategoryFilter(props: Props) {
  const { closeCat } = props

  const [numberOfItemsSelected, setNumberOfItemsSelected] = useState(0)
  const [checkedWorld, setCheckedWorld] = useState(false)
  const [checkedNational, setCheckedNational] = useState(false)
  const [checkedSports, setCheckedSports] = useState(false)
  const [checkedScience, setCheckedScience] = useState(false)
  const [checkedEntertainment, setCheckedEntertainment] = useState(false)
  const [checkedTechnology, setCheckedTechnology] = useState(false)

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

  const clearAll = () => {
    setNumberOfItemsSelected(0)
    setCheckedWorld(false)
    setCheckedNational(false)
    setCheckedScience(false)
    setCheckedSports(false)
    setCheckedTechnology(false)
    setCheckedEntertainment(false)
  }

  return (
    <div className="backgroundCf">
      <div style={{ padding: '0 1.04vw 0 1.61vw' }}>
        <div style={{ paddingTop: '1.62vh' }} />
        <div className="flex2Cf">
          <div className="categoryHead">
            <div style={{ paddingTop: '0.347vh' }} />
            Category Filter
          </div>
          <div
            onClick={closeCat}
            onKeyPress={closeCat}
            role="presentation"
            style={{ cursor: 'pointer' }}>
            <img src={Images.Cross} className="crossImgCf" alt="" />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '1.75vh' }} />
      <hr style={{ color: '#DCDCE9', opacity: '0.15' }} />
      <div style={{ paddingTop: '2.5vh' }} />
      <div style={{ padding: '0 1.04vw 0 1.61vw' }}>
        <div className="flex2Cf">
          <div className="flex1Cf">
            <div style={{ width: '2.05vw' }}>
              <img src={Images.World} className="iconWorldCf" alt="" />
            </div>
            <div className="iconTextCf">World</div>
          </div>
          <div
            className="boxCf"
            onClick={clickHandler1}
            onKeyPress={clickHandler1}
            role="presentation">
            {checkedWorld && (
              <div style={{ margin: '-0.41vh 0 0 0.2vw' }}>
                <img src={Images.Checkmark} className="checkImgCf" alt="" />
              </div>
            )}
          </div>
        </div>
        <div style={{ paddingTop: '1.71vh' }} />
        <hr style={{ color: '#DCDCE9', opacity: '0.15' }} />
        <div style={{ paddingTop: '1.71vh' }} />
        <div className="flex2Cf">
          <div className="flex1Cf">
            <div style={{ width: '2.05vw' }}>
              <img src={Images.National} className="iconWorldCf" alt="" />
            </div>
            <div className="iconTextCf">National</div>
          </div>
          <div
            className="boxCf"
            onClick={clickHandler2}
            onKeyPress={clickHandler2}
            role="presentation">
            {checkedNational && (
              <div style={{ margin: '-0.41vh 0 0 0.2vw' }}>
                <img src={Images.Checkmark} className="checkImgCf" alt="" />
              </div>
            )}
          </div>
        </div>
        <div style={{ paddingTop: '1.71vh' }} />
        <hr style={{ color: '#DCDCE9', opacity: '0.15' }} />
        <div style={{ paddingTop: '1.71vh' }} />
        <div className="flex2Cf">
          <div className="flex1Cf">
            <div style={{ width: '2.05vw' }}>
              <img src={Images.Sports} className="iconWorldCf" alt="" />
            </div>
            <div className="iconTextCf">Sports</div>
          </div>
          <div
            className="boxCf"
            onClick={clickHandler3}
            onKeyPress={clickHandler3}
            role="presentation">
            {checkedSports && (
              <div style={{ margin: '-0.41vh 0 0 0.2vw' }}>
                <img src={Images.Checkmark} className="checkImgCf" alt="" />
              </div>
            )}
          </div>
        </div>
        <div style={{ paddingTop: '1.71vh' }} />
        <hr style={{ color: '#DCDCE9', opacity: '0.15' }} />
        <div style={{ paddingTop: '1.71vh' }} />
        <div className="flex2Cf">
          <div className="flex1Cf">
            <div style={{ width: '2.05vw' }}>
              <img src={Images.Science} className="iconWorldCf" alt="" />
            </div>
            <div className="iconTextCf">Science</div>
          </div>
          <div
            className="boxCf"
            onClick={clickHandler4}
            onKeyPress={clickHandler4}
            role="presentation">
            {checkedScience && (
              <div style={{ margin: '-0.41vh 0 0 0.2vw' }}>
                <img src={Images.Checkmark} className="checkImgCf" alt="" />
              </div>
            )}
          </div>
        </div>
        <div style={{ paddingTop: '1.71vh' }} />
        <hr style={{ color: '#DCDCE9', opacity: '0.15' }} />
        <div style={{ paddingTop: '1.71vh' }} />
        <div className="flex2Cf">
          <div className="flex1Cf">
            <div style={{ width: '2.05vw' }}>
              <img src={Images.Entertainment} className="iconWorldCf" alt="" />
            </div>
            <div className="iconTextCf">Entertainment</div>
          </div>
          <div
            className="boxCf"
            onClick={clickHandler5}
            onKeyPress={clickHandler5}
            role="presentation">
            {checkedEntertainment && (
              <div style={{ margin: '-0.41vh 0 0 0.2vw' }}>
                <img src={Images.Checkmark} className="checkImgCf" alt="" />
              </div>
            )}
          </div>
        </div>
        <div style={{ paddingTop: '1.71vh' }} />
        <hr style={{ color: '#DCDCE9', opacity: '0.15' }} />
        <div style={{ paddingTop: '1.71vh' }} />
        <div className="flex2Cf">
          <div className="flex1Cf">
            <div style={{ width: '2.05vw' }}>
              <img src={Images.Technology} className="iconWorldCf" alt="" />
            </div>
            <div className="iconTextCf">Technology</div>
          </div>
          <div
            className="boxCf"
            onClick={clickHandler6}
            onKeyPress={clickHandler6}
            role="presentation">
            {checkedTechnology && (
              <div style={{ margin: '-0.41vh 0 0 0.2vw' }}>
                <img src={Images.Checkmark} className="checkImgCf" alt="" />
              </div>
            )}
          </div>
        </div>
        <div style={{ paddingTop: '1.71vh' }} />
        <hr style={{ color: '#DCDCE9', opacity: '0.15' }} />
        <div style={{ paddingTop: '1.48vh' }} />
        <div className="flex2Cf footerCf">
          <div>{numberOfItemsSelected} Selected</div>
          <div
            onClick={clearAll}
            onKeyPress={clearAll}
            role="presentation"
            style={{ cursor: 'pointer' }}>
            Clear selection
          </div>
        </div>
        <div style={{ paddingTop: '1.48vh' }} />
      </div>
    </div>
  )
}

CategoryFilter.defaultProps = {
  closeCat: () => {}
}
