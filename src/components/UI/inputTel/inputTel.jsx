import { Phone } from "../../../utilits/icon/phone";

import './style.css';

function InputTel({children, classes, colorIcon, name, ...props}) {
  classes = classes.join(' ');
  return (
    <div>
      <p className="input-title">{children}</p>
      <div className={"input-tel-wrapper " + classes}>
        <Phone color={colorIcon}/>
        <input className="input-tel" type="tel" name={name} id="" maxLength="16" placeholder="+7(___)___-__-__" {...props}/>
      </div>
    </div>
  );
}

export default InputTel;
