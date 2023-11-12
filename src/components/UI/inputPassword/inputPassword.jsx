import { LockKey } from "../../../utilits/icon/lockKey";
import { Eye } from "../../../utilits/icon/eye";

import './style.css';

function InputPassword({classes, colorIcon, name, ...props}) {
  const forWrapper = classes.join(' ');
  return (
    <div>
      {/* <p className="input-title">{children}</p> */}
      <div className={"input-password-wrapper " + forWrapper}>
        <LockKey color={colorIcon}/>
        <input className="input-password" type="password" name={name} id="" placeholder="Пароль" {...props}/>
        <Eye />
      </div>
    </div>
  );
}

export default InputPassword;
