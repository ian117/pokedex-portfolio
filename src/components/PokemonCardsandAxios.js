import React, { useState,useEffect} from 'react'
import PokemonCardGroup from "./PokemonCardGroup";


function PokemonCardsandAxios({lista}) {

    const [ component, setComponent] = useState([])

    const makeList = (arreglo) => {
        const allItems = arreglo.map((item) => {
            if (item === null) {
                return
            }
            return <PokemonCardGroup key={item.name} data={item}/>
        })
        setComponent(allItems)
    }

    useEffect( async () => {      
        try {
            const auxArr = []
            lista.splice(0, 20).map((data) => {
                auxArr.push(fetch(data.pokemon.url)
                .then(raw => raw.json())
                .then(result => result))}
            )
            // Este código de abajo :o
            Promise.all(auxArr)
            .then(res => {
                makeList(res);
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
