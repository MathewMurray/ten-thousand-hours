import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service'

export default class Header extends Component {
    handleLogOutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link onClick={this.handleLogOutClick} to='/'>Logout</Link>
            </div>
        )
    }

    renderLoginLink(){
        return(
            <div className='Header--not-logged-in'>
                <Link to='/login'>Log in</Link>
                <Link to='/register'>Register</Link>
            </div>
        )
    }

    render(){
        return <>
        <nav className='Header'>
            <h1>
                <Link to='/'>PlaceHolder Header</Link>
            </h1>
            <span className='Header__tagline--wide'>lets learn together!</span>
            {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                :this.renderLoginLink()}
        </nav>

        <span className='Header__tagline--narrow'>Lets learn together!</span>
        </>
    }
}
