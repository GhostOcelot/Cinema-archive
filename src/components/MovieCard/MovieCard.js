import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import classes from './MovieCard.module.css';
import ActorsList from '../ActorsList/ActorsList';
import MovieInfo from '../MovieInfo/MovieInfo';
import Footer from '../Footer/Footer';
import { LanguageContext } from '../../contexts/LanguageContext';

const MovieCard = () => {
	const [movie, setMovie] = useState();
	const [credits, setCredits] = useState();
	const params = useParams();
	const { language } = useContext(LanguageContext);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
		)
			.then(res => res.json())
			.then(data => setMovie(data));
	}, [params]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
		)
			.then(res => res.json())
			.then(data => setCredits(data));
	}, [params]);

	return (
		<>
			{movie ? (
				<>
					<MovieInfo movie={movie} />
					<ActorsList credits={credits} />
					<Footer />
				</>
			) : (
				<h1 className={classes.loading}>Loading...</h1>
			)}
		</>
	);
};

export default MovieCard;
