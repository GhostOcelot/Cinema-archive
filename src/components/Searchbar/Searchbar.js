import { useState, useContext } from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';
import classes from './Searchbar.module.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const Searchbar = () => {
	const [searchResults, setSearchResults] = useState(null);
	const [SearchText, setSearchText] = useState('');
	const { language } = useContext(LanguageContext);
	const { t } = useTranslation();

	const searchMovie = e => {
		setSearchText(e.target.value);
		if (e.target.value.trim().length) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&query=${e.target.value}&language=${language}`
			)
				.then(res => res.json())
				.then(data => {
					setSearchResults(data.results);
				});
		} else {
			setSearchResults(null);
		}
	};

	const resetSearch = e => {
		// setSearchText('');
		// setSearchResults(null);
	};

	return (
		<>
			<div className={classes.movie_searchbar_container}>
				<input
					onBlur={e => resetSearch(e)}
					onChange={e => searchMovie(e)}
					type="text"
					value={SearchText}
					className={classes.movie_search}
					placeholder={t('explore')}
				/>

				<ul className={classes.search_results_list}>
					<Autocomplete searchResults={searchResults} />
				</ul>
			</div>
		</>
	);
};

export default Searchbar;
