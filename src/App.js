import React, { Component } from 'react';
import './App.css';
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
  const style = {
    backgroundColor: 'white',
    font:'inherit',
    border:'2px solid blue',
    padding:'5px',
    cursor:'pointer' 
  };

      let persons = null;

      if(this.state.showPerson){
        persons = (
          <div>
            {this.state.persons.map( (person, index) => {
              return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name ={person.name}
                  age = {person.age} 
                  key = {person.id}
                  changed = {(event) => this.nameChangeHandler(event, person.id)} />
            })} 
          </div>
        );
      }
      return (
        <div className="App">
          <h1>hi, I am  create the react App </h1>
          <p> this is actually working...!!</p>
          <button style= {style} 
          onClick={this.togglePersonHandler} >toggle Person</button>
          {persons}
        </div>
      );

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "Does this work now?"), React.createElement('p', {className: 'App'}, 'AMAN VERMA creating the react app'))

  }
}

export default App;
 