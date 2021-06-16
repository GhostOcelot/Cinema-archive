import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GenresContextProvider from './contexts/GenresContext';
import SelectedGenresContextProvider from './contexts/SelectedGenresContext';
import MoviesContextProvider from './contexts/MoviesContext';
import CurrentPageContextProvider from './contexts/CurrentPageContext';

ReactDOM.render(
	<React.StrictMode>
		<CurrentPageContextProvider>
			<GenresContextProvider>
				<SelectedGenresContextProvider>
					<MoviesContextProvider>
						<App />
					</MoviesContextProvider>
				</SelectedGenresContextProvider>
			</GenresContextProvider>
		</CurrentPageContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
