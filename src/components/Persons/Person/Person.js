import React, { Component } from 'react';
import propTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Wrapper from '../../../hoc/Wrapper';

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
                        <Wrapper>
                         <p onClick={this.props.click}><strong> I am {this.props.name} and I'm {this.props.age} old age</strong></p>
                         <p><i>{this.props.children}</i></p>
                         <input type="text" onChange ={this.props.changed} value={this.props.name}/>
                        </Wrapper> 
                 )
        }
}

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func
};

export default withClass(Person, classes.Person);