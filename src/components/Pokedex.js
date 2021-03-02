import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import SearchBox from "./SearchBox";
import SearchBoxPokOnlyOne from "./SearchBoxPokOnlyOne";
import PokemonCardGroup from "./PokemonCardGroup";
import GetPokemonCard from "../utils/GetPokemonCard";
import PokemonCardsandAxios from "./PokemonCardsandAxios";

function Pokedex() {

    const [ pokemonsToShowURL, setPokemonsToShowURL ] = useState([])
    const [ pokemonsToShow, setPokemonsToShow ] = useState([])

    useEffect(() => {
        if (pokemonsToShowURL.length) {
            GetPokemonCard(pokemonsToShowURL, setPokemonsToShow)
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
        {pokemonsToShow.pokemon ? <PokemonCardsandAxios lista={pokemonsToShow.pokemon}/> : null}  
        {pokemonsToShow.sprites ? <PokemonCardGroup data={pokemonsToShow}/> : null}
        </>
    )
}

export default Pokedex

const SeparetorDivInputs = styled.div`
    margin: auto;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
    height: 100px;
    width: 70%;
`

// // const ShowPokemons = styled.div`
// //     margin-top: 30px;
// //     display: grid;
// //     grid-template-columns: auto auto auto auto;
// `