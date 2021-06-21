import { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageContext = createContext();

const LanguageContextProvider = props => {
	const { i18n } = useTranslation();
	const lang = JSON.parse(localStorage.getItem('language'));

	useEffect(() => {
		lang && i18n.changeLanguage(lang.language.slice(0, 2));
	}, []);

	const [language, setLanguage] = useState(lang ? lang.language : 'en-US');

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{props.children}
		</LanguageContext.Provider>
	);
};

export default LanguageContextProvider;
