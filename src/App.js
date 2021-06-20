import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieCard from './components/MovieCard/MovieCard';
import ActorCard from './components/ActorCard/ActorCard';
import ResetWindowScroll from './components/ResetWindowScroll/ResetWindowScroll';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import SelectTheme from './components/SelectTheme/SelectTheme';
import { MoviesContext } from './contexts/MoviesContext';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';

function App() {
	const { movies } = useContext(MoviesContext);
	const { darkTheme } = useContext(ThemeContext);

	return (
		<div className={darkTheme ? 'app dark' : 'app'}>
			<BrowserRouter>
				<ResetWindowScroll />
				<LanguageSelector />
				<SelectTheme />
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
