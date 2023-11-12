import './style.css';

export default function PassListHeader() {
  return (
    <div className="pass-list__table-header">
      <p className='pass-list__table-header-name'>Имя</p>
      <p className='pass-list__table-header-tel'>Телефон</p>
      <p className='pass-list__table-header-date'>Дата</p>
      <p className='pass-list__table-header-status'>Статус</p>
      <p className='pass-list__table-header-action'>Действие</p>
    </div>
  );
}
