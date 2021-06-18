import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieCard from './components/MovieCard/MovieCard';
import ActorCard from './components/ActorCard/ActorCard';
import ResetWindowScroll from './components/ResetWindowScroll/ResetWindowScroll';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import { MoviesContext } from './contexts/MoviesContext';
import { useContext } from 'react';

function App() {
	const { movies } = useContext(MoviesContext);

	return (
		<div className="app">
			<BrowserRouter>
				<ResetWindowScroll />
				<LanguageSelector />

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
