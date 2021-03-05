import React from 'react'
import styled from "styled-components"

function SecondPartOfPagination({postPorPage, totalPost, paginate}) {
    const numOfPages = Math.ceil(totalPost / postPorPage)
    const PageNumbers = []

    for (let i = 1; i <= numOfPages; i++){
        PageNumbers.push(i)
    }

    // const correctNumberTodisplay = PageNumbers.slice(PageNumbers > 5 ? PageNumbers - 5 : 0, PageNumbers > 5 ? PageNumbers + 5 : 10)

    return (
        <CenterThis>
        <div>
            <ul className="pagination">
            {PageNumbers.map((number) => (
                <li key={number} className="page-item">
                    <button href="#" id="black" onClick={() => {
                        paginate(number)
                        }} className="page-link">{number}</button>
                </li>
            ))}

            </ul>
        </div>
        </CenterThis>
    )
}

export default SecondPartOfPagination

const CenterThis = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`