import { Mail } from '../../../utilits/icon/mail';

import './style.css';

export default function InputEmail({classes, colorIcon, name, ...props}) {
  const forWrapper = classes.join(' ');
  return (
    <div>
      <div className={"input-name-wrapper " + forWrapper}>
        <Mail color={colorIcon}/>
        <input className="input-name" type="search" name={name} id="" placeholder="neonet.sergey@gmail.com" {...props}/>
      </div>
    </div>
  );
}
