import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
    return (
        <Link to={`/trailer/${movie.id}`}>
            <div className='card'>
                <img src={movie.posterurl} />
                <p>{movie.name}</p>
            </div>
        </Link>
    )
}

export default MovieCard