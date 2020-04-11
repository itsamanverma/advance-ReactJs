import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
    constructor(props){
      super(props);
      console.log('[App.js] inside constructor ', props);
    }

    state = {
      persons : [
        { id:1, name: "aman", age: 25},
        { id:2, name: "sona" , age:24},
        { id:3, name: "mini" , age:24}
      ],
      otherState: "Some other Value",
      showPerson: false
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

          if(this.state.showPerson){
            persons = <Persons
                          persons ={this.state.persons}
                          clicked ={this.deletePersonHandler}
                          changed={this.nameChangeHandler} />;
          }

          // let classes = ['red', 'bold'].join(' ');
          
          const REACT_VERSION = React.version;

          return (
              <div className={classes.App}>
                <Cockpit 
                appTitle ={this.props.title}
                showPersons ={this.state.showPerson}
                persons= {this.state.persons}
                clicked={this.togglePersonHandler}/>
                {persons}
                <div>React version: {REACT_VERSION}</div>
              </div>
              
          );

        // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "Does this work now?"), React.createElement('p', {className: 'App'}, 'AMAN VERMA creating the react app'))

      }
    }

    export default App;
 