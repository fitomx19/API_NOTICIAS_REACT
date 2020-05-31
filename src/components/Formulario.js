import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'

const Formulario = ({ guardarCategoria}) => {

    //state del custom hook
    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'technology', label: 'Tecnologia' },


    ]

    //utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general',OPCIONES);


        //submit al form, pasar categorias al app.js
        const buscarNoticias = e =>{
            e.preventDefault();
            guardarCategoria(categoria);
        }
    return (  

        <div className={` ${styles.buscador} row `} >
            <div className="col s12 m8 offset-md">

        <form
            onSubmit={buscarNoticias}
        >
            <h2 className={styles.heading} >Encuentra noticias por categoria</h2>
            <SelectNoticias/>
            <div className="input-field col s12">
                <input 
                    type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2 `}
                    value="Buscar"    
                   />
            </div>
        </form>

            </div>
        </div>

    );
}
 
export default Formulario;