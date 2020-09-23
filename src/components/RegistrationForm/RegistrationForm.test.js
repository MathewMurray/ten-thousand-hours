import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import RegistrationForm from './RegistrationForm'

describe(`RegistrationForm component`, () => {
    it('renders the registration form', () => {
        const wrapper = shallow(<RegistrationForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})