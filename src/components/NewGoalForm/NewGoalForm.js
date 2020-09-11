import React, {Component} from 'react'
import GoalContext from '../../Context/GoalsContext'
import GoalApiService from '../../services/goals-api-service'
import {Button,Textarea} from '../Utils/Utils'
// import './LogForm.css'

export default class NewGoalForm extends Component {
    static contextType = GoalContext

    handleSubmit = ev => {
        ev.preventDefault()
        const {title,target} = ev.target

        GoalApiService.postGoal(title.value,Number(target.value))
            .then(() => {
                title.value = ''
            })
            .catch(this.context.setError)
    }

    render(){
        return (
            <form className='NewGoalFOrm' onSubmit={this.handleSubmit}>
                <div className='title'>
                    <label htmlFor='title'>what are you learning?</label>
                    <Textarea
                        required
                        aria-label='What goal do you have?.'
                        name='title'
                        id='title'  
                        col='30'
                        rows='3'
                        placeholder='whats your goal?..'>
                    </Textarea>
                </div>
                <div className='target'>
                    <label htmlFor='target'>How many hours?</label>
                    <Textarea
                        required
                        aria-label='Log your time..'
                        name='target'
                        id='target'
                        placeholder='how many hours will it take?..'>
                    </Textarea>
                </div>
                <Button type='submit'>
                    Post Goal
                </Button>
            </form>
        )
    }
}