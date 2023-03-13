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
  const [searchCharacter, setSearchCharacter] = useState('');
  const [searchQuote, setSearchQuote] = useState('');

  /* EFECTOS (día 5) */

  /* FUNCIONES HANDLER */
  const handleInputSearch = (ev) => {
    setSearchQuote(ev.currentTarget.value);
  }
  const handleCharacterSearch = (ev) => {
    setSearchCharacter(ev.target.value);
  }

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const renderQuotes = () => {
    return quotes
      .filter((eachQuote) =>
        eachQuote.quote.toLocaleLowerCase().includes(searchQuote.toLocaleLowerCase()))
      .filter((eachQuote) =>
        eachQuote.character.toLowerCase().includes(searchCharacter.toLowerCase())
      )
      .map((oneQuote, index) => {
        return <li key={index} className='quote-list'>
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
        <label>Filtrar por personaje:
          <select value={searchCharacter} name='character' id='character' onChange={handleCharacterSearch}>
            <option disabled selected value=''>
              Personajes
            </option>
            <option value='Chandler'>
            Chandler
            </option>
            <option value='Joey'>
            Joey
            </option>
            <option value='Phoebe'>
            Phoebe
            </option>
            <option value='Rachel'>
            Rachel
            </option>
            <option value='Ross'>
            Ross
            </option>
          </select>
        </label>
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
