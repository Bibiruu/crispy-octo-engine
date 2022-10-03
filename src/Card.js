import React from 'react'

export const Card = (props) =>{
    console.log(props.title)
    console.log(props.month)
    console.log(props.number)  
    return (
        <div className='card'>
            <img className='img' src={props.img} />
            <div className='title' title={props.title}></div>
            <div className='month' month={props.month}></div>
            <div className='number' number={props.number}></div>                              
       </div>
    )
}

