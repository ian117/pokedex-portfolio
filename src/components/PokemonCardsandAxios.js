import React, { useState,useEffect} from 'react'

function PokemonCardsandAxios({lista}) {

    const [ arreglo, setArreglo] = useState([])
    const [ Show, setShow] = useState(false)


    useEffect(() => {
        setArreglo([...lista])
        return () => {
            setArreglo([])
        }
    }, [lista])

    useEffect(() => {
        if (arreglo.length === 0) {
            return setShow(false)
        } else {
            console.log(arreglo)
            setShow(true)
        }
        return () => {
            setShow(false)
        }
    }, [arreglo])



    return (
        <div>
            {Show === false ? <p>False</p>: 
            <p>Tru</p>
            }            
        </div>
    )
}

export default PokemonCardsandAxios
