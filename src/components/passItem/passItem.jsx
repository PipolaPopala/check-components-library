import './style.css';
import BtnText from '../UI/btnText/btnText';
import PassStatus from '../UI/passStatus/passStatus';
import { Person } from '../../utilits/icon/person';
import { Car } from '../../utilits/icon/car';
import { Option } from '../../utilits/icon/option';

export default function PassItem({ namePerson, nameCar, tel, date, status }) {
  const secondary = 'color-secondary'
  const btnTextMedium = 'btn-text-medium'

  return (
    <li className='pass-list__table-item' disabled={status === 'Не активен' ? true : false}>
      <div className='pass-list__table-item-icon'>{namePerson ? <Person /> : <Car />}</div>
      <p className='pass-list__table-item-name'>{namePerson || nameCar}</p>
      <p className='pass-list__table-item-tel'>{tel}</p>
      <p className='pass-list__table-item-date'>{date}</p>
      <PassStatus className='pass-list__table-item-status'>{status}</PassStatus>
      <BtnText
        classes={[btnTextMedium, secondary, 'pass-list__table-item-action']}
      > Пропустить
      </BtnText>
      <button className='btn btn-option pass-list__table-item-option' type="button"><Option /></button>
    </li>
  );
}
