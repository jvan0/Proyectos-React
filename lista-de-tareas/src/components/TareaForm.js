import React,{ useState } from 'react'
import '../stylesheets/TareaForm.css'
import { v4 as uuidv4 } from 'uuid'

export default function TareaForm(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value)
  }

  const manejarEnvio = e =>{
    e.preventDefault()

    const tareaNueva = {
      id: uuidv4(),
      texto:input,
      completada: false,
    }

    props.onSubmit(tareaNueva)
  
  }

  return (
    <form 
    className='tarea-form'
    onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Crear nueva tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar tarea
      </button>
    </form>
  )
}
