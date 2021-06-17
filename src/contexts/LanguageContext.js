import { createContext, useState } from 'react';

export const LanguageContext = createContext();

const LanguageContextProvider = props => {
	const [language, setLanguage] = useState('en-US');

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{props.children}
		</LanguageContext.Provider>
	);
};

export default LanguageContextProvider;
