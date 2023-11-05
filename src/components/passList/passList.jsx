import './style.css';
import BtnText from '../UI/btnText/btnText';
import CheckBox from '../UI/checkBox/checkBox';
import PassItem from '../passItem/passItem';
import { Plus } from '../../utilits/icon/plus';

export default function PassList() {
  const primary = 'color-primary'
  const btnTextBig = 'btn-text-big'

  const arrPasses = [
    {
      number: '00001',
      namePerson: null,
      nameCar: 'A345BC TOYOTA',
      tel: '+7 (962) 707 4656',
      date: '30 Авг 18:00 - 31 Авг 20:00',
      status: 'Активен',
    },
    {
      number: '00002',
      namePerson: 'Барт Симпсон',
      nameCar: null,
      tel: '+7 (777) 777 7777',
      date: '1 Янв 00:00 - 30 Дек 24:00',
      status: 'Активен',
    },
    {
      number: '00003',
      namePerson: 'Клоун Расти',
      nameCar: null,
      tel: '+7 (969) 696 6969',
      date: '31 Окт 12:00 - 1 Ноя 12:00',
      status: 'Отклонён',
    },
    {
      number: '00004',
      namePerson: null,
      nameCar: 'А007ГТ PORSCHE',
      tel: '+7 (007) 707 7007',
      date: '30 Авг 18:00 - 31 Авг 20:00',
      status: 'Не активен',
    },
    {
      number: '00005',
      namePerson: 'Мардж Симпсон',
      nameCar: null,
      tel: '+7 (210) 543 9876',
      date: '1 Янв 00:00 - 30 Дек 24:00',
      status: 'Активен',
    },
  ]

  return (
    <main className='main'>
      <h2 className='pass-list__title'>Пропуска</h2>
      <div className='pass-list__add-button'>
        <BtnText
          classes={[btnTextBig, primary]}
          icon={<Plus />}
        > Создать пропуск
        </BtnText>
      </div>
      <ul className='pass-list__table'>

        <li className="pass-list__table-header">
          <CheckBox name={'pass-list'} />
          <p className='pass-list__table-header-number'>Номер</p>
          <p className='pass-list__table-header-name'>Имя</p>
          <p className='pass-list__table-header-tel'>Телефон</p>
          <p className='pass-list__table-header-date'>Дата</p>
          <p className='pass-list__table-header-status'>Статус</p>
          <p className='pass-list__table-header-action'>Действие</p>
        </li>

        {arrPasses.map((item) => {
          return (
            <PassItem
              key={item.number}
              number={item.number}
              namePerson={item.namePerson}
              nameCar={item.nameCar}
              tel={item.tel}
              date={item.date}
              status={item.status}
            />)
        })}

      </ul>
    </main>
  );
}
