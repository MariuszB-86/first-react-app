import styles from './LikeButton.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';


const LikeButton = props => {

    const dispatch = useDispatch();
    const cardId = props.cardId;
    const isFavorite = props.isFavorite;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite( cardId ));
        
    };

    return(<button onClick={handleSubmit} className= {clsx(styles.button, isFavorite && styles.active)}>{props.children}</button>);
};

export default LikeButton;