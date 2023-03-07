import LogoTipo from '../../assets/image/rickandmorty.png'
import styles from './style.module.css'
import { Link } from 'react-router-dom'

const  Navbar = () => {
 return(
 <div className={styles.nav}>
  <div className={styles.navContent}>
    <img src={LogoTipo} alt='Logo Rick and Morty' width="350px" height="auto"/>
    <div className={styles.linkContent}>
      <Link className={styles.mainButton} to="/">Home</Link>
      <Link className={styles.mainButton} to="/contato">Contato</Link>
    </div>
  </div>
 </div>
 )
}

export default Navbar