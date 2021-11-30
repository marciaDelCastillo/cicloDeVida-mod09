import React from 'react';

function MovieList({movie}){
    return(
        <tr>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.rating}</td>
            <td>{movie.awards}</td>
            <td>{movie.length}</td>
        </tr>
    )
}

export default MovieList