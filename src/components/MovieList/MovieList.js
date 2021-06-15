import { useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import Movie from '../Movie/Movie';
import Pagination from '../Pagination/Pagination';
import classes from './MovieList.module.css';

const MovieList = () => {
	const { movies } = useContext(MoviesContext);

	return (
		<>
			<Pagination />
			<ul className={classes.movie_list}>
				{movies ? (
					movies.results.map(movie => {
						return <Movie movie={movie} key={movie.id} />;
					})
				) : (
					<h1 className={classes.loading}>Loading...</h1>
				)}
			</ul>
		</>
	);
};

export default MovieList;
