import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
	const mode = JSON.parse(localStorage.getItem('darkmode'));

	const [darkTheme, setDarkTheme] = useState(mode ? mode.darkMode : true);

	return (
		<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
