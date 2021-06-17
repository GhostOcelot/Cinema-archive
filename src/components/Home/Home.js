import Genres from '../Genres/Genres';
import MovieList from '../MovieList/MovieList';
import Searchbar from '../Searchbar/Searchbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Home = () => {
	return (
		<>
			<Searchbar />
			<LanguageSelector />
			<Genres />
			<MovieList />
			<ScrollToTop />
			<Footer />
		</>
	);
};

export default Home;
