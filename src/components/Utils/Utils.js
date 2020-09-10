import React from 'react'
import {format as formatDate} from 'date-fns'
import './Utils.css'

export function niceDate({date,format='Do MMMM YYYY'}) {
    return formatDate(date,format)
}

export function Hyph(){
    return <span className='Hyph'>{' - '}</span>
}

export function Button({className, ...props}) {
    return <button className={['button',className].join(' ')}{...props}/>
}

export function Textarea({ className,...props}){
    return (
        <textarea className={['Textarea',className].join(' ')}{...props}/>
    )
}

export function Input({ className,...props}){
    return(
        <input className={['input',className].join(' ')}{...props}/>
    )
}

export function Required({className,...props}){
    return (
        <span className={['Required',className].join(' ')}{...props}>
            &#42;
        </span>
    )
}

export function Section({className,list,...props}){
    const classes = [
        list && 'section--list',
        className,
    ].filter(Boolean).join(' ')
    return(
        <section className={classes}{...props}/>
    )
}