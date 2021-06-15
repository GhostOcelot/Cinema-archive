import { BrowserRouter, Route } from 'react-router-dom';
import MovieCard from './components/MovieCard/MovieCard';
import Home from './components/Home/Home';
import { MoviesContext } from './contexts/MoviesContext';
import { useContext } from 'react';

function App() {
	const { movies } = useContext(MoviesContext);

	return (
		<div className="app">
			<BrowserRouter>
				<Route exact path="/">
					{movies ? <Home /> : <h1 style={{ margin: '200px auto' }}>Loading...</h1>}
				</Route>
				<Route path="/movie/:id" component={MovieCard} />
			</BrowserRouter>
		</div>
	);
}

export default App;
