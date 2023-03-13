/* SECCIÓN DE IMPORT */
import { useState, useEffect } from 'react';
import '../styles/App.scss';


/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [quotes, setQuotes] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState('');
  const [searchQuote, setSearchQuote] = useState('');
  const [newQuote, setNewQuote] = useState({
    quote: '',
    character: ''
  });


  /* FUNCIONES HANDLER */

  //funcion manejadora de los inputs search
  const handleInputSearch = (ev) => {
    setSearchQuote(ev.currentTarget.value);
  }
  const handleCharacterSearch = (ev) => {
    setSearchCharacter(ev.target.value);
  }

  // funcion manejadora eventos inputs
  const handleInputForm = (ev) => {
    //usamos ev.target.id porque el id de los imputs es igual a las claves del objeto
    setNewQuote({...newQuote, [ev.target.id] : ev.target.value})
  }

  //funcion añadir nuevo contacto boton añadir
  const handleAddNewQuote = (ev) => {
    ev.preventDefault();
    setQuotes([...quotes, newQuote]);
    //para vaciar el formulario
    setNewQuote({ quote: '', character: '' });
  }
//Petición de los datos al servidor
  useEffect(() => {
    fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
    })
  }, [] );

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
    <section className='Search-section'>
      <form>
        <label htmlFor='quote'>Filtrar por frase:
          <input
            className='search-quote'
            type='quote'
            name='quote'
            placeholder='Escribe una palabra o texto'
            onChange={handleInputSearch}
            value={searchQuote}
          />
        </label>
        <label>Filtrar por personaje:
          <select value={searchCharacter} name='character' id='character' onChange={handleCharacterSearch}>
            <option disabled value=''>
              Todos
            </option>
            <option value='Chandler'>
            Chandler
            </option>
            <option value='Joey'>
            Joey
            </option>
            <option value='Phoebe'>
            Monica
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
    <section className='quotes-section'>
      <ul>
        {renderQuotes()}
      </ul>
    </section>
    <section className='new-quote-section'>
      <form>
        <h2>Añade una nueva frase</h2>
        <input
            className='new-quote-input'
            type='text'
            name='quote'
            id='quote'
            placeholder='Nueva frase'
            onChange={handleInputForm}
            value= {newQuote.quote}
        />
         <input
            className='new-character-input'
            type='text'
            name='character'
            id='character'
            placeholder='Nombre del personaje'
            onChange={handleInputForm}
            value= {newQuote.character}
          />
        <input className="new-quote-btn" type="submit" value="Añadir" onClick={handleAddNewQuote}/>
      </form>
    </section>
  </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
