import Genres from './components/Genres/Genres';
import MovieList from './components/MovieList/MovieList';
import Searchbar from './/components/Searchbar/Searchbar';

function App() {
	return (
		<div className="App">
			<Genres />
			<Searchbar />
			<MovieList />
		</div>
	);
}

export default App;
