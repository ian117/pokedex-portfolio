import React from 'react'
import styled from "styled-components"

function PokemonCardGroup() {
    return (
        <CardContainer>
            <p>Name</p>
            <p>Img</p>
            <p>Type</p>
            <p>Hp</p>
            <p>Attack</p>
            <p>Defense</p>
            <p>Speed</p>
        </CardContainer>
    )
}

export default PokemonCardGroup;

const CardContainer = styled.div`

`