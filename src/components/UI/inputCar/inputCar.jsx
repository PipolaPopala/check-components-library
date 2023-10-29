import { Car } from '../../../utilits/icon/car';
import { Ticket } from '../../../utilits/icon/ticket';

import './style.css';

export default function InputCar({classes, colorIcon, name, ...props}) {
  const forWrapper = classes.join(' ');
  return (
    <div className='form-car'>
      <div className={"input-car-wrapper " + forWrapper}>
        <Car color={colorIcon}/>
        <input className="input-car" type="search" name={name} id="" placeholder="Марка машины" {...props}/>
      </div>
      <div className={"input-car-wrapper " + forWrapper}>
        <Ticket color={colorIcon}/>
        <input className="input-car" type="search" name={name} id="" placeholder="Гос номер" {...props}/>
      </div>
    </div>
  );
}
