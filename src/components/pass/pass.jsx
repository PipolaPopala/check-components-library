import './style.css';
import BtnText from '../UI/btnText/btnText';
import BtnIcon from '../UI/btnIcon/btnIcon';
import { Person } from '../../utilits/icon/person';
import { Car } from '../../utilits/icon/car';
import { Arrow } from '../../utilits/icon/arrow';
import { Close } from '../../utilits/icon/close';

// const ghost = 'color-ghost'
const secondary = 'color-secondary'
// const active = 'color-active'
const white = 'color-active-in-dark'
const btnTextBig = 'btn-text-big'
const btnTextMedium = 'btn-text-medium'
const width227 = 'width-227'
const iconMedium = 'icon-medium'
const hidden = 'hidden'

export default function Pass() {
  return (
    <main className='main'>
      <div className='pass'>
        <div className='pass__head'>
          <BtnIcon
          classes={[hidden, iconMedium, secondary]}
          icon={<Arrow/>}
          />
          <h2>Добавить пропуск</h2>
          <BtnIcon
          classes={[iconMedium, secondary]}
          icon={<Close/>}
          />
        </div>
        <div className='pass__body'>
          <div className='type-wrapper'>
            <a href="#">
              <BtnText 
              classes={[btnTextMedium, white, width227]}
              icon={<Person/>}
              > Для пешехода
              </BtnText>
            </a>
            <a href="#">
              <BtnText 
              classes={[btnTextMedium, white, width227]}
              icon={<Car/>}
              > Для автомобиля
              </BtnText>
            </a>
          </div>
          <div className='template'>
            <p className='template__title'>Из шаблона</p>
            <div className='template__type'>
              <BtnText 
              classes={[btnTextBig, secondary]}
              > Курьер
              </BtnText>
              <BtnText 
              classes={[btnTextBig, secondary]}
              > Сотрудник
              </BtnText>
              <BtnText 
              classes={[btnTextBig, secondary]}
              > Клининг
              </BtnText>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
