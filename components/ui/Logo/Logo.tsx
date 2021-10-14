import s from './Logo.module.css'

const Logo = ({ className = '', ...props }) => (
  <img src="/logo.png" alt="logo" className={s.logo}></img>
)

export default Logo
