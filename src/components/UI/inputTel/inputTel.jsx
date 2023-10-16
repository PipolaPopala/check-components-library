import { Phone } from "../../../utilits/icon/phone";

import './style.css';

function InputTel({children, colorIcon, name, ...props}) {
  return (
    <div>
      <p className="input-title">{children}</p>
      <div className="input-tel-wrapper">
        <Phone color={colorIcon}/>
        <input className="input-tel" type="tel" name={name} id="" placeholder="(123) 456 78 90" {...props}/>
      </div>
    </div>
  );
}

export default InputTel;
