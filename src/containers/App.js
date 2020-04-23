import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Wrapper from '../hoc/Wrapper';
import withClass from '../hoc/withClass';


class App extends PureComponent {

    constructor(props){
      super(props);
      console.log('[App.js] inside constructor ', props);
      this.state ={
        persons : [
          { id:1, name: "aman", age:25},
          { id:2, name: "sona" , age:24},
          { id:3, name: "mini" , age:24}
        ],
        otherState: "Some other Value",
        showPersons: false,
        toggleClicked: 0
      }
    }

    componentWillMount() {
      console.log('[App.js inside componentWillMount()]');
    }

    componentDidMount() {
      console.log('[App.js] inside componentDidMount()');
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //   console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
    //   return nextState.persons !== this.state.persons ||
    //          nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate (nextProps, nextState) {
      console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate () {
      console.log('[UPDATE App.js] inside componentDidUpdate()');
    }

    // state = {
    //   persons : [
    //     { id:1, name: "aman", age: 25},
    //     { id:2, name: "sona" , age:24},
    //     { id:3, name: "mini" , age:24}
    //   ],
    //   otherState: "Some other Value",
    //   showPerson: false
    // }

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
      const doesShow = this.state.showPersons;
      this.setState( (prevState, props) => {
        return {
          showPersons: !doesShow,
          toggleClicked: prevState.toggleClicked + 1
        }
      });
    }

    render() {
          console.log('[App.js] inside render()');
          let persons = null;

          if(this.state.showPersons){
            persons = <Persons
                          persons ={this.state.persons}
                          clicked ={this.deletePersonHandler}
                          changed={this.nameChangeHandler} />;
          }

          // let classes = ['red', 'bold'].join(' ');
          
          const REACT_VERSION = React.version;

          return (
              <Wrapper>
                <button onClick= {() => {this.setState({ showPersons: true})  }}>Show Persons</button>
                <Cockpit 
                appTitle ={this.props.title}
                showPersons ={this.state.showPersons}
                persons= {this.state.persons}
                clicked={this.togglePersonHandler}/>
                {persons}
                  <div>
                    React version: {REACT_VERSION}
                  </div>
              </Wrapper>
              
          );

        // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "Does this work now?"), React.createElement('p', {className: 'App'}, 'AMAN VERMA creating the react app'))

      }
    }

    export default withClass(App, classes.App); 