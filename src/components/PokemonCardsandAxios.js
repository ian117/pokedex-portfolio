import React, { useState,useEffect} from 'react'
import Pagination from "./Pagination";



function PokemonCardsandAxios({lista}) {

    const [ component, setComponent] = useState([])

    const MakeList = (arreglo) => {
        if (arreglo.length === 0){
            const nothing = <h2>No Luck</h2>
            return setComponent(nothing)
        }
        const allItems = <Pagination pokemons={arreglo}/>
        setComponent(allItems)
    }

    useEffect( async () => {      
        try {
            const auxArr = []
            lista.map((data) => {
                auxArr.push(fetch(data.pokemon.url)
                .then(raw => raw.json())
                .then(result => result))}
            )
            // Este código de abajo :o
            Promise.all(auxArr)
            .then(res => {
                MakeList(res);
            })
            .catch(er => console.log(er))

        } catch (err) {
            console.error(err)
        }
    }, [lista])

    return (
        <div>
            {component}          
        </div>
    )
}

export default PokemonCardsandAxios

