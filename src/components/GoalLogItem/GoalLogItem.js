import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../../components/Utils/Utils'
import './GoalLogItem.css'

export default class GoalLogItem extends Component {
    render(){
        const {goal} = this.props

        return (
            <Link to={`/Goals/${goal.id}/logs`} className='GoalLogItem'>
                <div className='GoalLogItem__details'>
                    <div className='GoalLogItem__text'>
                        <h2 className='GoalLogItem__Heading'>{goal.title}</h2>
                        <p className='GoalLogItem__description'>{(goal.target)} hours</p>
                    </div>
                </div>
            </Link>
        )
    }
}