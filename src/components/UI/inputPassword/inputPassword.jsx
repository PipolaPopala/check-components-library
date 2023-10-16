import { LockKey } from "../../../utilits/icon/lockKey";

import './style.css';

function InputPassword({children, colorIcon, name, ...props}) {
  return (
    <div>
      <p className="input-title">{children}</p>
      <div className="input-password-wrapper">
        <LockKey color={colorIcon}/>
        <input className="input-password" type="password" name={name} id="" placeholder="Empty" {...props}/>
      </div>
    </div>
  );
}

export default InputPassword;
