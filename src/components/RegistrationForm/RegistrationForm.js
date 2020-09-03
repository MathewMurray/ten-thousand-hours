import React, {Component} from 'react'
import {Button, Input, Required} from '../Utils/Utils'

export default class RegistrationForm extends Component{
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = {error:null}

    handleSubmit = ev => {
        ev.preventDefault()
        const {full_name,user_name,password} = ev.target

        console.log('registration form submitted')
        console.log(full_name,user_name,password)

        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
    }

    render(){
        const {error} = this.state
        return(
            <form className='RegistrationForm' onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className='full_name'>
                    <label htmlFor='RegistrationForm__full_name'>Full Name<Required /></label>
                    <Input name='full_name' type='text' Required id='RegistrationForm__full_name'></Input>
                </div>
                <div className='user_name'>
                    <label htmlFor='RegistrationForm__user_name'>User Name<Required /></label>
                    <Input name='user_name' type='text' required id='RegistrationForm__user_name'></Input>
                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm__password'>Password <Required /></label>
                    <Input name='password' type='password' required id='registrationForm__password'></Input>
                </div>
                <Button type='submit'>Register</Button>
            </form>
        )
    }
}