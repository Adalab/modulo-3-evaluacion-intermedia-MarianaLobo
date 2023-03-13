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

  /* EFECTOS (día 5) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const renderQuotes = () => {
    return quotes.map((oneQuote, index) => {
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
      <ul>
        {renderQuotes()}
      </ul>
    </section>
  </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
