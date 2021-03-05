import React from 'react'
import styled from "styled-components"
import {Link } from "react-router-dom";

function PokemonCardGroup({data}) {
    
    const  {id , name, sprites, types, stats} = data;


    return (
        <CardContainer>
            {data ? <><Link to={`/pokedex/${id}`}>
                <p>{name}</p>
            </Link>
            <img alt="PokemonImg" src={sprites.front_shiny || sprites.front_default}/>
            <p>Type:</p>
            <ul>
            {types.map((type) => <li style={{listStyle:'none'}} key={type.type.name}>{type.type.name}</li>)}
            </ul>
            <p>{`HP: ${stats[0].base_stat}`}</p>
            <p>{`Attack: ${stats[1].base_stat}`}</p>
            <p>{`Defense: ${stats[2].base_stat}`}</p>
            <p>{`Speed: ${stats[5].base_stat}`}</p> </> : 
            null}
        </CardContainer>
    )
}

export default PokemonCardGroup;

const CardContainer = styled.div`
    margin-top: 50px;
`