import { FaCopyright, FaRegCopyright } from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = () => {
	return (
		<>
			<p className={classes.copyright}>
				<FaRegCopyright /> <span className={classes.copyright_text}>copyright</span>
			</p>
		</>
	);
};

export default Footer;
