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

  /* HTML */
  return <div className="App">
    <h1>Frases de Friends</h1>
  </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
