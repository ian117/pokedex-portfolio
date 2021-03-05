import React,{useState, useEffect} from 'react'
import styled from "styled-components"
import PokemonCardGroup from "./PokemonCardGroup";
import SecondPartOfPagination from "./SecondPartOfPagination";

function Pagination({pokemons}) {
   
    const [ post, setPost] = useState([])
    const [ currentPage, setCurrentPage] = useState(1)
    const [ postPerPage] = useState(4)

    useEffect(() => {
        setPost(pokemons)

        return () => {
            setPost([])
        }
    }, [pokemons])

    //Get current post
    const IndexOfLastPost = currentPage * postPerPage
    const IndexOfFirstPost = IndexOfLastPost - postPerPage
    const CurrentPost = post.slice(IndexOfFirstPost, IndexOfLastPost)

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber) 
   
    return (
        <>
        <SecondPartOfPagination postPorPage={postPerPage} totalPost={post.length} paginate={paginate}/>
        <DisplayGrid>
        {CurrentPost.map((item) => {
            return <PokemonCardGroup key={item.name} data={item}/>})
        }

        </DisplayGrid>
        </>
    )
}

export default Pagination


const DisplayGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;

    div {
        margin-left: 10px;
        margin-right: 10px;
    }
`