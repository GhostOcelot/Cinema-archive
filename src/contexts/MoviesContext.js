import { createContext, useState, useEffect } from 'react';
// import { CurrentPageContext } from './CurrentPageContext';

export const MoviesContext = createContext();

const MoviesContextProvider = props => {
	// const { currentPage } = useContext(CurrentPageContext);
	const [movies, setMovies] = useState();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=41f9379ca4f4d32c4fcfd3709124a0f8&sort_by=popularity.desc&page=1`
		)
			.then(res => res.json())
			.then(data => {
				setMovies(data);
			});
	}, []);

	return (
		<MoviesContext.Provider value={{ movies, setMovies }}>{props.children}</MoviesContext.Provider>
	);
};

export default MoviesContextProvider;
