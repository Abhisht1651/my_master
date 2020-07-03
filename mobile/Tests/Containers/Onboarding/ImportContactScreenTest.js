import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import ImportContacts from '../../../App/Containers/Onboarding/ImportContacts'

import Header from '../../../App/Components/Header'
import { LargeButton } from '../../../App/Components/Buttons/LargeButton'
import ImportContactCard from '../../../App/Components/ImportCard/ImportCard'

const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

test('ImportContacts component renders correctly', () => {
  const props = createTestProps({})
  const tree = renderer.create(<ImportContacts {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('ImportContacts ', () => {
  describe('rendering', () => {
    let wrapper
    let props
    beforeEach(() => {
      props = createTestProps({})
      wrapper = shallow(<ImportContacts {...props} />) // no compile-time error
    })
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
    it('There should be 1 Header', () => {
      expect(wrapper.find(Header)).toHaveLength(1)
    })
    it('There should be 1 ImportContactCard', () => {
      expect(wrapper.find(ImportContactCard)).toHaveLength(1)
    })
    it('he Touchable Opacity should call ContactsScreen', () => {
      const button1 = wrapper.find(ImportContactCard).at(0)
      button1.simulate('press')
      expect(props.navigation.navigate).toHaveBeenCalledWith('ContactsScreen')
    })
    it('There should be 1 RoundedButton', () => {
      expect(wrapper.find(LargeButton)).toHaveLength(1)
    })
  })
})
