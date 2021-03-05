import React, { useState,useEffect} from 'react'
import Pagination from "./Pagination";



function PokemonCardsandAxios({lista}) {

    const [ component, setComponent] = useState([])

    const MakeList = (arreglo) => {
        const helpingArray = []
        arreglo.map(promiseResult => helpingArray.push(promiseResult.value))
        const allItems = <Pagination pokemons={helpingArray}/>
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
            // Promise.allSettled
            // Puede solucionar lo de algunas peticiones fallidas, después
            // ir a donde se mapea y solucionar (si existe mapearlo, si no...)
            Promise.allSettled(auxArr)
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

