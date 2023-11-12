import './style.css'
import PassItem from '../../components/passItem/passItem'
import PassListHeader from '../../components/passListHeader/passListHeader'
import BtnText from '../../components/UI/btnText/btnText'
import { Plus } from '../../utilits/icon/plus'
import { useNavigate } from 'react-router-dom'
 
export default function MainPage() {
  const primary = 'color-primary'
  const btnTextBig = 'btn-text-big'
  const navigate = useNavigate()
  const handleCheck = () => {
    navigate('/selectionPass')
  }

  const arrPasses = [
    {
      namePerson: null,
      nameCar: 'A345BC TOYOTA',
      tel: '+7 (962) 707 4656',
      date: '30 Авг 18:00 - 31 Авг 20:00',
      status: 'Активен',
    },
    {
      namePerson: 'Барт Симпсон',
      nameCar: null,
      tel: '+7 (777) 777 7777',
      date: '1 Янв 00:00 - 30 Дек 24:00',
      status: 'Активен',
    },
    {
      namePerson: 'Клоун Расти',
      nameCar: null,
      tel: '+7 (969) 696 6969',
      date: '31 Окт 12:00 - 1 Ноя 12:00',
      status: 'Отклонён',
    },
    {
      namePerson: null,
      nameCar: 'А007ГТ PORSCHE',
      tel: '+7 (007) 707 7007',
      date: '30 Авг 18:00 - 31 Авг 20:00',
      status: 'Не активен',
    },
    {
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
          onClick={handleCheck}
        > Создать пропуск
        </BtnText>
      </div>
      <PassListHeader />
      <ul className='pass-list__table'>
        {arrPasses.map((item) => {
          return (
            <PassItem
              key={Math.floor(Math.random() * 10000) + 1}
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

