import classes from './MovieInfo.module.css';
import { Link } from 'react-router-dom';
import { FaHeart, FaUser, FaImage } from 'react-icons/fa';

const MovieInfo = ({ movie }) => {
	return (
		<>
			<div className={classes.movie_container}>
				<div className={classes.poster_and_link}>
					<div
						className={classes.poster_container}
						style={{
							backgroundImage: movie.poster_path ? (
								`url(https://image.tmdb.org/t/p/original${movie.poster_path})`
							) : (
								<div className={classes.movie_poster}>
									<FaImage />
								</div>
							),
						}}
					></div>
					<Link className={classes.link_to_browser} to="/">
						back to browser
					</Link>
				</div>
				<div className={classes.info_container}>
					<h1 className={classes.movie_title}>
						{movie.title}
						<span className={classes.movie_release_date}>{movie.release_date.slice(0, 4)}</span>
					</h1>
					<h2 className={classes.movie_tagline}>{movie.tagline}</h2>
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
		</>
	);
};

export default MovieInfo;