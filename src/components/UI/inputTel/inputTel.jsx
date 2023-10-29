import { Phone } from "../../../utilits/icon/phone";

import './style.css';

function InputTel({classes, colorIcon, name, ...props}) {
  const forWrapper = classes.join(' ');
  return (
    <div>
      <div className={"input-tel-wrapper " + forWrapper}>
        <Phone color={colorIcon}/>
        <input className="input-tel" type="tel" name={name} id="" maxLength="16" placeholder="+7(___)___-__-__" {...props}/>
      </div>
    </div>
  );
}

export default InputTel;
