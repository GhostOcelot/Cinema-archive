import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
	const [darkTheme, setDarkTheme] = useState(true);

	return (
		<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
