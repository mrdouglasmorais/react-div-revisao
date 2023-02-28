import Navbar from "../../components/Navbar"
import Loader from '../../components/Loader'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Home = () => {
  const [ isLoad, setIsLoad ] = useState(false);
  const [ data, setData ] = useState([]);

  useEffect( () => {
    setIsLoad(true)
    axios.get('https://rickandmortyapi.com/api/character')
    .then(
      res => {
        setData(res.data.results)
      }
    )
    .catch( e => console.log("Erro", e))
    .finally(() => setIsLoad(false))
  }, [])

  return(
    <div>
      <Navbar />
      <h1>Home</h1>
      <p>Componente: </p>
      {data.map( (el, index) => (
        <div key={index}>
          <h6>{el.name}</h6>
          <img src={el.image} alt={el.name}/>
          <p>{el.gender}</p>
          <p>{el.origin?.name}</p>
          <p>Episódios {el.episode.length}</p>
        </div>
      ))}
      <Loader load={isLoad} />
    </div>
  )
}

export default Home