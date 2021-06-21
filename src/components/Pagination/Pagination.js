import { useContext } from 'react';
import classes from './Pagination.module.css';
import { MoviesContext } from '../../contexts/MoviesContext';
import { SelectedGenresContext } from '../../contexts/SelectedGenresContext';
import { CurrentPageContext } from '../../contexts/CurrentPageContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../contexts/ThemeContext';

const Pagination = () => {
	const { movies, setMovies } = useContext(MoviesContext);
	const { selectedGenres } = useContext(SelectedGenresContext);
	const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
	const { language } = useContext(LanguageContext);
	const { t } = useTranslation();
	const { darkTheme } = useContext(ThemeContext);

	const goToPage = page => {
		if (page === 0 || page === movies.total_pages + 1 || page === currentPage) {
			return;
		}

		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${
				process.env.REACT_APP_API_KEY
			}&sort_by=popularity.desc&page=${page}&with_genres=${selectedGenres.join(
				','
			)}&language=${language}`
		)
			.then(res => res.json())
			.then(data => {
				setCurrentPage(page);
				setMovies(data);
			});
	};

	return (
		<>
			{movies && (
				<div
					className={
						darkTheme ? `${classes.button_container} ${classes.dark}` : classes.button_container
					}
				>
					<button
						name="first_page"
						onClick={() => goToPage(1)}
						className={darkTheme ? `${classes.button} ${classes.dark}` : `${classes.button}`}
					>
						1
					</button>
					<button
						name="previous_page"
						onClick={() => goToPage(movies.page - 1)}
						className={darkTheme ? `${classes.button} ${classes.dark}` : `${classes.button}`}
					>
						&lt;
					</button>
					<span className={classes.current_page}>
						{movies.results.length ? `${t('page')} ${movies.page}` : ' \u2013 '}
					</span>
					<button
						name="next_page"
						onClick={() => goToPage(movies.page + 1)}
						className={darkTheme ? `${classes.button} ${classes.dark}` : `${classes.button}`}
					>
						&gt;
					</button>
					<button
						name="last_page"
						onClick={() => goToPage(movies.total_pages)}
						className={darkTheme ? `${classes.button} ${classes.dark}` : `${classes.button}`}
					>
						{movies.total_pages}
					</button>
				</div>
			)}
		</>
	);
};

export default Pagination;
