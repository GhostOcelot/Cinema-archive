import { useContext } from 'react';
import { GenresContext } from '../../contexts/GenresContext';
import { MoviesContext } from '../../contexts/MoviesContext';
import { SelectedGenresContext } from '../../contexts/SelectedGenresContext';
import classes from './Genres.module.css';

const Genres = () => {
	const { genres } = useContext(GenresContext);
	const { setMovies } = useContext(MoviesContext);
	const { selectedGenres, setSelectedGenres } = useContext(SelectedGenresContext);

	const selectGenre = genre => {
		selectedGenres.includes(genre.id)
			? setSelectedGenres(selectedGenres.filter(currentGenre => currentGenre !== genre.id))
			: setSelectedGenres([...selectedGenres, genre.id]);
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=41f9379ca4f4d32c4fcfd3709124a0f8&sort_by=popularity.desc&page=1&with_genres=${selectedGenres.join(
				','
			)}`
		)
			.then(res => res.json())
			.then(data => setMovies(data));
	};

	return (
		<div className={classes.genre_container}>
			{genres ? (
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
				))
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};

export default Genres;
