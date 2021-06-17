import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import classes from './LanguageSelector.module.css';

const LanguageSelector = () => {
	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<div className={classes.language_btn_container}>
			<button
				className={
					language === 'en-US'
						? `${classes.language_btn} ${classes.active}`
						: `${classes.language_btn}`
				}
				onClick={() => setLanguage('en-US')}
			>
				EN
			</button>
			<button
				className={
					language === 'pl-PL'
						? `${classes.language_btn} ${classes.active}`
						: `${classes.language_btn}`
				}
				onClick={() => setLanguage('pl-PL')}
			>
				PL
			</button>
		</div>
	);
};

export default LanguageSelector;
