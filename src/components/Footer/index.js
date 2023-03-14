import style from './style.module.css'

const Footer = ({footerText}) => {
  return(
    <>
      <footer className={style.footerbg}>
        <p>{footerText}</p>
      </footer>
    </>
  )
}

export default Footer