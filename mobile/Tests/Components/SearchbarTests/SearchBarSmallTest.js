import { shallow } from 'enzyme'
import React from 'react'

import { TextInput } from 'react-native'
import SearchBarSmall from '../../../App/Components/Searchbars/SearchBarSmall'

describe('SearchBarSmall', () => {
  it('should match to snapshot', () => {
    const component = shallow(<SearchBarSmall />)
    expect(component).toMatchSnapshot()
  })

  it('SearchBarDefault onChangetText', () => {
    const component = shallow(<SearchBarSmall />)
    component.find(TextInput).prop('onChangeText')('Random')
    expect(component.find(TextInput).prop('value')).toEqual('Random')
  })
})
