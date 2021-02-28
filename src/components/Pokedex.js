import React, { useState } from 'react';
import styled from "styled-components"
import SearchBox from "./SearchBox";
import SearchBoxPokOnlyOne from "./SearchBoxPokOnlyOne";


function Pokedex() {

    const [ pokemonsToShow, setPokemonsToShow ] = useState(new Array() )

    return (
        <>
          <SeparetorDivInputs>
            <SearchBox handleResults={setPokemonsToShow}/>
            <SearchBoxPokOnlyOne handleResults={setPokemonsToShow}/>
          </SeparetorDivInputs>
        </>
    )
}

export default Pokedex

const SeparetorDivInputs = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`