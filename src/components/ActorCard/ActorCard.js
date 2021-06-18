import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import classes from './ActorCard.module.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const ActorCard = () => {
	const [actor, setActor] = useState();
	const { language } = useContext(LanguageContext);
	const params = useParams();
	const { t } = useTranslation();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
		)
			.then(res => res.json())
			.then(data => setActor(data));
	}, [params.id, language]);

	return (
		<>
			{actor ? (
				<div className={classes.actor_container}>
					<h1 className={classes.actor_name}>{actor.name}</h1>
					<p className={classes.actor_bio}>{actor.biography ? actor.biography : t('noBio')}</p>

					<Link to="/" className={classes.homepage_link}>
						{t('backToBrowser')}
					</Link>
				</div>
			) : (
				<h1>{t('loading')}</h1>
			)}
		</>
	);
};

export default ActorCard;
