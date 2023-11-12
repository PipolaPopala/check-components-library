// import { NavLink } from 'react-router-dom'
import styles from './style.module.css'
import Navigation from '../../components/navigation/Navigation'
import Personal from '../../components/personal/Personal'
import { LogoText } from '../../utilits/icon/logoText'
import { Link, Outlet } from 'react-router-dom'

export default function PageLayout() {
  return (
    <>
      <header className={styles.header}>
        <Link to='/'>
          <LogoText />
        </Link>
        <Navigation />
        <Personal />
      </header>
      <Outlet />
    </>
  )
}
