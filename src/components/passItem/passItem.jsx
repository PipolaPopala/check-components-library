import styles from './style.module.css';
import BtnText from '../UI/btnText/btnText';
import PassStatus from '../UI/passStatus/passStatus';
import { Person } from '../../utilits/icon/person';
import { Car } from '../../utilits/icon/car';
import { Option } from '../../utilits/icon/option';

export default function PassItem({ namePerson, nameCar, tel, date, status }) {
  const secondary = 'color-secondary'
  const btnTextMedium = 'btn-text-medium'

  return (
    <li className={styles.tableItem} disabled={status === 'Не активен' ? true : false}>
      <div className={styles.tableItemIcon}>{namePerson ? <Person /> : <Car />}</div>
      <p className={styles.tableItemName}>{namePerson || nameCar}</p>
      <p className={styles.tableItemTel}>{tel}</p>
      <p className={styles.tableItemDate}>{date}</p>
      <PassStatus className={styles.tableItemStatus}>{status}</PassStatus>
      <BtnText
        classes={[btnTextMedium, secondary, styles.tableItemAction]}
      > Пропустить
      </BtnText>
      <button className={[styles.btnOption, styles.tableItemOption].join(' ')} type="button"><Option /></button>
    </li>
  );
}
