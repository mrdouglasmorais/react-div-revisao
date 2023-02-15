import Navbar from "../../components/Navbar"
import Loader from '../../components/Loader'
import { useState } from 'react'

const Home = () => {
  const [ isLoad, setIsLoad ] = useState(false);

  const hadleStateComponent = () => {
    setIsLoad(!isLoad)
  }

  return(
    <div>
      <Navbar />
      <h1>Home</h1>
      <p>Componente: </p>
      <Loader load={isLoad} />
      <button onClick={hadleStateComponent}>Mudar estado</button>
    </div>
  )
}

export default Home