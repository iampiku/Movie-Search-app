import React from 'react';

import './MovieCard.css';

function MovieCard({ result, handlePopUpWindow }) {
	return (
		<div className='main' onClick={() => handlePopUpWindow(result.imdbID)}>
			<img className='movie-cover' src={result.Poster} alt='movie-img' />
			<h6 className='movie-title'>{result.Title}</h6>
			<h6 className='movie-year'>{result.Year}</h6>
		</div>
	);
}

export default MovieCard;
