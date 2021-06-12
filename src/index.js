import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GenresContextProvider from './contexts/GenresContext';
import SelectedGenresContextProvider from './contexts/SelectedGenresContext';
import MoviesContextProvider from './contexts/MoviesContext';

ReactDOM.render(
	<React.StrictMode>
		<GenresContextProvider>
			<SelectedGenresContextProvider>
				<MoviesContextProvider>
					<App />
				</MoviesContextProvider>
			</SelectedGenresContextProvider>
		</GenresContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
