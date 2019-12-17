import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState ] = useState( {
    persons: [
      {
        name: 'Nylaa',
        age: 28
      }, 
      {
        name: 'Brytce',
        age: 66
      }
    ],
  });

  const[otherState, setOtherState] = useState('really great state');
  console.log(personsState, otherState);
    
  const switchNameHandler = () => {
    setPersonsState({persons: [
      {
        name: 'Nifoolar',
        age: 28
      }, 
      {
        name: 'Brytce',
        age: 66
      }
    ]});
  };

  


    return (
    <div className="App">
      <h1>A React App!</h1>
      <button onClick={switchNameHandler}>Switch</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies: Pashmi, Instagram</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
    </div>
  );
    }
export default app;