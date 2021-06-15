import Genres from '../Genres/Genres';
import MovieList from '../MovieList/MovieList';
import Searchbar from '../Searchbar/Searchbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Home = () => {
	return (
		<>
			<Genres />
			<Searchbar />
			<MovieList />
			<ScrollToTop />
			<Footer />
		</>
	);
};

export default Home;
