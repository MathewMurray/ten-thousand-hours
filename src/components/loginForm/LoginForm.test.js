import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import LoginForm from './LoginForm'

describe(`Login form component`, () => {
    it('renders the Login form',() => {
        const wrapper = shallow(<LoginForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})