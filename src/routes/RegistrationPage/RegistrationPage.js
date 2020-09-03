import React, {Component} from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import {Section} from '../../components/Utils/Utils'

export default class RegistrationPage extends Component {
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    handleRegistrationSuccess = user => {
        const {history} = this.props
        history.push('/login')
    }

    render(){
        return (
            <Section className='RegistrationPage'>
                <h2>Register</h2>
                <RegistrationForm onRegistrationSucess={this.handleRegistrationSuccess}/>
            </Section>
        )
    }
}