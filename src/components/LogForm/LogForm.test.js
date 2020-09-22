import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import LogForm from './LogForm'

describe(`LogForm component`, () => {
    it('renders the log form', () => {
        const wrapper = shallow(<LogForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})