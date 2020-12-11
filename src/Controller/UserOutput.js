
import React, { Component } from 'react';

const UserOutput = (props) =>{
    return(
        <div className="UserInput" > 
        <p>UserOutput</p>
         <p>{props.text}</p>
        </div>
    )
}; export default UserOutput