import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import classes from './MovieCard.module.css';
import { FaHeart, FaUser, FaImage } from 'react-icons/fa';

const MovieCard = () => {
	const [movie, setMovie] = useState();
	const params = useParams();

	console.log(movie);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=41f9379ca4f4d32c4fcfd3709124a0f8&language=en-US`
		)
			.then(res => res.json())
			.then(data => setMovie(data));
	}, [params]);
	return (
		<>
			{movie ? (
				<div className={classes.movie_container}>
					<div className={classes.poster_container}>
						{movie.poster_path ? (
							<img
								className={classes.movie_poster}
								src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
								alt=""
							/>
						) : (
							<div className={classes.movie_poster}>
								<FaImage />
							</div>
						)}
						<Link className={classes.link_to_browser} to="/">
							back to browser
						</Link>
					</div>
					<div className={classes.info_container}>
						<h1 className={classes.movie_title}>
							{movie.title}
							<span className={classes.movie_release_date}>{movie.release_date.slice(0, 4)}</span>
						</h1>
						<p className={classes.movie_overview}>{movie.overview}</p>
						<div className={classes.genre_container}>
							{movie.genres.map(genre => {
								return (
									<span key={genre.id} className={classes.genre_tab}>
										{genre.name}
									</span>
								);
							})}
						</div>
						<p className={classes.movie_rank}>
							<FaHeart className={classes.movie_rank_icon} />
							<span className={classes.movie_rank_number}>{movie.vote_average}</span>
							<FaUser className={classes.movie_rank_icon} />
							<span className={classes.movie_rank_number}>{movie.vote_count}</span>
						</p>
					</div>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
};

export default MovieCard;
