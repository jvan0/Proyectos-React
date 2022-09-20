import React from 'react'
import imagenLogo from '../imagenes/Aprendiendo-React-wb.png'
import '../stylesheets/Logo.css'

export default function Logo() {
  return (
    <div className='contenedor-logo'>
        <img 
        className='img-logo'
        src={imagenLogo} 
        alt='Imagen Logo'    
        />
    </div>
  )
}
