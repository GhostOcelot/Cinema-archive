import { FaRegCopyright } from 'react-icons/fa';
import classes from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className={classes.copyright}>
				<FaRegCopyright /> <span className={classes.copyright_text}>{t('copyright')} 2021</span>
			</div>
		</>
	);
};

export default Footer;
