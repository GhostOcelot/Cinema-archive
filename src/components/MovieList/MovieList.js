import { useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import Movie from '../Movie/Movie';
import classes from './MovieList.module.css';

const MovieList = () => {
	const { movies } = useContext(MoviesContext);
	console.log(movies);

	return (
		<>
			<h1 className={classes.header}>Movie List</h1>
			<ul>
				{movies ? (
					movies.results.map(movie => {
						return <Movie movie={movie} key={movie.id} />;
					})
				) : (
					<h1>Loading...</h1>
				)}
			</ul>
		</>
	);
};

export default MovieList;