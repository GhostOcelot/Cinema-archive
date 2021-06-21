import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import classes from './LanguageSelector.module.css';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
	const { language, setLanguage } = useContext(LanguageContext);
	const { i18n } = useTranslation();

	const changeLanguage = language => {
		i18n.changeLanguage(language);
		setLanguage(language);
		localStorage.setItem('language', JSON.stringify({ language: language }));
	};

	return (
		<div className={classes.language_btn_container}>
			<button
				className={
					language === 'en-US'
						? `${classes.language_btn} ${classes.active}`
						: `${classes.language_btn}`
				}
				onClick={() => changeLanguage('en-US')}
			>
				EN
			</button>
			<button
				className={
					language === 'pl-PL'
						? `${classes.language_btn} ${classes.active}`
						: `${classes.language_btn}`
				}
				onClick={() => changeLanguage('pl-PL')}
			>
				PL
			</button>
			{language === 'pl-PL' && (
				<p className={classes.info}>Niektóre informacje mogą być niedostępne w wersji polskiej</p>
			)}
		</div>
	);
};

export default LanguageSelector;
