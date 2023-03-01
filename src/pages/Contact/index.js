import Navbar from '../../components/Navbar'

import axios from 'axios'

import { useState } from 'react'

const Contact = () => {
  const [ data, setData ] = useState({})
  const submitFormData = (e) => {
    e.preventDefault()
    axios.post('https://webhook.site/cab6161f-7afb-4276-92c2-477efbc87819', data)
      .then( res => {
        alert(res.status)
      }).catch( () => alert('Ops, algo deu errado!'))
  }

  return(
    <div>
      <Navbar />
      <h1>Contato</h1>
      <form onSubmit={submitFormData}>
        <input 
          type='text' 
          placeholder='Nome'
          onChange={ e => setData({...data, nome: e.target.value})}
        />
        <input 
          type='text' 
          placeholder='Email'
          onChange={ e => setData({...data, email: e.target.value})}
        />
        <input 
          type='text' 
          placeholder='Telefone'
          onChange={ e => setData({...data, telefone: e.target.value})}
        />
        <input 
          type='submit' 
          value='Cadastrar'
        />
      </form>
    </div>
  )
}

export default Contact