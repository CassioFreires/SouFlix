import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <Link to={'/'}><span>Streaming </span></Link>
            <nav>
                <Link to={'/'}><span>Home</span></Link>
                <Link to={'/search'}><span>Pesquisar</span></Link>
                <Link to={'/favorites'}><span>Favoritos</span></Link>
            </nav>
        </header>
    )
}

export default Header;