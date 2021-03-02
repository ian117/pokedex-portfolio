import React from 'react';
import { useForm } from "react-hook-form";
import styled from "styled-components"

function SearchBoxPokOnlyOne({handleResults}) {
    
    const { register, handleSubmit } = useForm();

    const URLPokemonSearch = 'https://pokeapi.co/api/v2/pokemon/'
    
    const OnSubmit = (data) => {
        const SearchThis = URLPokemonSearch + data.name 
        handleResults(SearchThis.toLowerCase())
    }

    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
          <Separetor>
          <h3 id="moveThisALittle">Search by Name</h3>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input required placeholder="Name" ref={register} name="name" id="name"/>
            </div>
            <button>Search Pokemons</button>
          </Separetor>
        </form>
    )
}

export default SearchBoxPokOnlyOne

const Separetor = styled.div`
    display: flex;
    flex-direction: column;
    height: 70px;
    justify-content: center;
    margin: auto;
    button {
        cursor: pointer;
        width: 130px;
        align-self: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`