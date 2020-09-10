import React, {Component} from 'react'

export const nullGoal = {
    user:{},
    logs:[],
}

const GoalContext = React.createContext({
    goal:nullGoal,
    setError:() => {},
    clearError:() => {},
    setGoal:() => {},
    clearGoal:() => {},
    setLogs:() => {},
    addLog:() => {},
    setUser:() => {},
})

export default GoalContext

export class GoalProvider extends Component {
    state = {
        goal: nullGoal,
        error: null,
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    clearError = () => {
        this.setState({error:null})
    }

    setGoal = goal => {
        this.setState(goal)
    }

    setLogs = logs => {
        this.setState({logs})
    }

    clearGoal = () => {
        this.setGoal(nullGoal)
        this.setLogs([])
    }

    addLog = log => {
        this.setLogs([
            ...this.state.logs,
            log
        ])
    }

    setUser = user => {
        this.goal({
            ...this.state.goal,
            user
        })
    }

    render(){
        const value = {
            goal: this.state.goal,
            logs: this.state.logs,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setGoal: this.setGoal,
            setLogs: this.setLogs,
            clearGoal: this.clearGoal,
            addLog: this.addLog,
        }
        return (
            <GoalContext.Provider value={value}>
                {this.props.children}
            </GoalContext.Provider>
        )
    }
}