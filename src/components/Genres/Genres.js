import { useState, useContext } from 'react';
import { GenresContext } from '../../contexts/GenresContext';
import classes from './Genres.module.css';

const Genres = () => {
	const genres = useContext(GenresContext);
	const [selectedGenres, setSelectedGenres] = useState([]);

	const selectGenre = genre => {
		selectedGenres.includes(genre.id)
			? setSelectedGenres(selectedGenres.filter(currentGenre => currentGenre !== genre.id))
			: setSelectedGenres([...selectedGenres, genre.id]);
		// fetch(`https://api.themoviedb.org/3/discover/movie?api_key=41f9379ca4f4d32c4fcfd3709124a0f8&sort_by=popularity.desc&page=1&with_genres=${selectedGenres.join(",")}`)
		// .then(res => res.json())
		// .then(data => )
	};

	return (
		<div className={classes.genre_container}>
			{genres ? (
				genres.map(genre => (
					<button onClick={() => selectGenre(genre)} key={genre.id} className={classes.genre_tile}>
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
