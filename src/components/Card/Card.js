import styles from './Card.module.scss';
import LikeButton from '../LikeButton/LikeButton';

const Card = props => {
  return(<li className={styles.card}>{props.title}
    <LikeButton cardId={props.id} isFavorite={props.isFavorite}><i className={' fa fa-star-o'}></i></LikeButton></li>);
};

export default Card;