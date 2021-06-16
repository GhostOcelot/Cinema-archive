import { useContext, useEffect } from 'react';
import { GenresContext } from '../../contexts/GenresContext';
import { MoviesContext } from '../../contexts/MoviesContext';
import { CurrentPageContext } from '../../contexts/CurrentPageContext';
import { SelectedGenresContext } from '../../contexts/SelectedGenresContext';
import classes from './Genres.module.css';

const Genres = () => {
	const { genres } = useContext(GenresContext);
	const { setMovies } = useContext(MoviesContext);
	const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
	const { selectedGenres, setSelectedGenres } = useContext(SelectedGenresContext);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${
				process.env.REACT_APP_API_KEY
			}&sort_by=popularity.desc&page=1&with_genres=${selectedGenres.join(',')}&page=${currentPage}`
		)
			.then(res => res.json())
			.then(data => setMovies(data));
	}, [selectedGenres, setMovies, currentPage]);

	const selectGenre = genre => {
		setCurrentPage(1);
		selectedGenres.includes(genre.id)
			? setSelectedGenres(selectedGenres.filter(currentGenre => currentGenre !== genre.id))
			: setSelectedGenres([...selectedGenres, genre.id]);
	};

	return (
		<div className={classes.genre_container}>
			{genres &&
				genres.map(genre => (
					<button
						onClick={() => selectGenre(genre)}
						key={genre.id}
						className={
							selectedGenres.includes(genre.id)
								? `${classes.genre_tile} ${classes.active}`
								: classes.genre_tile
						}
					>
						{genre.name}
					</button>
				))}
		</div>
	);
};

export default Genres;
