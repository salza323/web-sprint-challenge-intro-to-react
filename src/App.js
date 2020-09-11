import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import CharacterData from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [state, setState] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() =>{
    Axios.get('https://swapi.dev/api/people/')
       .then (res => {
        setState(res.data.results)
        // console.log(res.data)
      })
      .catch(error => console.log(error))
    },[])

  // console.log(state)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className = 'main-content'>
        {state.map(person => <CharacterData person={ person }/>)}
      </div>
    </div>
  );
}

export default App;


// {
//   "count": 82, 
//   "next": "http://swapi.dev/api/people/?page=2", 
//   "previous": null, 
//   "results": [
//       {
//           "name": "Luke Skywalker", 
//           "height": "172", 
//           "mass": "77", 
//           "hair_color": "blond", 
//           "skin_color": "fair", 
//           "eye_color": "blue", 
//           "birth_year": "19BBY", 
//           "gender": "male", 
//           "homeworld": "http://swapi.dev/api/planets/1/", 
//           "films": [
//               "http://swapi.dev/api/films/1/", 
//               "http://swapi.dev/api/films/2/", 
//               "http://swapi.dev/api/films/3/", 
//               "http://swapi.dev/api/films/6/"
//           ], 
//           "species": [], 
//           "vehicles": [
//               "http://swapi.dev/api/vehicles/14/", 
//               "http://swapi.dev/api/vehicles/30/"
//           ], 
//           "starships": [
//               "http://swapi.dev/api/starships/12/", 
//               "http://swapi.dev/api/starships/22/"
//           ], 
//           "created": "2014-12-09T13:50:51.644000Z", 
//           "edited": "2014-12-20T21:17:56.891000Z", 
//           "url": "http://swapi.dev/api/people/1/"
//       }, 
//        ................................