import styles from './style.module.css';
import BtnText from '../UI/btnText/btnText';
import BtnIcon from '../UI/btnIcon/btnIcon';
import InputName from '../UI/inputName/inputName';
import InputTel from '../UI/inputTel/inputTel'
import InputDate from '../UI/inputDate/inputDate';
import { Person } from '../../utilits/icon/person';
import { Car } from '../../utilits/icon/car';
import { Arrow } from '../../utilits/icon/arrow';
import { Close } from '../../utilits/icon/close';

export default function Pass() {
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

  return (
    <main className={styles.main}>
      <div className={styles.pass}>
        <div className={styles.passHead}>
          <BtnIcon
            classes={[iconMedium, secondary]}
            icon={<Arrow />}
          />
          <h2>Добавить пропуск</h2>
          <BtnIcon
            classes={[iconMedium, secondary]}
            icon={<Close />}
          />
        </div>
        <div className={styles.passBody}>
          <div className={styles.typeWrapper}>
            <a href="#">
              <BtnText
                classes={[btnTextMedium, active, width227]}
                icon={<Person />}
              > Для пешехода
              </BtnText>
            </a>
            <a href="#">
              <BtnText
                classes={[btnTextMedium, white, width227]}
                icon={<Car />}
              > Для автомобиля
              </BtnText>
            </a>
          </div>
          <form className={styles.form}>
            <p className={styles.formTitle}>Пропуск № 00001</p>
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
