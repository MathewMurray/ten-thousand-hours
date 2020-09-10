import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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

// function truncate (text) {
//     const words = text.split(' ')

//     if(words.length > 10){
//         return words.slice(0,10).join(' ')+' ...'
//     }
//     return text
// }