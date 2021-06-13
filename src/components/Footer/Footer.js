import { FaRegCopyright } from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = () => {
	return (
		<>
			<div className={classes.copyright}>
				<FaRegCopyright /> <span className={classes.copyright_text}>copyright 2021</span>
			</div>
		</>
	);
};

export default Footer;
