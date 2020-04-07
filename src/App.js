import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons : [
        { id:1, name: "aman", age: 25},
        { id:2, name: "sona" , age:24},
        { id:3, name: "mini" , age:24}
      ]
    }

    nameChangeHandler = (event, id) => {

      const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      //alternative ways 
      // const person = Object.assign({}, this.state.persons[personIndex]);

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState ( {
        persons: persons })
    }
  
    deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();//slice method copy the whole array into assign var;
      const persons =  [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState( { persons: persons} );
    }

    togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
    }

    render() {
  
          let persons = null;
          let btnClass = '';

          if(this.state.showPerson){
            persons = (
              <div>
                {this.state.persons.map((person, index) => {
                  return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name ={person.name}
                      age = {person.age} 
                      key = {person.id}
                      changed = {(event) => this.nameChangeHandler(event, person.id)} />
                } )} 
              </div>
            );

            btnClass = classes.Red;

          }

          // let classes = ['red', 'bold'].join(' ');

          const assignedClasses = [];
          if (this.state.persons.length <= 2) {
            assignedClasses.push( classes.red ); // classes = ['red']
          } 
          if (this.state.persons.length <= 1) {
            assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
          }
          
          const REACT_VERSION = React.version;

          return (
              <div className={classes.App}>
                <h1>hi, I am  create the react App </h1>
                <p className={assignedClasses.join(' ')}> this is actually working...!!</p>
                <button className= {btnClass}
                onClick={this.togglePersonHandler} >toggle Person</button>
                {persons}
                <div>React version: {REACT_VERSION}</div>
              </div>
              
          );

        // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "Does this work now?"), React.createElement('p', {className: 'App'}, 'AMAN VERMA creating the react app'))

      }
    }

    export default App;
 