import React from 'react';
import classes from './Person.css';

const person = (props) => {
        return (
               <div className= {classes.Person} >
                <p onClick={props.click}><strong> I am {props.name} and I'm {props.age} old age</strong></p>
                <p><i>{props.children}</i></p>
                <input type="text" onChange ={props.changed} value={props.name}/>
               </div> 
        )
}


export default person;