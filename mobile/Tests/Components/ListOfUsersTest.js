import { shallow } from 'enzyme'
import React from 'react'

import ListOfUsers from '../../App/Components/ListOfUsers/ListOfUsers'

describe('ListOfUsers', () => {
  it('should match to snapshot', () => {
    const component = shallow(<ListOfUsers />)
    expect(component).toMatchSnapshot()
  })

  it('should render Text ', () => {
    const wrapper = shallow(<ListOfUsers />)
    expect(wrapper.find('Text')).toHaveLength(3)
  })

  it('should render Text for type 2 ', () => {
    const wrapper = shallow(<ListOfUsers type={2} />)
    expect(wrapper.find('Text')).toHaveLength(2)
  })
})
