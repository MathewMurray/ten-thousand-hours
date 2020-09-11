import React, { Component } from 'react'
import GoalLogContext from '../../Context/GoalsLogContext'
import GoalsApiService from '../../services/goals-api-service'
import GoalLogItem from '../../components/GoalLogItem/GoalLogItem'
import {Section} from '../../components/Utils/Utils'
import './UserPage.css'

export default class UserPage extends Component {
    static contextType = GoalLogContext

    componentDidMount() {
        this.context.clearError()
        GoalsApiService.getGoals()
            .then(this.context.setGoalLog)
            .catch(this.context.setError)
    }

    renderGoals(){
        const { goalLog } = this.context
        return goalLog.goals.map(goal => 
            <GoalLogItem 
                key={goal.id}
                goal={goal}
            />
        )
    }

    render() {
        const { error } = this.context
        return(
            <div className='UserPage'>
                <h1> Goals </h1>
            <Section list className='UserPage'>
                {error 
                    ? <p className='red'>there was an error, try again.</p>
                    : this.renderGoals()}
            </Section>
            </div>
        )
    }
}