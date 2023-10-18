import { LockKey } from "../../../utilits/icon/lockKey";
import { Eye } from "../../../utilits/icon/eye";

import './style.css';

function InputPassword({children, classes, colorIcon, name, ...props}) {
  classes = classes.join(' ');
  return (
    <div>
      <p className="input-title">{children}</p>
      <div className={"input-password-wrapper " + classes}>
        <LockKey color={colorIcon}/>
        <input className="input-password" type="password" name={name} id="" placeholder="Empty" {...props}/>
        <Eye />
      </div>
    </div>
  );
}

export default InputPassword;
