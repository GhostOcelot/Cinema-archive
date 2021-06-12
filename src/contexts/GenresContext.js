import { createContext, useState, useEffect } from 'react';

export const GenresContext = createContext();

const GenresContextProvider = props => {
	const [genres, setGenres] = useState();
	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/genre/movie/list?api_key=41f9379ca4f4d32c4fcfd3709124a0f8&language=en-US'
		)
			.then(res => res.json())
			.then(data => setGenres(data.genres));
	}, []);

	return <GenresContext.Provider value={genres}>{props.children}</GenresContext.Provider>;
};

export default GenresContextProvider;
