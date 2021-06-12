import { Link } from 'react-router-dom';
import classes from './Autocomplete.module.css';

const Autocomplete = ({ searchResults }) => {
	return (
		<>
			{searchResults &&
				searchResults.map(movie => (
					<Link className={classes.search_results_link} to={`/movie/${movie.id}`} key={movie.id}>
						<li className={classes.search_results_item}>
							{movie.title.slice(0, 50)} {movie.title.length < 50 ? null : '...'}
						</li>
					</Link>
				))}
		</>
	);
};

export default Autocomplete;
