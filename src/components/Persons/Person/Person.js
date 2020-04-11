import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component{
        render() {
                return (
                        <div className= {classes.Person} >
                         <p onClick={this.props.click}><strong> I am {this.props.name} and I'm {this.props.age} old age</strong></p>
                         <p><i>{this.props.children}</i></p>
                         <input type="text" onChange ={this.props.changed} value={this.props.name}/>
                        </div> 
                 )
        }
}
export default Person;