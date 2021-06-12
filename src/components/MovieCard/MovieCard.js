import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import classes from './MovieCard.module.css';

const MovieCard = () => {
	const [movie, setMovie] = useState();
	const params = useParams();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=41f9379ca4f4d32c4fcfd3709124a0f8&language=en-US`
		)
			.then(res => res.json())
			.then(data => setMovie(data));
	}, []);
	return (
		<>
			{movie ? (
				<div className={classes.movie_container}>
					<h1>{movie.title}</h1>
					<img
						className={classes.movie_poster}
						src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
						alt=""
					/>
					<Link className={classes.link_to_browser} to="/">
						back to browser
					</Link>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
};

export default MovieCard;
