import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './PageNotFound.module.css'
import logoError404 from './erro-404.png'

function PageNotFound(){
    return(
        <div>
            <Header/>
            <section className={styles.container}>
                <h2>Ops! Conteúdo não localizado</h2>
                <div>
                    <img src={logoError404} alt="Logo de Página Não localizada" />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default PageNotFound;