import React from 'react'
import { useParams } from 'react-router-dom';

function Trailer({ movies }) {
    const params = useParams();

    const movie = movies.filter((el) => el.id == params.id)[0]
    console.log(movie)
    return (
        <div style={{ marginTop: "100px", height: "700px" }}>
            <img src={movie.posterurl} />
            <h3>{movie.name}</h3>
            <p>{movie.description}</p>
        </div>

    )
}

export default Trailer