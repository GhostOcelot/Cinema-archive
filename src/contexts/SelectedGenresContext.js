import { createContext, useState } from 'react';

export const SelectedGenresContext = createContext();

const SelectedGenresContextProvider = props => {
	const [selectedGenres, setSelectedGenres] = useState([]);

	return (
		<SelectedGenresContext.Provider value={{ selectedGenres, setSelectedGenres }}>
			{props.children}
		</SelectedGenresContext.Provider>
	);
};

export default SelectedGenresContextProvider;
