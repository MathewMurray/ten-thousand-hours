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
                <h3>Welcome to 10,000 hours.</h3>
                <p>This page will display you individual goals. If you notice, there is no delete button.
                why? Because often times we forget our goals, we lose track of what we want. This application
                wont let you forget. Sure, goals change, but they always start from something.</p>
                <br/>
            <Section list className='UserPage'>
                {error 
                    ? <p className='red'>there was an error, try again.</p>
                    : this.renderGoals()}
            </Section>
            </div>
        )
    }
}