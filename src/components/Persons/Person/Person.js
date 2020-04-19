import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component{

        constructor(props){
                super(props);
                console.log('[Person.js] inside constructor ', props);
              }
          
              componentWillMount() {
                console.log('[Person.js inside componentWillMount()]');
              }
          
              componentDidMount() {
                console.log('[Person.js] inside componentDidMount()');
              }
           
        render() {
                console.log('[Person.js] inside render()');
                return (
                        <WithClass classes= {classes.Person} >
                         <p onClick={this.props.click}><strong> I am {this.props.name} and I'm {this.props.age} old age</strong></p>
                         <p><i>{this.props.children}</i></p>
                         <input type="text" onChange ={this.props.changed} value={this.props.name}/>
                        </WithClass> 
                 )
        }
}
export default Person;