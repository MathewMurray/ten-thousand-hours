import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return <>
            <div className='HomePage'>
                <h2 className='HomePage__about-section'>What is 10,000 hours?</h2>
                <p>"...If you work hard enough and assert yourself,
                     and use your mind and imagination, you can shape 
                     the world to your desires."</p>
                <p>- Malcolm Gladwell, Outliers: The Story of Success.</p>
                <hr></hr>
                <p>10,000 hours is a commitment. A personal contract with yourself, to better
                    your skills and understanding of your own ability. It's not science, and I
                    wont tell you its THE key to success. It is, however, a great starting point. 
                </p>
                <hr></hr>
                <p>"Goals give us the opportunity to define what we want"</p>
                <p> -Ryder Carrol, The Bullet Journal Method</p>
                <hr></hr>
                <Link to='/register'>So why don't we get started?</Link>
            </div>
            </>
    }
}