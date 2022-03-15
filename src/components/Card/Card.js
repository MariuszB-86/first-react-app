import styles from './Card.module.scss';
import LikeButton from '../LikeButton/LikeButton';
import RemoveButton from '../RemoveButton/RemoveButton';

const Card = props => {
  return(<li className={styles.card}>{props.title}
    <span><LikeButton cardId={props.id} isFavorite={props.isFavorite}><i className={' fa fa-star-o'}></i></LikeButton>
    <RemoveButton cardId={props.id}><i className={'fa fa-trash'}></i></RemoveButton></span></li>);
};

export default Card;