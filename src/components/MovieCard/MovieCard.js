import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import classes from './MovieCard.module.css';
import ActorsList from '../ActorsList/ActorsList';
import MovieInfo from '../MovieInfo/MovieInfo';
import Footer from '../Footer/Footer';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const MovieCard = () => {
	const [movie, setMovie] = useState();
	const [credits, setCredits] = useState();
	const params = useParams();
	const { language } = useContext(LanguageContext);
	const { t } = useTranslation();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
		)
			.then(res => res.json())
			.then(data => setMovie(data));
	}, [params, language]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
		)
			.then(res => res.json())
			.then(data => setCredits(data));
	}, [params, language]);

	return (
		<>
			{movie ? (
				<>
					<MovieInfo movie={movie} />
					<ActorsList credits={credits} />
					<Footer />
				</>
			) : (
				<h1 className={classes.loading}> {t('loading')} </h1>
			)}
		</>
	);
};

export default MovieCard;
