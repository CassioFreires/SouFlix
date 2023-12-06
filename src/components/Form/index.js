import styles from './Form.module.css';
import { categories } from '../Category';
import { useState } from 'react';

function Form(){
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');

    const [videos, setVideos] = useState([]);
    const [errors, setErrors] = useState('');

    function validateUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;
        if (regex.test(url) || url.length < 43) {
            setErrors('ERRO - URL inválida');
            return;
        } else {
            return url.substring(32, 43);
        }
    }

    function onsave(e) {
        e.preventDefault();
        // validate cateogry
        if (!category || category === '-') {
            console.log('Escolha uma categoria');
            setErrors('ERRO - Escolha uma categoria');
            return
        } else {
            setErrors('');
        }

        // validate category e url
        const urlVideo = validateUrl(url)
        if (urlVideo && category) {

            const newVideos = {
                url,
                category
            }
            
            setVideos([...videos, newVideos]);
            localStorage.setItem('videos', JSON.stringify([...videos, newVideos]));
            // limpar form
            setUrl('');
            setCategory('');
        } else {
            setErrors('ERRO - URL inválida!')
        }
    }

    return(
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onsave}>
                <div>
                    <label> URL do vídeo</label>
                    <input 
                        type="text"
                        placeholder='Digite a URL do vídeo'
                        value={url}
                        onChange={ (e) => setUrl(e.target.value)}
                        maxLength={43}
                        minLength={43}
                        />    
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                        <option value="-">Selecione uma categoria</option>
                        {categories.map((item, index) => <option value={item} key={index}>{item}</option>)}
                    </select>
                </div>  
                <div>
                    {errors}
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>  
            </form>
        </section>
    )
}

export default Form;