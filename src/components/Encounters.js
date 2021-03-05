import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Encounters = ({match}) => {

    const [encounter, setEncounters] = useState([])
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/encounters`)
        .then(raw => raw.json())
        .then(res => {setEncounters(res)})
    }, [])

    return (
        <div>
            <p>Where you can encounter this pokemon 🙀🙀: </p>
            <ul>
                {encounter.length !== 0 ? encounter.map((location) => <li style={{listStyle:"none"}} key={location.location_area.name}>{location.location_area.name}</li>) : null}
            </ul>
            <br/>
            <Link to={`/pokedex/${match.params.id}`}><button>Return</button></Link>
            <br/>
        </div>
    )
}

export default Encounters
