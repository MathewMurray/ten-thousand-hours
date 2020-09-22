import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from './Header'

describe(`Header component`, () => {
    it('renders the header',()=> {
        const wrapper = shallow(<Header />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})