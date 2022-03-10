import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
    return(
        <div className={styles.hero}>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.text}>Lorem ipsum</p>
        </div>
    )
};

export default Favorite;