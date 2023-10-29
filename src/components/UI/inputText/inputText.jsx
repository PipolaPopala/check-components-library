import { Search } from "../../../utilits/icon/search";

import './style.css';

function InputText({children, classes, colorIcon, name, ...props}) {
  const forWrapper = classes.join(' ');
  return (
    <div>
      <p className="input-title">{children}</p>
      <div className={"input-text-wrapper " + forWrapper}>
        <Search color={colorIcon}/>
        <input className="input-text" type="search" name={name} id="" placeholder="Empty" {...props}/>
      </div>
    </div>
  );
}

export default InputText;
