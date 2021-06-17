import { useContext, useRef } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import Movie from '../Movie/Movie';
import ResetScrollPosition from '../ResetScrollPosition/ResetScrollPosition';
import Pagination from '../Pagination/Pagination';
import classes from './MovieList.module.css';

const MovieList = () => {
	const { movies } = useContext(MoviesContext);
	const movieListRef = useRef();

	return (
		<>
			<Pagination />
			<ResetScrollPosition movieListRef={movieListRef} />
			<ul ref={movieListRef} className={classes.movie_list}>
				{movies &&
					movies.results.map(movie => {
						return <Movie movie={movie} key={movie.id} />;
					})}
			</ul>
		</>
	);
};

export default MovieList;
