import { useEffect, useState } from 'react';
import VideoList from '../VideoList';
import Loader from '../Loader/index';
import styles from './SearchVideoList.module.css';


// Filtrando video por categoria ou titul
function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText));
}


// Componente
function SearchVideoList({videos}){

    const [searchText, setSearchText ] = useState('');
    const foundVideos = filterVideos(videos, searchText); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [])

    return(
        <section className={styles.container}>
            <input 
                type="search"
                placeholder='Pesquisar...'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}   
            />

            { loading ? <Loader /> :  <VideoList videos={foundVideos} emptyHeading={`Sem vídeos sobre "${searchText}"`}/>
            }
        </section>
    );
}

export default SearchVideoList;