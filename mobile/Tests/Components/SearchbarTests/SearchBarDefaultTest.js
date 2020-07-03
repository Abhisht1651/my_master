import { shallow } from 'enzyme'
import React from 'react'

import { TextInput } from 'react-native'
import SearchBarDefault from '../../../App/Components/Searchbars/SearchBarDefault'

describe('SearchBarDefault', () => {
  it('should match to snapshot', () => {
    const component = shallow(<SearchBarDefault />)
    expect(component).toMatchSnapshot()
  })
  it('SearchBarDefault onChangetText', () => {
    const component = shallow(<SearchBarDefault />)
    component.find(TextInput).prop('onChangeText')('Random')
    expect(component.find(TextInput).prop('value')).toEqual('Random')
  })
})
