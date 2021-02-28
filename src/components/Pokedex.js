import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import SearchBox from "./SearchBox";
import SearchBoxPokOnlyOne from "./SearchBoxPokOnlyOne";
import PokemonCardGroup from "./PokemonCardGroup";


function Pokedex() {

    const [ pokemonsToShowURL, setPokemonsToShowURL ] = useState(new Array() )
    const [ pokemonsToShow, setPokemonsToShow ] = useState(new Array() )

    useEffect(() => {
        if (pokemonsToShowURL.length) {
            console.log(pokemonsToShowURL)
        }
        else {
            return
        }
        return () => {
            setPokemonsToShow([])
        }
    }, [pokemonsToShowURL])

    return (
        <>
          <SeparetorDivInputs>
            <SearchBox handleResults={setPokemonsToShowURL}/>
            <SearchBoxPokOnlyOne handleResults={setPokemonsToShowURL}/>
          </SeparetorDivInputs>
        {pokemonsToShow.pokemons ? <PokemonCardGroup/> : null}  
        {pokemonsToShow.sprites ? <PokemonCardGroup/> : null}  
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

const ShowPokemons = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: auto auto auto auto;
`