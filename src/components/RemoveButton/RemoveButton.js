import styles from './RemoveButton.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/cardsRedux';


const RemoveButton = props => {

    const dispatch = useDispatch();
    const cardId = props.cardId;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(removeCard( cardId ));
    };

    return(<button onClick={handleSubmit} className={styles.button}>{props.children}</button>);
};

export default RemoveButton;