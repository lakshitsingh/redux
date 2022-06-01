import React, { Component } from 'react'
import { CommonContext } from './Components/CommonContext'
import Main from './Components/Main';
import  Button  from './Components/Button';

export default class App extends Component {
  constructor(){
    super();
    this.updateColor =(color)=>{
      this.setState({color:color})
    }
    this.state={
      color:'red',
      updateColor : this.updateColor   
    }
    
  }
  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Main />
        <Button value={this.state}/>
      </CommonContext.Provider>
    )
  }
}
