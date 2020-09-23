import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import NewGoalForm from './NewGoalForm'

describe(`NewGoalForm component`, () => {
    it('renders New Goal Form', () => {
        const wrapper = shallow(<NewGoalForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})