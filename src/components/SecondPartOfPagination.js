import React from 'react'

function SecondPartOfPagination({postPorPage, totalPost, paginate}) {
    const PageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPost / postPorPage); i++){
        PageNumbers.push(i)
    }

    return (
        <div>
            <ul className="pagination">
            {PageNumbers.map((number) => (
                <li key={number} className="page-item">
                    <buttton href="#" id="black" onClick={() => {
                        paginate(number)
                        }} className="page-link">{number}</buttton>
                </li>
            ))}

            </ul>
        </div>
    )
}

export default SecondPartOfPagination
