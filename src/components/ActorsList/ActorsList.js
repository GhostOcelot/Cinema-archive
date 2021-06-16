import Actor from '../Actor/Actor';
import classes from './ActorsList.module.css';

const Actors = ({ credits }) => {
	return (
		<div className={classes.actors_container}>
			{credits &&
				credits.cast.map(actor => {
					return <Actor actor={actor} key={actor.id} />;
				})}
		</div>
	);
};

export default Actors;
