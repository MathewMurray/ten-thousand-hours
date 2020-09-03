import React, {Component} from 'react'
import GoalLogContext, { GoalLogProvider } from '../../Context/GoalsLogContext'
import GoalsApiService from '../../services/goals-api-service'
import {Section} from '../../components/Utils/Utils'
import GoalLogItem from '../../components/GoalLogItem/GoalLogItem'
import GoalsApiService from '../../services/goals-api-service'

export default class GoalLogPage extends Component {
    static contextType = GoalLogContext

    componentDidMount() {
        this.context.clearError()
        GoalsApiService.getGoals()
            .then(this.context.setGoalLog)
            .catch(this.context.setError)
    }

    renderGoals(){
        const { goalLog = []} = this.context
        return goalLog.map(goal => 
            <GoalLogItem 
                key={goal.id}
                goal={goal}
            />
        )
    }

    render() {
        const { error } = this.context
        return(
            <Section list className='GoalLogPage'>
                {error 
                    ? <p className='red'>there was an error, try again.</p>
                    : this.renderGoals()}
            </Section>
        )
    }
}