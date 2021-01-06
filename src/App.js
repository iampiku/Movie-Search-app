import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Popup from './components/PopUp/Popup';
import ListMovies from './components/ListMoviesCard/ListMovies';

import './App.css';

function App() {
	const [state, setState] = useState({
		query: '', // store search query;
		results: [], // store result from the api call for the query;
		selected: {}, // selected movie card;
	});

	const apiUrl = 'http://www.omdbapi.com/?apikey=571162e1';

	// fetching movie data by making api call;
	const search = async (event) => {
		if (event.key === 'Enter') {
			await fetch(apiUrl + '&s=' + state.query)
				.then((response) => response.json())
				.then((data) => {
					let results = data.Search;
					setState((previousState) => {
						return { ...previousState, results: results };
					});
				});
		}
	};

	// handling was search query on the search bar;
	const handleQuery = (event) => {
		let query = event.target.value;
		setState((previousState) => {
			return { ...previousState, query: query };
		});
	};

	// handling click event on the moviecard;
	const handlePopUpWindow = async (id) => {
		await fetch(apiUrl + '&i=' + id)
			.then((response) => response.json())
			.then((data) => {
				let result = data;
				setState((previousState) => {
					return { ...previousState, selected: result };
				});
			});
	};

	// reseting the window popup after closing;
	const handleClosePopUp = () => {
		setState((previousState) => {
			return { ...previousState, selected: {} };
		});
	};

	return (
		<div className='App'>
			<SearchBar handleQuery={handleQuery} search={search} />
			<ListMovies
				results={state.results}
				handlePopUpWindow={handlePopUpWindow}
			/>
			{typeof state.selected.Title !== 'undefined' ? (
				<Popup selected={state.selected} handleClosePopUp={handleClosePopUp} />
			) : (
				false
			)}
		</div>
	);
}

export default App;
