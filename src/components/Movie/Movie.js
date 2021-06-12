import classes from './Movie.module.css';

const Movie = ({ movie }) => {
	return (
		<>
			<a className={classes.link} href={`https://image.tmdb.org/t/p/original${movie.poster_path}`}>
				<li className={classes.movie_item}>{movie.title}</li>
			</a>
		</>
	);
};

export default Movie;
