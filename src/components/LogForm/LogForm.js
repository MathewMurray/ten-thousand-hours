import React, {Component} from 'react'
import GoalContext from '../../Context/GoalsContext'
import GoalApiService from '../../services/goals-api-service'
import {Button,Textarea} from '../Utils/Utils'
import './LogForm.css'

export default class LogForm extends Component {
    static contextType = GoalContext

    handleSubmit = ev => {
        ev.preventDefault()
        const{goal} = this.context
        const {text,user_hours} = ev.target

        GoalApiService.postLog(goal.id,text.value,Number(user_hours.value))
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
                <div className='user_hours'>
                    <label htmlFor='user_hours'>How many hours?</label>
                    <Textarea
                        required
                        aria-label='Log your time..'
                        name='user_hours'
                        id='user_hours'
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