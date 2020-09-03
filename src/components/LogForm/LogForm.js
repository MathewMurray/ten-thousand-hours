import React, {Component} from 'react'
import GoalContext from '../../Context/GoalsContext'
import GoalApiService from '../../services/goals-api-service'
import {Button,Textarea} from '../Utils/Utils'

export default class LogForm extends Component {
    static contextType = GoalContext

    handleSubmit = ev => {
        ev.preventDefault()
        const{goal} = this.context
        const {text,user_hours} = ev.target

        GoalApiService.postLog(goal.id,test.value,Number(user_hours.value))
            .then(this.context.addLog)
            .then(() => {
                text.value = ''
            })
            .catch(this.context.setError)
    }

    render(){
        return (
            <form className='LogForm' onSubmit={this.handleSubmit}>
                <div className='text'>
                    <Textarea
                        required
                        aria-label='Type a log...'
                        name='text'
                        id='text'
                        col='30'
                        rows='3'
                        placeholder='Type a log..'>
                    </Textarea>
                </div>
                <div className='hours'>
                    <label htmlFor='hours'>How many hours?</label>
                    <Textarea
                        required
                        aria-label='Log your time..'
                        name='hours'
                        id='hours'
                        placeholder='1,2,3...'>
                    </Textarea>
                </div>
                <Button type='submit'>
                    Post Log
                </Button>
            </form>
        )
    }
}