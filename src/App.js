import { BrowserRouter, Route } from 'react-router-dom';
import MovieCard from './components/MovieCard/MovieCard';
import ActorCard from './components/ActorCard/ActorCard';
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

				<Route path="/movie/:id">
					<MovieCard />
				</Route>

				<Route path="/actor/:id">
					<ActorCard />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
