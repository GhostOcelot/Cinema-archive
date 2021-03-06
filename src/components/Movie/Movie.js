import { Link } from 'react-router-dom';
import classes from './Movie.module.css';
import { FaImage } from 'react-icons/fa';

const Movie = ({ movie }) => {
	return (
		<li className={classes.movie_tile}>
			<Link to={`/movie/${movie.id}`} className={classes.link}>
				<div className={classes.image_container}>
					{movie.backdrop_path ? (
						<img
							className={classes.image}
							src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
							alt="#"
							loading="lazy"
						/>
					) : (
						<FaImage />
					)}
				</div>
				<p className={classes.movie_release_year}>
					{movie.release_date ? movie.release_date.slice(0, 4) : ' \u2013 '}
				</p>
				<div className={classes.movie_title}>{movie.title}</div>
			</Link>
		</li>
	);
};

export default Movie;
