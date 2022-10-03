import React from 'react'

export const Card = (props) =>{
    console.log(props.title)
    console.log(props.month)
    console.log(props.number)  
    return (
        <div className='card'>
            <img className='img' src={props.img} /> 
            <div className='number' number={props.number}>number</div>     
            <div className='month' month={props.month}>January 2022</div> 
            <div className='title' title={props.title}>The beginning of everything</div>                                             
       </div>
    )
}

