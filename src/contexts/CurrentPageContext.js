import { createContext, useState } from 'react';

export const CurrentPageContext = createContext();

const CurrentPageContextProvider = props => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
			{props.children}
		</CurrentPageContext.Provider>
	);
};

export default CurrentPageContextProvider;
