import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getAllFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {

    const favorites = useSelector(state => getAllFavoriteCards(state));

    if(favorites.length === 0) 
    return (
        <div className={styles.favorite}>
          <PageTitle>Favorite</PageTitle>
          <article className={styles.column}>
          <p>No cards...</p>
          </article>
        </div>);
    return(
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
            <ul className={styles.cards}>
              {favorites.map(card => <Card key={card.id} {...card} />)}
            </ul>
            </article>
        </div>
    );
};

export default Favorite;