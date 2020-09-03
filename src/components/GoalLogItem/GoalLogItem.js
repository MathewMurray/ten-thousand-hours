import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class GoalLogItem extends Component {
    render(){
        const {goal} = this.props

        return (
            <Link to={`/goal/${goal.id}`} className='GoalLogItem'>
                <div className='GoalLogItem__details'>
                    <div className='GoalLogItem__text'>
                        <h2 className='GoalLogItem__Heading'>{goal.title}</h2>
                        <p className='GoalLogItem__description'>{truncate(goal.content)}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

function truncate (text) {
    const words = text.split(' ')

    if(words.length > 10){
        return words.slice(0,10).join(' ')+' ...'
    }
    return text
}