import styles from './style.module.css';
import BtnText from '../../components/UI/btnText/btnText';
import BtnIcon from '../../components/UI/btnIcon/btnIcon';
import { Person } from '../../utilits/icon/person';
import { Car } from '../../utilits/icon/car';
import { Arrow } from '../../utilits/icon/arrow';
import { Close } from '../../utilits/icon/close';
import { useNavigate } from 'react-router-dom';

export default function SelectionPassPage({ setIsAutoPass }) {
  // const ghost = 'color-ghost'
  const secondary = 'color-secondary'
  // const active = 'color-active'
  const white = 'color-active-in-dark'
  const btnTextBig = 'btn-text-big'
  const btnTextMedium = 'btn-text-medium'
  const width227 = 'width-227'
  const iconMedium = 'icon-medium'
  const hidden = 'hidden'
  const navigate = useNavigate()

  const handlePersonPass = () => {
    setIsAutoPass(false)
    navigate('/addPass')
  }

  const handleCarPass = () => {
    setIsAutoPass(true)
    navigate('/addPass')
  }

  return (
    <main className={styles.main}>
      <div className={styles.pass}>
        <div className={styles.passHead}>
          <BtnIcon
            classes={[hidden, iconMedium, secondary]}
            icon={<Arrow />}
          />
          <h2>Добавить пропуск</h2>
          <BtnIcon
            classes={[iconMedium, secondary]}
            icon={<Close />}
            onClick={() => navigate('/')}
          />
        </div>
        <div className={styles.passBody}>
          <div className={styles.typeWrapper}>
            <a href="#">
              <BtnText
                classes={[btnTextMedium, white, width227]}
                icon={<Person />}
                onClick={handlePersonPass}
              > Для пешехода
              </BtnText>
            </a>
            <a href="#">
              <BtnText
                classes={[btnTextMedium, white, width227]}
                icon={<Car />}
                onClick={handleCarPass}
              > Для автомобиля
              </BtnText>
            </a>
          </div>
          <div className={styles.template}>
            <p className={styles.templateTitle}>Из шаблона</p>
            <div className={styles.templateType}>
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
