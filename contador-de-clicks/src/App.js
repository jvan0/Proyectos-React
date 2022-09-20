
import './App.css';
import imgProyects from './imagenes/Aprendiendo-React-wb.png'
import Boton from './components/Boton'
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () =>{
    setNumClicks(numClicks +1)
  }
  const reiniciarContador = () =>{
    setNumClicks(0)
  }

  return (
    <div className='App'>
      <div className='freecode-logo-contenedor'>
        <img 
          className='freeCode-logo'
          src={imgProyects}
          alt='Logo de freeCode Camp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClicks={numClicks}
        />
        <Boton 
          texto='Click'
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
  </div>
  );
}

export default App;