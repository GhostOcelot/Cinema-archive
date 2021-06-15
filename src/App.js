import { BrowserRouter, Route } from 'react-router-dom';
import Genres from './components/Genres/Genres';
import MovieList from './components/MovieList/MovieList';
import Searchbar from './components/Searchbar/Searchbar';
import MovieCard from './components/MovieCard/MovieCard';
import Footer from './components/Footer/Footer';
// import Pagination from './components/Pagination/Pagination';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Route exact path="/">
					<Genres />
					<Searchbar />
					<MovieList />
					{/* <Pagination /> */}
					<ScrollToTop />
				</Route>
				<Route path="/movie/:id" component={MovieCard} />
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
