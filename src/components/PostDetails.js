import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";


const PostDetails = ({match}) => {
    
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
    .then(raw => raw.json())
    .then(res => {setPokemon(res)})
    }, [])
    
    return (
        <div>
        <p>{pokemon.name ? pokemon.name : null}</p>
        <img src={pokemon.sprites ? pokemon.sprites.front_default : null} alt="pokemon image"/>
        <p>Movements: {pokemon.moves ? pokemon.moves.length : null}</p>
        <br/>
        <p>Habilities:</p>
        <ul>
            {pokemon.abilities ? pokemon.abilities.map(ability => <li key={ability.ability.name} style={{listStyle:'none'}}>{ability.ability.name}</li>) : null}
        </ul>
        <p>Height: {pokemon.height ? pokemon.height : null}</p>
        <p>Weight: {pokemon.weight ? pokemon.weight : null}</p>
        <p>Number in Pokedex: {pokemon.order ? pokemon.order : null}</p>
        <Link to="/pokedex"><button>Return to Pokedex</button></Link>
        <br/>
        <Link to={`/pokedex/${match.params.id}/encounters`}>Encounters</Link>
        </div>
    )
}

export default PostDetails
