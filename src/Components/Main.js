import React from 'react'
import { CommonContext } from './CommonContext'
export default function Main(props) {
  return (
    <CommonContext.Consumer>
        {
            ({color})=>{
                return (<h1 style={{backgroundColor:color}}>Hello World!</h1>)
            }
            
        }      
    </CommonContext.Consumer>
  )
}
