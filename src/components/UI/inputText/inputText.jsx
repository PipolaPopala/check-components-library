import { Search } from "../../../utilits/icon/search";

import './style.css';

function InputText({children, colorIcon, name, ...props}) {
  return (
    <div>
      <p className="input-title">{children}</p>
      <div className="input-text-wrapper">
        <Search color={colorIcon}/>
        <input className="input-text" type="search" name={name} id="" placeholder="Empty" {...props}/>
      </div>
    </div>
  );
}

export default InputText;
