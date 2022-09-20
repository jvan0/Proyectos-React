import React from 'react'
import imgProyects from '../imagenes/Aprendiendo-React-wb.png'

export default function Logo() {
  return (
    <div className='freeCode-logo-contenedor'>
      <img 
        className='freeCode-logo'
        src={ imgProyects }
        alt='Imagen Logo' />
    </div>
  )
}
