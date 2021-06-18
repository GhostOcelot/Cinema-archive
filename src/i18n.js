import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			explore: 'explore...',
			page: 'page',
			copyright: 'copyright',
			backToBrowser: 'back to browser',
			noBio: 'No bio available',
			loading: 'Loading...',
			noResults: 'no results',
		},
	},
	pl: {
		translation: {
			explore: 'eksploruj...',
			page: 'strona',
			copyright: 'wszelkie prawa zastrzeżone',
			backToBrowser: 'wróć do przeglądania',
			noBio: 'Brak biografii',
			loading: 'Ładowanie...',
			noResults: 'brak wyników',
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
