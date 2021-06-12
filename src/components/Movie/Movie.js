import classes from './Movie.module.css';

const Movie = ({ movie }) => {
	return (
		<>
			<li className={classes.movie_item}>{movie.title}</li>
		</>
	);
};

export default Movie;
