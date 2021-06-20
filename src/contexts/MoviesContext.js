import { createContext, useState, useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { CurrentPageContext } from './CurrentPageContext';
import { SelectedGenresContext } from './SelectedGenresContext';

export const MoviesContext = createContext();

const MoviesContextProvider = props => {
	const [movies, setMovies] = useState();
	const { language } = useContext(LanguageContext);
	const { currentPage } = useContext(CurrentPageContext);
	const { selectedGenres } = useContext(SelectedGenresContext);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${
				process.env.REACT_APP_API_KEY
			}&language=${language}&sort_by=popularity.desc&page=${currentPage}&with_genres=${selectedGenres.join(
				','
			)}`
		)
			.then(res => res.json())
			.then(data => {
				setMovies(data);
			});
	}, [language, currentPage, selectedGenres]);

	return (
		<MoviesContext.Provider value={{ movies, setMovies }}>{props.children}</MoviesContext.Provider>
	);
};

export default MoviesContextProvider;
