import { useState, useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import classes from './Searchbar.module.css';

const Searchbar = () => {
	const [searchResults, setSearchResults] = useState(null);
	const { movies } = useContext(MoviesContext);

	const searchMovie = e => {
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

	return (
		<>
			<div className={classes.movie_searchbar_container}>
				<input onChange={e => searchMovie(e)} type="text" className={classes.movie_search} />
			</div>
			<ul className={classes.search_list}>
				{searchResults && searchResults.map(movie => <li key={movie.id}>{movie.title}</li>)}
			</ul>
		</>
	);
};

export default Searchbar;
