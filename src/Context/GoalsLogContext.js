import React, {Component} from 'react'

const GoalLogContext = React.createContext({
    goalLog:[],
    error: null,
    setError: () => {},
    clearError: () => {},
    setGoalLog: () => {},
})
export default GoalLogContext

export class GoalLogProvider extends Component {
    state = { 
        goalLog: [],
        error: null,
    }

    setGoalLog = goalLog => {
        this.setState({goalLog})
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    clearError = () => {
        this.setState({error: null})
    }

    render() {
        const value = { 
            goalLog: this.state.goalLog,
            error: this.state.error,
            setError: this.setState,
            clearError: this.clearError,
            setGoalLog: this.setGoalLog,
        }
        return (
            <GoalLogContext.Provider value={value}>
                {this.props.children}
            </GoalLogContext.Provider>
        )
    }
}