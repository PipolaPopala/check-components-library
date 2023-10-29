import './style.css';
import BtnText from '../UI/btnText/btnText'
import { LogoText } from '../../utilits/icon/logoText';
import { Calendar } from '../../utilits/icon/calendar';
import { Ticket } from '../../utilits/icon/ticket';

const active = 'color-active'
const ghost = 'color-ghost'
const btnTextMedium = 'btn-text-medium'

export default function Header() {
  return (
    <header className='header'>
      <a href="#">
        <LogoText />
      </a>
      <nav className='nav'>
        <ul className='nav__list'>
          <li>
            <a href="#">
              <BtnText 
              classes={[btnTextMedium, active]}
              icon={<Ticket/>}
              > Пропуска
              </BtnText>
            </a>
          </li>
          <li>
            <a href="#">
              <BtnText 
              classes={[btnTextMedium, ghost]}
              icon={<Calendar/>}
              > События
              </BtnText>
            </a>
          </li>
        </ul>
      </nav>
      <a href="#" className='account'>
        <div className='account__photo'>
          <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div className='account__title'>
          <p className='account__name'>Гомер Симспсон</p>
          <p className='account__role'>Босс сервера</p>
        </div>
      </a>
    </header>
  );
}
