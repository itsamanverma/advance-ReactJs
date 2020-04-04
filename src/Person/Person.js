import React from 'react';
import './Person.css';

const person = (props) => {
        return (
               <div className= "Person">
                <p onClick={props.click}><strong> I'm a {props.name} and I am {props.age} old age</strong></p>
                <p><i>{props.children}</i></p>
                <input type="text" onChange ={props.changed} value={props.name}/>
               </div> 
        )
}

export default person;