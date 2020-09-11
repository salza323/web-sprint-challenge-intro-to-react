import React from 'react'
import styled from 'styled-components'
// Write your Character component here


const StyledCharacter = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: ${pr=> pr.theme.paddingLg};
    color: ${pr=> pr.theme.primaryColor};
    border: ${pr=> pr.theme.border};
    border-color: ${pr=> pr.theme.tertiaryColor};
    border-radius: 10%;
    max-width: 80%;

    .name{
        color: ${pr=> pr.theme.secondaryColor};
    }
`


const CharacterData = (props) => {
    const {name, gender, height, mass} = props.person
    return(
        <StyledCharacter>
            <div className = 'name'>
                <h2>{name}</h2>
            </div>
            <div className = 'gender'>
                <p>Gender: {gender}</p>
            </div>    
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
        </StyledCharacter>
    )
}


export default CharacterData