import './style.css';
import BtnText from '../UI/btnText/btnText';
import BtnIcon from '../UI/btnIcon/btnIcon';
import InputName from '../UI/inputName/inputName';
import InputTel from '../UI/inputTel/inputTel'
import InputDate from '../UI/inputDate/inputDate';
import { Person } from '../../utilits/icon/person';
import { Car } from '../../utilits/icon/car';
import { Arrow } from '../../utilits/icon/arrow';
import { Close } from '../../utilits/icon/close';

const primary = 'color-primary'
// const ghost = 'color-ghost'
const secondary = 'color-secondary'
const active = 'color-active'
const white = 'color-active-in-dark'
const btnTextBig = 'btn-text-big'
const btnTextMedium = 'btn-text-medium'
const width227 = 'width-227'
const iconMedium = 'icon-medium'
// const hidden = 'hidden'
const colorInputIconDark = 'dark'

export default function Pass() {
  return (
    <main className='main'>
      <div className='pass'>
        <div className='pass__head'>
          <BtnIcon
          classes={[iconMedium, secondary]}
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
              classes={[btnTextMedium, active, width227]}
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
          <form className='form'>
            <p className='form__title'>Пропуск № 00001</p>
            <InputName 
            classes={[]}
            colorIcon={colorInputIconDark}
            />
            <InputTel 
            classes={[]}
            colorIcon={colorInputIconDark}
            />
            <InputDate 
            classes={[]}
            colorIcon={colorInputIconDark}
            />
            <BtnText
            classes={[btnTextBig, primary]}
            > Создать пропуск
            </BtnText>
          </form>
        </div>
      </div>
    </main>
  );
}
