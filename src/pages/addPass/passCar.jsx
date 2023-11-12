import './style.css';
import BtnText from '../../components/UI/btnText/btnText';
import BtnIcon from '../../components/UI/btnIcon/btnIcon';
import InputCar from '../../components/UI/inputCar/inputCar';
import InputName from '../../components/UI/inputName/inputName';
import InputTel from '../../components/UI/inputTel/inputTel'
import InputDate from '../../components/UI/inputDate/inputDate';
import { Person } from '../../utilits/icon/person';
import { Car } from '../../utilits/icon/car';
import { Arrow } from '../../utilits/icon/arrow';
import { Close } from '../../utilits/icon/close';
import { useNavigate } from 'react-router-dom';

export default function AddPassPage({isAutoPass, setIsAutoPass}) {
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
  const navigate = useNavigate()

  const handlePersonPass = () => {
    setIsAutoPass(false)
  }
  
  const handleCarPass = () => {
    setIsAutoPass(true)
  }
  console.log(isAutoPass);

  return (
    <main className='main'>
      <div className='pass'>
        <div className='pass__head'>
          <BtnIcon
          classes={[iconMedium, secondary]}
          icon={<Arrow/>}
          onClick={() => navigate('/selectionPass')}
          />
          <h2>Добавить пропуск</h2>
          <BtnIcon
          classes={[iconMedium, secondary]}
          icon={<Close/>}
          onClick={() => navigate('/')}
          />
        </div>
        <div className='pass__body'>
          <div className='type-wrapper'>
            <a href="#">
              <BtnText 
              classes={[btnTextMedium, white, width227]}
              icon={<Person/>}
              onClick={handlePersonPass}
              > Для пешехода
              </BtnText>
            </a>
            <a href="#">
              <BtnText 
              classes={[btnTextMedium, active, width227]}
              icon={<Car/>}
              onClick={handleCarPass}
              > Для автомобиля
              {/* onClick={() => {setIsAutoPass(true)}} */}
              </BtnText>
            </a>
          </div>
          <form className='form'>
            <p className='form__title'>Пропуск № 00001</p>
            {isAutoPass ? (<InputCar 
            classes={[]}
            colorIcon={colorInputIconDark}
            />) : (
              <InputName 
              classes={[]}
              colorIcon={colorInputIconDark}
              />
            )}
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
