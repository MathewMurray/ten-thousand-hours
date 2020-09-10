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
                    <h3 className='GoalLogItem__Heading'>{goal.id -1}</h3>
                        <h2 className='GoalLogItem__Heading'>{goal.title}</h2>
                        <p className='GoalLogItem__description'>{(goal.target)} hours</p>
                    </div>
                </div>
                <Button type='Delete'>Delete</Button>
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