
import React, { Component } from 'react';

const UserInput = (props) =>{
    return(
        <div className="UserInput" > 
        <p>Enter Input</p>
         <input onChange={props.changed} value={props.text} />  
        </div>
    )
}; export default UserInput