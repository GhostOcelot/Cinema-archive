import { useEffect, useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';

const ResetScrollPosition = ({ movieListRef }) => {
	const { movies } = useContext(MoviesContext);

	useEffect(() => {
		// window.scrollTo(0, 0);
		movieListRef && movieListRef.current.scrollTo(0, 0);
	}, [movies, movieListRef]);

	return null;
};

export default ResetScrollPosition;
