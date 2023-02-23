import React, { useState } from 'react'
import '@styles/Form.scss'

const FormContacto = () => {
  const [Nombre, setNombre] = useState('')
  const [Apellido, setApellido] = useState('')
  const [Email, setEmail] = useState('')
  const [Telefono, setTelefono] = useState(0)

  const handleForm = (evento) => {
    evento.preventDefault() // Evita que se vuelva a renderizar la pagina - SPA

    // Obtengo los valores del formulario
    const nombre = evento.target[0].value
    const apellido = evento.target[1].value
    const email = evento.target[2].value
    const telefono = evento.target[3].value

    if (nombre === '' || apellido === '' || email === '' || telefono === '') {
      alert('Por favor, rellene todos los campos')
    } else {
      alert('Todo OK')
      setNombre(Nombre)
      setApellido(Apellido)
      setEmail(Email)
      setTelefono(Telefono)
    }
  }

  return (
    <div className='General'>
      <form className='Form' onSubmit={handleForm}>
        <div className='Inputs'>
          <label htmlFor=''>Nombre</label>
          <input id='nombreForm' name='Nombre' placeholder='Nombre' />
        </div>

        <br />
        <div className='Inputs'>
          <label htmlFor=''>Apellido</label>
          <input id='apellidoForm' name='Apellido' placeholder='Apellido' />
        </div>

        <br />

        <div className='Inputs'>
          <label htmlFor=''>Email</label>
          <input id='emailForm' name='Email' type='email' placeholder='Email' />
        </div>

        <br />
        <div className='Inputs'>
          <label htmlFor=''>Teléfono</label>
          <input id='telefonoForm' name='Teléfono' type='number' placeholder='Teléfono' />
        </div>

        <br />

        <button className='Confirmar' type='submit'>
          Confirmar
        </button>
      </form>
    </div>
  )
}
export default FormContacto
