import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import classes from './SelectTheme.module.css';

const SelectTheme = () => {
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		setDarkTheme(!darkTheme);
	};

	return (
		<div
			className={
				darkTheme
					? `${classes.select_theme_btn_container} ${classes.dark}`
					: `${classes.select_theme_btn_container}`
			}
		>
			<span>dark</span>
			<button className={classes.select_theme_btn} onClick={toggleTheme}>
				{/* {darkTheme ? 'light' : 'dark'} */}
				<div
					className={darkTheme ? `${classes.switch} ${classes.dark}` : `${classes.switch}`}
				></div>
			</button>
			<span>light</span>
		</div>
	);
};

export default SelectTheme;
