import React, {Component} from 'react'
import GoalsApiService from '../../services/goals-api-service'
import {Hyph,Section} from '../../components/Utils/Utils'
import LogForm from '../../components/LogForm/LogForm'
import GoalContext from '../../Context/GoalsContext'
import './GoalsPage.css'

export default class GoalPage extends Component {
    static defaultProps = {
        match: { params:{} },
    }

    static contextType = GoalContext

    componentDidMount() {
        const {goal_id} = this.props.match.params
        this.context.clearError()
        GoalsApiService.getGoal(goal_id)
            .then(this.context.setGoal)
            .catch(this.context.setError)
        GoalsApiService.getGoalLogs(goal_id)
            .then(this.context.setLogs)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearGoal()
    }

    renderGoal() {
        const {goal,logs} = this.context
        return <>
        <h2>{goal.title}</h2>
        <GoalContent goal={goal}/>
        <p>logs</p>
        <GoalLogs logs={logs} />
        <LogForm />
        </>
    }

    render() {
        const {error,goal} = this.context
        let content
        if(error){
            content = (error.error === `Goal doesn't exist`)
                ? <p className='red'>Goal not found</p>
                : <p className='red'>There was an error</p>
        } else if (!goal) {
            content = <div className='loading' />
        } else {
            content = this.renderGoal()
        }
        return (
            <Section className='GoalPage'>
                {content}
            </Section>
        )
    }
}

function GoalContent({goal}){
    return (
        <p className='GoalPage__content'>
            {goal.target} hours
        </p>
    )
}

function GoalLogs({logs=[]}){
    return (
        <ul className='GoalPage__Log-List'>
            {logs.map(log =>
                <li key={log.id} className='GoalPage__log'>
                    <p className='GoalPage__log-text'>
                        {log.text} {log.date_created}
                    </p>
                    <p className='GoalPage__log-user'>
                        <Hyph />
                        {log.user_hours}
                    </p>
                </li>
            )}
        </ul>
    )
}