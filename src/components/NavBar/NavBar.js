import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.nav__content}>
          <span><Link to="/" className={styles.icon}><i className={' fa fa-tasks'}></i></Link></span>
          <ul className={styles.menu}>
            <li><NavLink className={({isActive}) => isActive ? styles.linkActive : styles.link} 
            to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles.linkActive : styles.link} 
            to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? styles.linkActive : styles.link} 
            to="/about">About</NavLink></li>
          </ul>
        </div>
      </Container>
    </nav>
    );
};

export default NavBar;