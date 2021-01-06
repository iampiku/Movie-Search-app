import React from 'react';

import './Popup.css';

function Popup({ selected, handleClosePopUp }) {
	return (
		<section className='popup'>
			<div className='content'>
				<h2 className='movie-title'>
					{selected.Title} <span className='movie-year'>{selected.Year}</span>
				</h2>
				<p className='rating'>{selected.rating}</p>
				<img className='movie-cover' src={selected.Poster} alt='movie poster' />
			</div>
			<p className='movie-plot'>{selected.Plot}</p>
			<p className='run-time'>{selected.Runtime}</p>
			<p className='director'>{selected.Director}</p>
			<p className='actors'>{selected.Actors}</p>
			<button className='close-popup' onClick={handleClosePopUp}>
				Close
			</button>
		</section>
	);
}

export default Popup;
