import { Link } from 'react-router-dom';
import { useState } from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';
import classes from './Searchbar.module.css';

const Searchbar = () => {
	const [searchResults, setSearchResults] = useState(null);
	const [SearchText, setSearchText] = useState('');

	const searchMovie = e => {
		setSearchText(e.target.value);
		if (e.target.value.trim().length) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=41f9379ca4f4d32c4fcfd3709124a0f8&page=1&query=${e.target.value}`
			)
				.then(res => res.json())
				.then(data => {
					setSearchResults(data.results);
				});
		} else {
			setSearchResults(null);
		}
	};

	const resetSearch = () => {
		setSearchText('');
		setSearchResults(null);
	};

	return (
		<>
			<div className={classes.movie_searchbar_container}>
				<input
					onChange={e => searchMovie(e)}
					type="text"
					value={SearchText}
					className={classes.movie_search}
				/>
				<ul className={classes.search_results_list}>
					<Autocomplete searchResults={searchResults} />
				</ul>
			</div>
		</>
	);
};

export default Searchbar;
