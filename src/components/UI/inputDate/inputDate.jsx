import { Calendar } from '../../../utilits/icon/calendar';

import './style.css';

export default function InputDate({classes, colorIcon, name, ...props}) {
  const forWrapper = classes.join(' ');
  return (
    <div className='form-date'>
      <div className={"input-date-wrapper " + forWrapper}>
        <Calendar color={colorIcon}/>
        <input className="input-date" type="date" name={name} id="" placeholder="" {...props}/>
      </div>
      <div className={"input-date-wrapper " + forWrapper}>
        <Calendar color={colorIcon}/>
        <input className="input-date" type="date" name={name} id="" placeholder="" {...props}/>
      </div>
    </div>
  );
}
