import React, { PureComponent } from 'react';
import Person from './Person/Person'; 

class Persons extends PureComponent {

    constructor(props){
        super(props);
        console.log('[Persons.js] inside constructor ', props);
      }
  
      componentWillMount() {
        console.log('[Persons.js inside componentWillMount()]');
      }
  
      componentDidMount() {
        console.log('[Persons.js] inside componentDidMount()');
      }

      componentWillReceiveProps (nextProps) {
        console.log('[UPDATE persons.js] inside componentWillReceiveProps()', nextProps);
      }

      // shouldComponentUpdate (nextProps, nextState) {
      //   console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
      //   return nextProps.persons !== this.props.persons ||
      //          nextProps.changed !== this.props.changed ||
      //          nextProps.clicked !== this.props.clicked;
      // }

      componentWillUpdate (nextProps, nextState) {
        console.log('[UPDATE persons.js] inside componentWillUpdate()', nextProps, nextState);
      }

      componentDidUpdate () {
        console.log('[UPDATE persons.js] inside componentDidUpdate()');
      }

    render() {
        console.log('[Persons.js] inside render()');
        return this.props.persons.map((person, index) => {
            return <Person 
                        click={() => this.props.clicked(index)}
                        name ={person.name}
                        position = {index}
                        age = {person.age}
                        key = {person.id} 
                        changed = {(event) => this.props.changed(event, person.id)} />
          });
    }
}

export default Persons;