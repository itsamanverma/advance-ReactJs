import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

        const style = {
                '@media (min-length: 500px)': {
                        width: '450px'
                }
        };
        return (
               <div className= "Person" style ={style}>
                <p onClick={props.click}><strong> I'm a {props.name} and I am {props.age} old age</strong></p>
                <p><i>{props.children}</i></p>
                <input type="text" onChange ={props.changed} value={props.name}/>
               </div> 
        )
}

export default Radium(person);