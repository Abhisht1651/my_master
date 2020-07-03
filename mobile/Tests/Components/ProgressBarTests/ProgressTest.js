import { shallow } from 'enzyme'
import React from 'react'
import Progress from '../../../App/Components/ProgressBar/Progress'

describe('Progress', () => {
  it('should match to snapshot', () => {
    const component = shallow(<Progress />)
    expect(component).toMatchSnapshot()
  })

  it('should render ProgressBar', () => {
    const component = shallow(<Progress />)
    expect(component.find('ProgressBar')).toHaveLength(3)
  })
})
