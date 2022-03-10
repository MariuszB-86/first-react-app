import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.nav__content}>
          <span><a href="/" className={styles.icon}><i className={' fa fa-tasks'}></i></a></span>
          <ul className={styles.menu}>
            <li><a href="/">Home</a></li>
            <li><a href="/favorite">Favorite</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </Container>
    </nav>
    )
};

export default NavBar;