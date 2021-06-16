import { FaImage } from 'react-icons/fa';
import classes from './Actors.module.css';

const Actors = ({ credits }) => {
	return (
		<div className={classes.actors_container}>
			{credits &&
				credits.cast.map(actor => {
					return (
						<div className={classes.actor} key={actor.id}>
							{actor.profile_path ? (
								<img
									className={classes.actor_headshot}
									src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
									alt="#"
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
					);
				})}
		</div>
	);
};

export default Actors;
