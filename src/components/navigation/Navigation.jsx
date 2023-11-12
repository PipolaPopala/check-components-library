// import { NavLink } from 'react-router-dom'
import styles from './style.module.css';
import BtnText from '../../components/UI/btnText/btnText'
import { Calendar } from '../../utilits/icon/calendar'
import { Ticket } from '../../utilits/icon/ticket'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const active = 'color-active'
  const ghost = 'color-ghost'
  const btnTextMedium = 'btn-text-medium'

  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink to='/'>
            <BtnText classes={[btnTextMedium, active]} icon={<Ticket />}>
              Пропуска
            </BtnText>
          </NavLink>
        </li>
        <li>
          <NavLink to='/events'>
            <BtnText classes={[btnTextMedium, ghost]} icon={<Calendar />}>
              События
            </BtnText>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
