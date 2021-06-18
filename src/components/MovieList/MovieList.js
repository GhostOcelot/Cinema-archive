import { useContext, useRef } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import Movie from '../Movie/Movie';
import ResetScrollPosition from '../ResetScrollPosition/ResetScrollPosition';
import Pagination from '../Pagination/Pagination';
import classes from './MovieList.module.css';
import { useTranslation } from 'react-i18next';

const MovieList = () => {
	const { movies } = useContext(MoviesContext);
	const movieListRef = useRef();
	const { t } = useTranslation();

	return (
		<>
			<Pagination />
			<ResetScrollPosition movieListRef={movieListRef} />
			<ul ref={movieListRef} className={classes.movie_list}>
				{movies.results.length ? (
					movies.results.map(movie => {
						return <Movie movie={movie} key={movie.id} />;
					})
				) : (
					<h1 className={classes.no_results}>{t('noResults')}</h1>
				)}
			</ul>
		</>
	);
};

export default MovieList;
