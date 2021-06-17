import { createContext, useState, useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const GenresContext = createContext();

const GenresContextProvider = props => {
	const [genres, setGenres] = useState();
	const { language } = useContext(LanguageContext);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
		)
			.then(res => res.json())
			.then(data => setGenres(data.genres));
	}, [language]);

	return (
		<GenresContext.Provider value={{ genres, setGenres }}>{props.children}</GenresContext.Provider>
	);
};

export default GenresContextProvider;
