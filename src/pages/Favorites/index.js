import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import VideoList from '../../components/VideoList';
import { useFavoriteContext } from '../../contexts/Favorites';
import styles from './Favorites.module.css';
import ScrollToTopButton from '../../components/ScrollToTopButton';
function Favorites(){

    const {favorite} = useFavoriteContext();

    return (
        <div>
            <ScrollToTopButton />
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                        {
                            <VideoList videos={favorite} emptyHeading='Sem favoritos!'/>
                        }
                </section>
            </Container>
            <Footer />
        </div>
    );
}

export default Favorites;