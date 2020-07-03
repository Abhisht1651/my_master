import { shallow } from 'enzyme'
import React from 'react'
import ProgressBar from '../../../App/Components/ProgressBar/ProgressBar'

describe('ProgressBar', () => {
  it('should match to snapshot', () => {
    const component = shallow(<ProgressBar />)
    expect(component).toMatchSnapshot()
  })

  it('should have a prop name style', () => {
    const component = shallow(<ProgressBar />)
    expect(component.find('View').prop('style')).toBeTruthy()
  })
})
