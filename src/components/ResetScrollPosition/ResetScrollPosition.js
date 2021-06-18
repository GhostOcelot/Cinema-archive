import { useEffect, useContext } from 'react';
import { SelectedGenresContext } from '../../contexts/SelectedGenresContext';
import { CurrentPageContext } from '../../contexts/CurrentPageContext';

const ResetScrollPosition = ({ movieListRef }) => {
	const { selectedGenres } = useContext(SelectedGenresContext);
	const { currentPage } = useContext(CurrentPageContext);

	useEffect(() => {
		movieListRef && movieListRef.current.scrollTo(0, 0);
	}, [selectedGenres, currentPage, movieListRef]);

	return null;
};

export default ResetScrollPosition;
