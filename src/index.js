import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GenresContextProvider from './contexts/GenresContext';
import SelectedGenresContextProvider from './contexts/SelectedGenresContext';
import MoviesContextProvider from './contexts/MoviesContext';
import CurrentPageContextProvider from './contexts/CurrentPageContext';
import LanguageContextProvider from './contexts/LanguageContext';

ReactDOM.render(
	<React.StrictMode>
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
	</React.StrictMode>,
	document.getElementById('root')
);
