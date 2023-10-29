import { Person } from '../../../utilits/icon/person';

import './style.css';

export default function InputName({classes, colorIcon, name, ...props}) {
  const forWrapper = classes.join(' ');
  return (
    <div>
      <div className={"input-name-wrapper " + forWrapper}>
        <Person color={colorIcon}/>
        <input className="input-name" type="search" name={name} id="" placeholder="ФИО" {...props}/>
      </div>
    </div>
  );
}
