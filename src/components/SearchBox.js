import React, {useEffect, useState}  from 'react';
import GetPokemonAllTypes from "../utils/GetPokemonAllTypes";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function SearchBox({handleResults}) {

    const { register, handleSubmit } = useForm();

    const [pokemonTypes, setPokemonTypes] = useState([]);


    useEffect(() => {
        GetPokemonAllTypes(setPokemonTypes)
    }, [])


    const OnSubmit = (data) => {
        handleResults(data.type)
    }


    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
          <Separetor>
          <h3>Search by Type</h3>
            <div>
                <label htmlFor="type">
                    Type:
                </label>
                <select ref={register} name="type" id="type">
                    {pokemonTypes.map((type) => (
                        <option key={type.name} value={type.url}>{type.name}</option>
                    ))}
                </select>
            </div>
            <button>Search Pokemons</button>
          </Separetor>
        </form>
    )
}

export default SearchBox

const Separetor = styled.div`
    display: flex;
    flex-direction: column;
    height: 70px;
    justify-content: center;

    button {
        cursor: pointer;
        width: 130px;
        align-self: center;
        margin-top: 20px;
    }
`