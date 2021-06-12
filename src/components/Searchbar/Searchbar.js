import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import classes from './Searchbar.module.css';
import MovieCard from '../MovieCard/MovieCard';

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

	const handleBlur = e => {
		setSearchResults(null);
		e.target.value = '';
	};

	return (
		<>
			<div className={classes.movie_searchbar_container}>
				<input
					onChange={e => searchMovie(e)}
					// onBlur={e => handleBlur(e)}
					type="text"
					className={classes.movie_search}
				/>
				<ul className={classes.search_results_list}>
					{searchResults &&
						searchResults.map(movie => (
							<Link
								className={classes.search_results_link}
								to={`/movie/${movie.id}`}
								key={movie.id}
							>
								<li
									className={
										searchResults
											? classes.search_results_item
											: `${classes.search_results_item} ${classes.empty}`
									}
								>
									{movie.title.slice(0, 50)} {movie.title.length < 50 ? null : '...'}
								</li>
							</Link>
						))}
				</ul>
			</div>
		</>
	);
};

export default Searchbar;
