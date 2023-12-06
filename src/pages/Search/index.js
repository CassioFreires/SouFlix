import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Search.module.css';
import videos from '../../json/db.json';
import SearchVideoList from '../../components/SearchVideoList';
import ScrollToTopButton from '../../components/ScrollToTopButton';


function Search() {
    return(
        <div>
            <ScrollToTopButton />
            <Header />
            <Container>
                <section className={styles.search}>
                    <SearchVideoList  videos={videos}/>
                </section>
            </Container>
            <Footer />
        </div>
    );
}

export default Search;