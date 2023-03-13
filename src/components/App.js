/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';
import data from '../data/data.json'
import { useState } from 'react';
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [quotes, setQuotes] = useState(data);
  const [searchQuote, SetSearchQuote] = useState('');

  /* EFECTOS (día 5) */

  /* FUNCIONES HANDLER */
  const handleClickSearch = (ev) => {
    ev.preventDefault();
    
  }
  const handleInputSearch = (ev) => {
    SetSearchQuote(ev.currentTarget.value);
  }

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const renderQuotes = () => {
    return quotes
      .filter((eachQuote) =>
      eachQuote.quote.toLocaleLowerCase().includes(searchQuote.toLocaleLowerCase()))
      .map((oneQuote, index) => {
      return <li className='quote-list' key={index}>
        <p>{oneQuote.quote}</p>
        <span>-</span>
        <p className='quote-character'>{oneQuote.character}</p>
      </li>
    }
    )
  }

  /* HTML */
  return <div className="App">
    <h1>Frases de Friends</h1>
    <section>
      <form>
        <label htmlFor='quote'>Filtrar por frase:
          <input
            className='search-quote'
            type='quote'
            name='quote'
            placeholder='Escribe una palabra o texto'
            onChange={handleInputSearch}
            value={searchQuote}>
          </input>
        </label>
        <button onClick={handleClickSearch}>Buscar</button>
      </form>
    </section>
    <section>
      <ul>
        {renderQuotes()}
      </ul>
    </section>
  </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
