import React from 'react'
import styled from "styled-components"

function PokemonCardGroup({data}) {
    
    const  {name, sprites, types, stats} = data;


    return (
        <CardContainer>
            <p>{name}</p>
            <img alt="PokemonImg" src={sprites.front_shiny}/>
            <p>Type:</p>
            <ul>
            {types.map((type) => <li style={{listStyle:'none'}} key={type.type.name}>{type.type.name}</li>)}
            </ul>
            <p>{stats[0].stat.hp}</p>
            <p>Attack</p>
            <p>Defense</p>
            <p>Speed</p>
        </CardContainer>
    )
}

export default PokemonCardGroup;

const CardContainer = styled.div`
    margin-top: 50px;
`