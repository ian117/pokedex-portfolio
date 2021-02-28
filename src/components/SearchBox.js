import React, {useEffect, useState}  from 'react';
import GetPokemonAllTypes from "../utils/GetPokemonAllTypes";
import { useForm } from "react-hook-form";


function SearchBox() {

    const { register, handleSubmit } = useForm();

    const [pokemonTypes, setPokemonTypes] = useState( new Array() );
    
    
    useEffect(() => {
        GetPokemonAllTypes(setPokemonTypes)
    }, [])

    const OnSubmit = (data) => {
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
          <label>
              Type:
              <input ref={register} name="type" type="text"/>
          </label>
          <label>
              Name:
              <input ref={register} name="name"/>
          </label>
        </form>
    )
}

export default SearchBox
