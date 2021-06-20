import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GenresContextProvider from './contexts/GenresContext';
import SelectedGenresContextProvider from './contexts/SelectedGenresContext';
import MoviesContextProvider from './contexts/MoviesContext';
import CurrentPageContextProvider from './contexts/CurrentPageContext';
import LanguageContextProvider from './contexts/LanguageContext';
import ThemeContextProvider from './contexts/ThemeContext';
import './i18n';

ReactDOM.render(
	<React.StrictMode>
		<ThemeContextProvider>
			<LanguageContextProvider>
				<CurrentPageContextProvider>
					<GenresContextProvider>
						<SelectedGenresContextProvider>
							<MoviesContextProvider>
								<App />
							</MoviesContextProvider>
						</SelectedGenresContextProvider>
					</GenresContextProvider>
				</CurrentPageContextProvider>
			</LanguageContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
