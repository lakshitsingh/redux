import React from 'react'
import { CommonContext } from './CommonContext'
const Button = () => {
  return (
    <CommonContext.Consumer>
        {
            ({updateColor})=>
            {
                return (
                    <div>
                    <button onClick={()=>updateColor('yellow')}>Update Color</button>
                    <button onClick={()=>updateColor('blue')}>Update Color</button>
                    </div>
                    
                )
            }
                
        }
    </CommonContext.Consumer>
  )
}

export default Button