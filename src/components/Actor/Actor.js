import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Actor.module.css';
import { FaImage } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';

const Actor = ({ actor }) => {
	const { darkTheme } = useContext(ThemeContext);

	return (
		<>
			<Link
				to={`/actor/${actor.id}`}
				className={darkTheme ? `${classes.link} ${classes.dark}` : `${classes.link}`}
			>
				<div className={classes.actor} key={actor.id}>
					{actor.profile_path ? (
						<img
							className={classes.actor_headshot}
							src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
							alt="#"
							loading="lazy"
						/>
					) : (
						<div className={classes.actor_no_headshot}>
							<FaImage />
						</div>
					)}
					<div className={classes.actor_info}>
						<h1 className={classes.actor_name}>{actor.name}</h1>
						<h2 className={classes.actor_character}>{actor.character}</h2>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Actor;
