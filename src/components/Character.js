import React from 'react'
// Write your Character component here


const CharacterData = (props) => {
    const {name, gender, height, mass} = props.person
    return(
        <div className = 'person'>
            <h2>{name}</h2>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
        </div>
    )
}


export default CharacterData