import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return <>
            <div className='HomePage'>
                <h2 className='HomePage__about-section'>What is 10,000 hours?</h2>
                <p>"...If you work hard enough and assert yourself,
                     and use your mind and imagination, you can shape 
                     the world to your desires."</p>
                <p>- Malcolm Gladwell, Outliers: The Story of Success.</p>
            </div>
            </>
    }
}