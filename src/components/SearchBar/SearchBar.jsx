import React from 'react';

import Logo from '../icons/video.svg';
import './SearchBar.css';

const SearchBar = ({ handleQuery, search }) => {
	return (
		<nav className='nav-bar'>
			<div className='site-logo'>
				<img src={Logo} alt='site logo' className='logo' />
				<b className='site-title'>Movie Library</b>
			</div>
			<div className='search-option'>
				<input
					type='text'
					placeholder='Search Movies... 🔍'
					onChange={handleQuery}
					onKeyPress={search}
				/>
			</div>
		</nav>
	);
};

export default SearchBar;
