import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GenresContextProvider from './contexts/GenresContext';
import MoviesContextProvider from './contexts/MoviesContext';

ReactDOM.render(
	<React.StrictMode>
		<GenresContextProvider>
			<MoviesContextProvider>
				<App />
			</MoviesContextProvider>
		</GenresContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
