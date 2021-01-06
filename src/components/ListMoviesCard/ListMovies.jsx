import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './ListMovies.css';

function ListMovies({ results, handlePopUpWindow }) {
	return (
		<section className='results'>
			{results.map((result) => (
				<MovieCard
					key={result.imdbID}
					result={result}
					handlePopUpWindow={handlePopUpWindow}
				/>
			))}
		</section>
	);
}

export default ListMovies;
