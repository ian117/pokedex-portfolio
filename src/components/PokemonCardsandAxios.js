import React, { useState,useEffect} from 'react'
import PokemonCardGroup from "./PokemonCardGroup";
import styled from "styled-components"



function PokemonCardsandAxios({lista}) {

    const [ component, setComponent] = useState([])
    const [ post, setPost] = useState([])
    const [ loading, setLoading] = useState(false)
    const [ postPerPage, setPostPerPage] = useState(4)

    const makeList = (arreglo) => {
        if (arreglo.length === 0){
            const nothing = <h2>No Luck</h2>
            return setComponent(nothing)
        }
        const allItems = <DisplayGrid>
                        {arreglo.map((item) => {
                        return <PokemonCardGroup key={item.name} data={item}/>
                            })}
                    </DisplayGrid>
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


const DisplayGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;

    div {
        margin-left: 10px;
        margin-right: 10px;
    }
`