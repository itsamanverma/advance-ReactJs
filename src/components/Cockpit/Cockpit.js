import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

        const assignedClasses = [];
        let btnClass = '';
 
        if (props.showPersons){
            btnClass = classes.Red;
        }
        if (props.persons.length <= 2) {
        assignedClasses.push( classes.red ); // classes = ['red']
        } 
        if (props.persons.length <= 1) {
        assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
        }

    return (
        <div className = {classes.Cockpit}>
            <h1>hi, I am  create the react App </h1>
            <p className={assignedClasses.join(' ')}> this is actually working...!!</p>
            <button className= {btnClass}
            onClick={props.toggle} >toggle Person</button>
        </div>
    );
}

export default cockpit;