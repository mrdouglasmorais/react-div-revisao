import RMLoader from '../../assets/gif/rick-and-morty-rick.gif'

const Loader = ({load}) => {

  return(
    <div>
      { load && (<img src={RMLoader} alt="Carregando" />)}
    </div>
  )
}

export default Loader