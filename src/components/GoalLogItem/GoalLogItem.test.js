import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import GoalLogItem from './GoalLogItem'


describe(`GoalLogItem component`, () => {
    const goal = {
        id: '1',
        title: 'test goal',
    }
    it('renders the Goal logs for goals',() => {
        const wrapper = shallow(<GoalLogItem goal />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})