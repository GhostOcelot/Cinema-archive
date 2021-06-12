import { BrowserRouter, Route } from 'react-router-dom';
import Genres from './components/Genres/Genres';
import MovieList from './components/MovieList/MovieList';
import Searchbar from './/components/Searchbar/Searchbar';
import MovieCard from './/components/MovieCard/MovieCard';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/">
					<Genres />
					<Searchbar />
					<MovieList />
				</Route>
				<Route path="/movie/:id" component={MovieCard} />
			</BrowserRouter>
		</div>
	);
}

export default App;
