import { useContext } from 'react';
import classes from './Pagination.module.css';
import { MoviesContext } from '../../contexts/MoviesContext';
import { SelectedGenresContext } from '../../contexts/SelectedGenresContext';

const Pagination = () => {
	const { movies, setMovies } = useContext(MoviesContext);
	const { selectedGenres } = useContext(SelectedGenresContext);

	const goToPage = (e, page) => {
		console.log(page);
		if (page === 0 || page === movies.total_pages + 1) {
			return;
		}
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=41f9379ca4f4d32c4fcfd3709124a0f8&sort_by=popularity.desc&page=${page}&with_genres=${selectedGenres.join(
				','
			)}`
		)
			.then(res => res.json())
			.then(data => setMovies(data));
	};

	return (
		<>
			{movies && (
				<div className={classes.button_container}>
					<button name="first_page" onClick={e => goToPage(e, 1)} className={classes.button}>
						1
					</button>
					<button
						name="previous_page"
						onClick={e => goToPage(e, movies.page - 1)}
						className={classes.button}
					>
						&lt;
					</button>
					<span className={classes.current_page}>page {movies.page}</span>
					<button
						name="next_page"
						onClick={e => goToPage(e, movies.page + 1)}
						className={classes.button}
					>
						&gt;
					</button>
					<button
						name="last_page"
						onClick={e => goToPage(e, movies.total_pages)}
						className={classes.button}
					>
						{movies.total_pages}
					</button>
				</div>
			)}
		</>
	);
};

export default Pagination;
