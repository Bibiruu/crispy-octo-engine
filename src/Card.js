import React from 'react'

export const Card = (props) =>{
    console.log(props.title)
    console.log(props.month)
    console.log(props.number)  
    return (
        <div className='card'>
          <div cassName='image'>
            <img className='img'src={props.img}/>
          </div>
          <div className='text'>
            <div className='number'>{props.number}</div>     
            <div className='month'>{props.month}</div> 
            <div className='title'>{props.title}</div>
          </div>                                             
       </div>
    )
}

