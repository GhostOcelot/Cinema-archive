import { Link } from 'react-router-dom';
import classes from './Movie.module.css';

const Movie = ({ movie }) => {
	return (
		<>
			<Link
				to={`/movie/${movie.id}`}
				className={classes.link}
				href={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
			>
				<li className={classes.movie_item}>{movie.title}</li>
			</Link>
		</>
	);
};

export default Movie;
